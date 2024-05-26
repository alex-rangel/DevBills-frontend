import { ComponentProps } from "react";
import { Botao } from "./style";

type ButtonProps = ComponentProps<'button'> & {
    variant?: 'default' | 'outline'
}

export function Button({ children, variant = 'default', ...props }: ButtonProps) {
    return(
        <Botao {...props} $variant={variant}>{children}</Botao>
    )
}