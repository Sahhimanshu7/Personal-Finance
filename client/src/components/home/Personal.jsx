import React from 'react'
import DatePicker from 'react-date-picker';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import 'react-date-picker/dist/DatePicker.css';
import "../../assests/home/personal.css";

function Personal() {
  const [year, setYear] = useState(2023);

  const [month, setMonth] = useState("January");

  const [activeButton, setActiveButton] = useState(""); // Track active button

  const [dataSelected, setDataSelected] = useState("expense");

  const navigate = useNavigate();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const handleButtonClick = (clickedMonth) => {
    setMonth(clickedMonth);
    setActiveButton(clickedMonth); // Set active button
  };

  return (
    <div className='personal'>
      <h1 className='personal-header'>
        Personal Budgetting
        <AccountBalanceWalletIcon />
      </h1>
      <div className='vertical-line'>
      </div>
      <div className='mid'>
        <div className='list-dates'>
          <div className='years'>
            <h1 className='choose-year'>Choose Year</h1>
            <div className='selector-year'>
              <select value={year} onChange={handleChange}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
          </div>
          <div className='months'>
            <h1 className='choose-month'>Choose Month</h1>
            <div className='selector-month'>
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => (
                <button 
                  key={m}
                  className={classNames(activeButton === m ? 'selected-month' : '')} // Apply active class based on state
                  onClick={() => handleButtonClick(m)}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
          <button className='load-data'>Load Data</button>
        </div>
        <div className='list-items'>
          {
            dataSelected === "expenses" ? 
            <div className='expenses'>
              <h1 className='expenses-list'>Expenses</h1>
              <button onClick={(e) => setDataSelected("income")}>
                Income
              </button>
            </div>
            :
            <div className='incomes'>
              <h1 className='incomes-list'>Incomes</h1>
              <button onClick={(e) => setDataSelected("expenses")}>
                Expenses
              </button>
            </div>
          }    
        </div>
      </div>
      <div className='add-buttons'>
        <button 
          className='add-expense'
          onClick={() => navigate("/add-expense")}
        >
          Add Expense
        </button>
        <button 
          className='add-income'
        >
          Add Income
        </button>
      </div>  
    </div>
  )
}

export default Personal;