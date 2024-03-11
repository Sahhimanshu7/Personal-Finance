import React, { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../../context/AuthContext";

function Incomes() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const { currentUser, loading, setLoading, setError } = useAuth();

  const id = useId();

  const navigate = useNavigate();

  /*
  * The group members is null 
  */
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (title == "") {
      setError("Invalid Title!");
      return;
    } else if (amount == "") {
      setError("Invalid Amount!");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:8080/api/income/create-income", {
        id: id,
        creator: currentUser,
        title: title,
        amount: amount,
        description: description,
        category: category,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError("Failed to Add Income!");
    }
  };

  return (
    <div className='income-main'>
      <h1 className='income-head'>
        Add income.
      </h1>
      <div className='form-main'>
        <form className='form' onSubmit={handleFormSubmit}>
          <input 
            className='title input-income'
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
          disabled={loading}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default Incomes;