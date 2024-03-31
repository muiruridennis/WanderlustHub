import { incomeData, expensesData } from "../../Constants/DummyData";

export const calculateTotalIncome = () => {
    return incomeData.reduce((total, income) => total + income.amount, 0);
};

export const calculateTotalExpenses = () => {
    return expensesData.reduce((total, expense) => total + expense.amount, 0);
};

export const calculateGrossProfit = () => {
    const totalIncome = calculateTotalIncome();
    const totalExpenses = calculateTotalExpenses();
    return totalIncome - totalExpenses;
};

export const calculateOperatingExpenses = () => {
    // Calculate operating expenses by excluding non-operating expenses
    // such as interest, taxes, and other non-core business expenses
    return expensesData.reduce((total, expense) => {
        if (expense.isOperatingExpense) {
            return total + expense.amount;
        }
        return total;
    }, 0);
};
export const calculateOperatingProfit = () => {
    const grossProfit = calculateGrossProfit();
    const operatingExpenses = calculateOperatingExpenses();
    return grossProfit - operatingExpenses;
};

export const calculateNetProfit = () => {
    const operatingProfit = calculateOperatingProfit();
    // Consider non-operating expenses such as interest and taxes
    const nonOperatingExpenses = calculateTotalExpenses() - calculateOperatingExpenses();
    return operatingProfit - nonOperatingExpenses;
};




export const calculateNetProfitMargin = () => {
    return (calculateNetProfit() / calculateTotalIncome()) * 100;
};
export const calculateNetProfitForMonth = (year, month) => {
    // Filter income data for the specified year and month
    const filteredIncomeData = incomeData.filter(income => {
        const incomeDate = new Date(income.date);
        return incomeDate.getFullYear() === year && incomeDate.getMonth() === month;
    });

    // Filter expenses data for the specified year and month
    const filteredExpensesData = expensesData.filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate.getFullYear() === year && expenseDate.getMonth() === month;
    });

    // Calculate total income for the month
    const totalIncome = filteredIncomeData.reduce((total, income) => total + income.amount, 0);

    // Calculate total expenses for the month
    const totalExpenses = filteredExpensesData.reduce((total, expense) => total + parseFloat(expense.amount), 0);

    return totalIncome - totalExpenses
};

export const NetProfitPerMonth = () => {
    // Create an array to store net profit data for each month
    const netProfitArray = [];

    // Define month names for formatting
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Calculate net profit for each month in the year 2023
    for (let month = 0; month < 12; month++) {
        const netProfitForMonth = calculateNetProfitForMonth(2023, month);

        // Create an entry with month name and net profit value
        const monthEntry = {
            month: monthNames[month],
            netProfit: netProfitForMonth
        };

        // Add the entry to the netProfitArray
        netProfitArray.push(monthEntry);
    }

    return netProfitArray;
};



