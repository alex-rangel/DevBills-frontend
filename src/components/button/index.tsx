import { ComponentProps, forwardRef } from "react";
import { Botao } from "./style";

type ButtonProps = ComponentProps<'button'> & {
    variant?: 'default' | 'outline'
}

export const Button =  forwardRef<HTMLButtonElement, ButtonProps>(function ({ children, variant = 'default', ...props }, ref) {
    return(
        <Botao {...props} ref={ref} $variant={variant}>{children}</Botao>
    )
})