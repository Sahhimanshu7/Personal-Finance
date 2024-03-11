import React, { useEffect } from 'react';
import axios from "axios";

import { useAuth } from '../../../context/AuthContext';

function getMonthDays(Month) {
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  var month = (months.indexOf(Month) + 1);      
  return month;
}

function ExpenseLoader({ year, month }) {
  const { currentUser } = useAuth();
  const dateFormatter = () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });

    return formattedDate; 
  }

  const monthReq = getMonthDays(month);

  useEffect(() => {
    axios.post("http://localhost:8080/api/expense/get-expense",{
      year: year,
      month: monthReq, 
      user: currentUser
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  }, [year, month]);

  return (
    <div>Today: {dateFormatter()}</div>
  )
}

export default ExpenseLoader