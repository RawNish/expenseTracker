import React,{useState} from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GobalState';
export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)

    const {addTransaction}= useContext(GlobalContext);



    const onsubmit =e =>{
        e.preventDefault();

        const newTransaction ={
          id:Math.floor(Math.random()*100000000),
          text,
          amount:+amount
        }

        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add new Transaction</h3>
                <form id="form" onSubmit={onsubmit}>
                    <div className="form-control">
                       <label for="text">Text</label>
                       <input type="text" value={text} onChange={(e)=>{
                          setText(e.target.value)
                       }} placeholder="Enter Text..."/>
                       </div>
                    <div className="form-control">
                        <label for="amount">Amount<br/>
                        (negative - expense,positive - income)</label>
                        <input type="number" value={amount} onChange={(e)=>{
                          setAmount(e.target.value)
                       }} placeholder="Enter amt..." />
                    </div>
                    <button className="btn">Add Transaction</button>
                </form>
        </div>
    )
}
