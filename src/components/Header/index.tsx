import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";

import logoImg from '../../assets/money-logo.svg'

export function Header() {
    return (
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoImg} />
                    

                    <NewTransationButton>Nova Transação</NewTransationButton>
                </HeaderContent>
            </HeaderContainer>
    )
}