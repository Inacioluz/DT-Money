import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />


            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Vendas</td>
                            <td>13/07/2015</td>
                        </tr>
                        <tr>
                            <td width="50%">Alimnetação</td>
                            <td>
                                <PriceHighlight variant="outline">
                                    - R$ 60,00
                                </PriceHighlight>
                            </td>
                            <td>Vendas</td>
                            <td>15/03/2021</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )

}