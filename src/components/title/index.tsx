import { Constainer } from "./style";

type TitleProps = {
    title: string
    subtitle: string
}

export function Title({ title,subtitle }: TitleProps) {
    return(
        <Constainer>
            <h2>{title}</h2>
            <span>{subtitle}</span>
        </Constainer>
    )
}   