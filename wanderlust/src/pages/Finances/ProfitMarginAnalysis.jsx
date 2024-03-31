import React from 'react';
import { Typography } from '@mui/material';
import { transactionsData } from '../../Constants/DummyData';
import { expensesData } from '../../Constants/DummyData';

function ProfitMarginAnalysis() {
  // Map services to their revenue and expense totals
  const serviceData = transactionsData.reduce((serviceMap, transaction) => {
    const { type, amount } = transaction;
    const revenue = parseFloat(amount.replace('$', ''));

    if (serviceMap[type]) {
      serviceMap[type].revenue += revenue;
    } else {
      serviceMap[type] = { revenue, expenses: 0 };
    }

    return serviceMap;
  }, {});

  // Calculate total expenses for each service
  expensesData.forEach((expense) => {
    const { category, amount } = expense;
    const expenseAmount = parseFloat(amount.replace('$', ''));

    if (serviceData[category]) {
      serviceData[category].expenses += expenseAmount;
    } else {
      serviceData[category] = { revenue: 0, expenses: expenseAmount };
    }
  });

  // Calculate profit margin for each service
  Object.values(serviceData).forEach((service) => {
    service.profitMargin = ((service.revenue - service.expenses) / service.revenue) * 100;
  });

  return (
    <div>
      <Typography variant="h6">Profit Margin Analysis</Typography>
      {Object.entries(serviceData).map(([service, data]) => (
        <div key={service}>
          <Typography>{service}</Typography>
          <Typography>Profit Margin: {data.profitMargin.toFixed(2)}%</Typography>
        </div>
      ))}
      {/* Display other profit margin analysis components */}
    </div>
  );
}

export default ProfitMarginAnalysis;
