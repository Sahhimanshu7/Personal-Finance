import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Expenses() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <div className='expense-main'>
      <h1 className='expense-head'>
        Add expenses.
      </h1>
      <div className='form-main'>
        <form className='form' onSubmit={handleFormSubmit}>
          <input 
            className='title input-expense'
            id='title'
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title...'
          /> 
          <input 
            className='description input-description'
            id='description'
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description...'
          /> 
          <input 
            className='amount input-amount'
            id='amount'
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Amount'
          />
          <input 
            className='category input-category'
            id='category'
            onChange={(e) => setCategory(e.target.value)}
            placeholder='Select Category'
          />
          <button 
          type='submit'
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default Expenses