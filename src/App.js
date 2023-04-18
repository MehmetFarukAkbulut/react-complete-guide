import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Tuvalet Kağıdı',
    amount: 194.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Yeni TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Araba Bakımı',
    amount: 2594.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Yeni Masa (Evkur)',
    amount: 1450,
    date: new Date(2022, 5, 12),
  },{
    id: 'e5',
    title: 'Galatasaray Kombine',
    amount: 12000,
    date: new Date(2023, 1, 10),
  },
  {
    id: 'e6',
    title: 'Evlilik Yüzüğü',
    amount: 20000,
    date: new Date(2020, 1, 10),
  },{
    id: 'e7',
    title: 'Boşanma Davası',
    amount: 8000,
    date: new Date(2023, 4, 8),
  },{
    id: 'e8',
    title: 'Çift Terapisi',
    amount: 25000,
    date: new Date(2022, 8, 17),
  },{
    id: 'e9',
    title: 'Fitness üyeliği',
    amount: 2500,
    date: new Date(2022, 10, 22),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;