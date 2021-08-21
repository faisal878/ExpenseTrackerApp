import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

function Balance() {
    const transactions = useContext(GlobalContext).transactions;
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(0);

    return (
        <div>
            <h4>Balance</h4>
            <p>{total}</p>

        </div>
    )
}

export default Balance
