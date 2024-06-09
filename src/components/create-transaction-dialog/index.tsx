import { useCallback, useEffect, useState } from "react";
import { useFetchAPI } from "../../hooks/useFetchAPI"; 

import { Container, Content, CurrencyInput, ErrorMessage, InputGroup, RadioForm, RadioGroup } from "./styles";

import { Dialog } from "../dialog";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";
import { InputMask } from "@react-input/mask";
import { useForm } from "react-hook-form";
import { CreateTransactionData } from "../../validators/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTransactionShema } from "../../validators/schemas";

export function CreateTransactonDialog(){

    const { register, 
            handleSubmit, 
            reset,
            formState: { errors }  
        } = useForm<CreateTransactionData>({
            defaultValues:{
                categoryId: 'null',
                title: '',
                amount: '',
            },
            resolver: zodResolver(createTransactionShema),
        })

    const { categories, fetchCategories, createTransaction } = useFetchAPI()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetchCategories()
    },[fetchCategories])

    const handleClose = useCallback(() => {
        reset()
        setOpen(false)
    }, [reset])
    
    const onSubmit = useCallback(
        async (data: CreateTransactionData) => {
          await createTransaction(data) 
          handleClose();
        },
        [handleClose, createTransaction],
      );

    return(
        <Dialog 
        open={open}
        onOpenChange={setOpen}
        trigger={<Button>Nova transação</Button>}
        >
            <Container>
                <Title
                title="Nova Transação"
                subtitle="Crie uma nova transação para seu controle financeiro"
                />

            <form onSubmit={handleSubmit(onSubmit)}>
                <Content>
                    <InputGroup>
                        <label>Categoria</label>
                        <select{...register('categoryId')}>
                            <option value="null" selected disabled >Selecione uma categoria...</option>
                            {categories?.length &&
                                categories.map((item) => (
                                    <option key={item._id} value={item._id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </select>
                        {errors.categoryId && (
                            <ErrorMessage>{errors.categoryId.message}</ErrorMessage>
                        )}
                        
                    </InputGroup>
                    <div>
                        <Input 
                            variant="black"
                            label="Nome" 
                            placeholder="Nome da transação..."
                            {...register('title')}
                            error={errors.title?.message}
                        />
                        {errors.title && (
                            <ErrorMessage>{errors.title.message}</ErrorMessage>
                        )}
                    </div>
                    <InputGroup>
                        <label>Valor</label>
                        <CurrencyInput
                            placeholder="R$ 0,00"
                            format= "currency"
                            currency="BRL"
                            {...register('amount')}
                        />
                         {errors.amount && (
                            <ErrorMessage>{errors.amount.message}</ErrorMessage>
                        )}
                    </InputGroup>
                    <div>
                        <InputMask
                            component={Input}
                            mask='dd/mm/aaaa'
                            replacement={{d: /\d/, m: /\d/, a: /\d/}}
                            variant='black'
                            label='Data'
                            placeholder='dd/mm/aaaa'
                            error={errors.date?.message}
                            {...register('date')}
                        />
                        {errors.date && (
                            <ErrorMessage>{errors.date.message}</ErrorMessage>
                        )}
                    </div>
                <RadioForm>
                    <RadioGroup>
                        <input 
                            type="radio" 
                            id="income" 
                            value='income' 
                            {...register('type')}
                        />
                        <label htmlFor="income">Receita</label>
                    </RadioGroup>
                    <RadioGroup>
                        <input 
                            type="radio" 
                            id="expense" 
                            value='expense' 
                            {...register('type')}
                        />
                        <label htmlFor="expense">Gasto</label>
                    </RadioGroup>
                        {errors.type && (
                            <ErrorMessage>{errors.type.message}</ErrorMessage>
                        )}
                </RadioForm>
              </Content>
                <footer>
                    <Button onClick={handleClose} variant="outline" type="button">Cancelar</Button>
                    <Button type="submit">Cadastrar</Button>
                </footer>
            </form>
            </Container>

        </Dialog>
    )
}