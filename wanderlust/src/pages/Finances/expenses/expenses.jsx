import React, { useState, useMemo } from 'react';
import {
  Container, Typography, Box, Paper,
  Button, SvgIcon,
  Stack, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import PlusIcon from '@mui/icons-material/Add';
import Popup from "../../../Components/Popup"
import ConfirmDialog from "../../../Components/ConfirmDialog";

import { applyPagination } from '../../../Utils/apply-pagination';
import ExpensesTable from "./expensesTable";
import ExpenseSubmissionForm from "./ExpenseSubmissionForm";
import { Search } from '../../../Components/all-search';
import { expensesData } from '../../../Constants/DummyData';
import ExpenseSummaryCards from './ExpenseSummaryCards';



function Expenses() {
  const [openPopup, setOpenPopup] = useState(false);
  const [currrentExpenseId, setCurrentExpenseId] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', action: "" });


  const filteredExpenses = expensesData.filter(expense =>
    selectedMonth === '' || new Date(expense.date).toLocaleString('default', { month: 'long' }) === selectedMonth
  );

  const useExpenses = (page, rowsPerPage) => {
    return useMemo(
      () => {
        return applyPagination(filteredExpenses, page, rowsPerPage);
      },
      [page, rowsPerPage, selectedMonth]
    );
  };

  const expenses = useExpenses(page, rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const close = () => {
    setOpenPopup(false);
    setCurrentExpenseId(null)
  }

  const months = [
    { value: '', label: 'All Months' },
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ];
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Paper>
          <Typography variant="h4" align='center' sx={{ marginBottom: 2 }} >
            Expenses
          </Typography>
          <ExpenseSummaryCards expensesData={filteredExpenses} />

          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ padding: '1rem', borderBottom: '1px solid #ccc' }} // Add padding and border
            >
              <Stack direction="row" alignItems="center">
                <Search />
                <FormControl sx={{ minWidth: 80, ml: 2, marginRight: 2 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Month</InputLabel>
                  <Select
                    variant='outlined'
                    autoWidth
                    label="expenses By Month"
                    value={selectedMonth}
                    onChange={(event) => setSelectedMonth(event.target.value)}
                  >
                    {months.map(month => (
                      <MenuItem key={month.value} value={month.value}>{month.label}</MenuItem>
                    ))}

                  </Select>
                </FormControl>
              </Stack>
              <Button
                onClick={() => setOpenPopup(true)}
                variant="contained"
                color='success'
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
              >
                New Expense
              </Button>
            </Stack>
            <ExpensesTable
              selectedMonth={selectedMonth}
              expenses={expenses}
              filteredExpenses={filteredExpenses}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              page={page}
              rowsPerPage={rowsPerPage}
              setOpenPopup={setOpenPopup}
              setCurrentExpenseId={setCurrentExpenseId}
              currrentExpenseId={currrentExpenseId}
              confirmDialog={confirmDialog}
              setConfirmDialog={setConfirmDialog}
            />
          </Stack>

        </Paper>

      </Container>
      <Popup
        close={close}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <ExpenseSubmissionForm
          currrentExpenseId={currrentExpenseId}
          expenses={filteredExpenses}
          close={close}
          setOpenPopup={setOpenPopup}
        />
      </Popup>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </Box >
  );
}

export default Expenses;
// This workflow ensures that company funds are used efficiently and transparently, and it helps maintain accurate financial records. Here's how the process typically works:

// 1. Expense Submission:

// Employees log into the tours and travel web app and access the expense submission section.
// They provide details about the expense, such as category (e.g., transportation, meals, accommodation), date, description, and amount.
// Employees may need to attach supporting documents, such as receipts or invoices, to validate the expense.
// 2. Expense Review and Approval:

// Submitted expenses are routed to the respective manager or designated approver based on predefined hierarchies or roles.
// Approvers receive notifications or alerts about pending expense submissions for their review.
// Approvers can access a dashboard or list of pending expenses, along with relevant details and attached documents.
// They review the expenses to ensure they adhere to company policies, budgets, and other guidelines.
// Approvers can approve or reject expenses. If rejected, they can provide reasons for the rejection.
// 3. Communication and Notifications:

// The system sends automated notifications to employees once their expenses are approved or rejected.
// If an expense is rejected, the employee may have the opportunity to revise and resubmit it.
// 4. Accounting and Reimbursement:

// Once approved, the expense is recorded in the financial system, and the reimbursement process is initiated.
// The approved amount is reimbursed to the employee through the chosen payment method (e.g., payroll, bank transfer).
// Expenses may be integrated with payroll systems or financial management tools for accurate accounting.
// 5. Reporting and Audit:

// The finance team can generate reports that provide insights into employee expenses, trends, and reimbursement patterns.
// The system maintains an audit trail of all expense submissions, approvals, and rejections for compliance and transparency.
// Benefits of Expense Approval Workflow:

// Ensures Compliance: Expenses are aligned with company policies and financial regulations.
// Controls Costs: Managers can monitor and control spending to avoid unnecessary expenses.
// Transparency: Provides transparency into employee spending and the approval process.
// Accuracy: Reduces errors and inaccuracies in expense reporting.
// Audit Trail: Maintains a comprehensive audit trail for future reference and audits.
// Efficiency: Automates the approval process, saving time for both employees and managers.
// Implementation:

// Implementing an expense approval workflow involves integrating this functionality into your tours and travel web app.
// Utilize user authentication to ensure that only authorized employees and managers can access the system.
// Implement role-based access control to define who can submit, approve, and manage expenses.
// Design an intuitive user interface for expense submission and approval, with clear instructions and options for attaching documents.
// Consider integrating with email notifications or push notifications to keep users informed about the status of their expenses.

// Table Name: expenses

// | id | category            | description         | amount   | date       | status    | approver   | vendor         | payment_method  | attachment_path | isApproved |
// |----|---------------------|---------------------|----------|------------|-----------|------------|----------------|-----------------|-----------------|------------|
// | 1  | Accommodation       | Hotel booking       | $500.00  | 2023-08-15 | Pending   | John Doe   | ABC Hotels     | Credit Card     | /attachments/1  | false      |
// | 2  | Transportation      | Taxi fare           | $50.00   | 2023-08-16 | Completed | Jane Smith | XYZ Cabs       | Cash            | /attachments/2  | true       |
// | 3  | Meals               | Lunch meeting       | $30.00   | 2023-08-17 | Rejected  | Mark Brown | Fresh Bites    | Electronic Transfer | /attachments/3 | false      |
// | ...| ...                 | ...                 | ...      | ...        | ...       | ...        | ...            | ...             | ...             | ...        |

