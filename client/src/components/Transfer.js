import React, { useState } from "react";

const Transfer = ({ createTransfer }) => {
    const [transfer, setTransfer] = useState(undefined);

    const updateTransfer = (e, field) => {
        const value = e.target.value;
        setTransfer({...transfer, [field]: value})
    }

    const submit = (e) => {
        e.preventDefault();
        createTransfer(transfer);
    }

    return (
        <div>
            <h2>Create transfer</h2>
            <form onSubmit={e => submit(e)}>
                <label htmlFor="amount">Amount</label>
                <input
                  id="amount"
                  type="text"
                  onChange={ e => updateTransfer(e, 'amount')}
                />
                <label htmlFor="amount">to</label>
                <input
                  id="to"
                  type="text"
                  onChange={ e => updateTransfer(e, 'to')}
                />
              <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Transfer;