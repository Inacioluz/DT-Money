import * as Dialog from '@radix-ui/react-dialog';

import { Content, Overlay, CloseButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';


export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form>
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="preço" required />
                    <input type="text" placeholder="Categoria" required />


                    <TransactionType>
                        <TransactionTypeButton variant="income" value="income">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24} />
                            Saida
                        </TransactionTypeButton>
                    </TransactionType>
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
                
            </Content>
        </Dialog.Portal>
    )
}