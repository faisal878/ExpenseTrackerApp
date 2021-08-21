import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

function TransactionList() {
    // const transactions = Object.values( useContext(GlobalContext) )[0];
    const transactions = useContext(GlobalContext).transactions;


    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {/* {transactions.map(( transaction, i) => {
                console.log( transaction.text)
                console.log( transaction)
                 return (<Transaction key={transaction.id} transaction={transaction}/>)
            }) } */}

                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>

        </div>
    )
}

export default TransactionList
