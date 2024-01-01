import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";
import { NewTransactionModal } from "../NewTransactionModal/index.tsx";
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../assets/money-logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransationButton>Nova Transação</NewTransationButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}