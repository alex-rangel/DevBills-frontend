import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { Container, ErrorMessage } from "./styles";

import { Dialog } from "../dialog";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";
import { theme } from "../../styles/theme";
import { createCategorySchema } from "../../validators/schemas";
import { useFetchAPI } from "../../hooks/useFetchAPI";  
import { CreateCategoryData } from "../../validators/types";


export function CreateCategotyDialog(){
    
    const { createCategory } = useFetchAPI()
    const [open, setOpen] = useState(false)

    const { register, handleSubmit, formState: { errors }, } = useForm<CreateCategoryData>({
        defaultValues: {
            title: '',
            color: theme.colors.primary
        },
        resolver: zodResolver(createCategorySchema)
    })
    
    const handleClose = useCallback(() => {
        setOpen(false)
    }, [])
    
    const onSubmit = useCallback(
        async (data: CreateCategoryData) => {
            
            await createCategory(data)
            handleClose()
    }, [handleClose, createCategory])

    return(
        <Dialog 
        open={open}
        onOpenChange={setOpen}
        trigger={<Button>Nova categoria</Button>}
        >
            <Container>
                <Title
                title="Nova Categoria"
                subtitle="Crie uma nova categoria para as suas transações"
                />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <Input label="Nome" placeholder="Nome da categoria..." {...register('title')}/>
                        {errors.title && (
                            <ErrorMessage>{errors.title.message}</ErrorMessage>
                        )}
                    </div>
                    <Input label="Cor" type="color" variant="black" {...register('color')}/>
                </div>
                <footer>
                    <Button onClick={handleClose} variant="outline" type="button">Cancelar</Button>
                    <Button type="submit">Cadastrar</Button>
                </footer>
            </form>
            </Container>

        </Dialog>
    )
}