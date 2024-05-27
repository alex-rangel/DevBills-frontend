import { ComponentProps, forwardRef } from "react";
import { Botao } from "./styles";
import { MagnifyingGlass } from "@phosphor-icons/react";

type ButtonIconProps = ComponentProps<'button'>

export const ButtonIcon =  forwardRef<HTMLButtonElement, ButtonIconProps>(function ({ ...props }, ref) {
    return(
        <Botao {...props} ref={ref}>
            <MagnifyingGlass/>
        </Botao>
    )
})