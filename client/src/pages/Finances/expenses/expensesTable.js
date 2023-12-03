import React from 'react'
import {
    Typography, Box, Paper,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
    TablePagination,
} from '@mui/material';
import ActionButtons from './actionButtons';
const getStatusColor = (status) => {
    if (status === 'Approved') {
        return 'green';
    } else if (status === 'pending') {
        return 'orange';
    } else if (status === 'Failed') {
        return 'red';
    } else {
        return 'black';
    }
};
function ExpensesTable(props) {
    const {
        selectedMonth,
        expenses = [],
        filteredExpenses = [],
        onPageChange = () => { },
        onRowsPerPageChange,
        page = 0,
        rowsPerPage = 0,
        setOpenPopup,
        setCurrentExpenseId,
        currrentExpenseId, 
        confirmDialog,
        setConfirmDialog

    } = props;

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>approver</TableCell>
                            <TableCell>More Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            expenses.length !== 0 ? (
                                expenses.map((expense) => (
                                    <TableRow key={expense.id}>
                                        <TableCell>{expense.date}</TableCell>
                                        <TableCell>{expense.description}</TableCell>
                                        <TableCell>{expense.amount}</TableCell>
                                        <TableCell>{expense.category}</TableCell>
                                        <TableCell>  <span style={{ color: getStatusColor(expense.status) }}>{expense.status}</span></TableCell>
                                        <TableCell>{expense.approver}</TableCell>
                                        <TableCell>
                                            <ActionButtons
                                                expense={expense}
                                                setOpenPopup={setOpenPopup}
                                                setCurrentExpenseId={setCurrentExpenseId}
                                                currrentExpenseId={currrentExpenseId}
                                                confirmDialog={confirmDialog}
                                                setConfirmDialog={setConfirmDialog}

                                            />
                                        </TableCell>

                                    </TableRow>
                                ))
                            ) :
                                <Box sx={{ minHeight: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>

                                    <Typography variant='h6'>{`No Expenses data for ${selectedMonth}`} </Typography>
                                </Box>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                rowsPerPageOptions={[10, 25, 50]}
                count={filteredExpenses.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </>
    )
}

export default ExpensesTable
