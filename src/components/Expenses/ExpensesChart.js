import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Oca', value: 0 },
    { label: 'Şub', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Nis', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Haz', value: 0 },
    { label: 'Tem', value: 0 },
    { label: 'Ağu', value: 0 },
    { label: 'Eyl', value: 0 },
    { label: 'Eki', value: 0 },
    { label: 'Kas', value: 0 },
    { label: 'Ara', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;