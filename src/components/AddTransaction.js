import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
//import axios from "axios";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  }
  
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Comments</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value) } placeholder="Enter comment..."  />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
