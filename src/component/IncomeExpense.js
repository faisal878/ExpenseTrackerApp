import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
var name = () => { }


function IncomeExpense() {
    const transactions = useContext(GlobalContext).transactions;
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc = acc + item), 0).toFixed(2);
    const expence =
        (amounts.filter(item => item < 0).reduce((acc, item) => (acc = acc - item), 0) * -1).toFixed(2);
    console.log(expence);


    return (
        <div className="inc-exp-container">
            <div>
                <h4>income</h4>
                <p id="mony-plus" className="mony-plus">{income}</p>

            </div>
            <div>
                <h4>Expences</h4>
                <p id="mony-minus" className="mony-minus">{expence}</p>

            </div>
        </div>
    )
}

export default IncomeExpense
