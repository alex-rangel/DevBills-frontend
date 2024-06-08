import { useCallback, useEffect, useState } from "react";
import { useFetchAPI } from "../../hooks/useFetchAPI"; 

import { Container, Content, CurrencyInput, InputGroup, RadioForm, RadioGroup } from "./styles";

import { Dialog } from "../dialog";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";
import { InputMask } from "@react-input/mask";

export function CreateTransactonDialog(){
    
    const { categories, fetchCategories } = useFetchAPI()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetchCategories()
    },[fetchCategories])

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [])
    
    const onSubmit = useCallback(() => {
        handleClose()
    }, [handleClose])

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

            <form>
                <Content>
                    <InputGroup>
                        <label>Categoria</label>
                        <select>
                            <option value="null" selected disabled >Selecione uma categoria...</option>
                            {categories?.length &&
                                categories.map((item) => (
                                    <option key={item._id} value={item._id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </select>
                    </InputGroup>
                    <Input label="Nome" placeholder="Nome da transação..."/>
                    <CurrencyInput
                        placeholder="R$ 0,00"
                        format= "currency"
                        currency="BRL"
                    />
                    <InputMask
                    component={Input}
                    mask='dd/mm/yyyy'
                    replacement={{d: /\d/, m: /\d/, y: /\d/}}
                    variant='black'
                    label='Data'
                    placeholder='dd/mm/yyyy'
                />
                <RadioForm>
                    <RadioGroup>
                        <input type="radio" id="income" name="type"/>
                        <label htmlFor="income">Receita</label>
                    </RadioGroup>
                    <RadioGroup>
                        <input type="radio" id="expense" name="type"/>
                        <label htmlFor="expense">Gasto</label>
                    </RadioGroup>
                </RadioForm>
              </Content>
                <footer>
                    <Button onClick={handleClose} variant="outline" type="button">Cancelar</Button>
                    <Button onClick={onSubmit} type="button">Cadastrar</Button>
                </footer>
            </form>
            </Container>

        </Dialog>
    )
}