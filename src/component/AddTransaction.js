import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { AddTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random * 1000),
            text,
            amount: +amount
        }
        AddTransaction(newTransaction);

    }



    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text" className="label">Text</label>
                    <input type="text" value={text}
                        onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="Amount" className="label">Amount</label>
                    <input type="number" value={amount}
                        onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..." />

                </div>
                <button className="btn">All Transition</button>

            </form>


        </div>
    )
}

export default AddTransaction
