import React from 'react'
import {
    Typography, Box, Paper,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
    TablePagination
} from '@mui/material';

import CollapsibleIncomeRow from "./collapsibleIncomeRow"

function IncomeTable(props) {
    const {
        selectedMonth,
        income = [],
        filteredIncome = [],
        onPageChange = () => { },
        onRowsPerPageChange,
        page = 0,
        rowsPerPage = 0,
        setOpenPopup,
        setCurrentIncomeId,
        currrentIncomeId,
        confirmDialog,
        setConfirmDialog

    } = props;

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Date</TableCell>
                            <TableCell>Source</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>payerInfo</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>More Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            income.length !== 0 ? (
                                income.map((income) => (
                                    <CollapsibleIncomeRow key={income.id} income={income} setOpenPopup={setOpenPopup} setCurrentIncomeId={setCurrentIncomeId}
                                        currrentIncomeId={currrentIncomeId} confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog}
                                    />
                                ))
                            ) :
                                <Box sx={{ minHeight: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>

                                    <Typography variant='h6'>{`No Income data for ${selectedMonth}`} </Typography>
                                </Box>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                rowsPerPageOptions={[10, 25, 50]}
                count={filteredIncome.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </>
    )
}

export default IncomeTable
