import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";
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
                    
                    <Dialog.Portal>
                        <Dialog.Overlay />

                        <Dialog.Content>
                            <Dialog.Title>Nova Transação</Dialog.Title>
                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}