import React from 'react';
import {
    Box,
    Table,
    TableCell,
    TableRow,
    IconButton,
    Collapse,
    TableHead,
    TableBody,
    Tooltip
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ActionButtons from './actionButtons';

const getStatusColor = (status) => {
    if (status === 'Received') {
        return 'green';
    } else if (status === 'Pending') {
        return 'orange';
    } else if (status === 'Failed') {
        return 'red';
    } else {
        return 'black';
    }
};
function CollapsibleIncomeRow(props) {
    const {
        income,
        setOpenPopup,
        setCurrentIncomeId,
        currrentIncomeId,
        confirmDialog,
        setConfirmDialog } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{
                '& > *': { borderBottom: 'unset' },
                backgroundColor: open ? '#FFD1DA' : 'inherit',
            }}>
                <TableCell>
                    <Tooltip title="See More">
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </Tooltip>
                </TableCell>
                <TableCell>{income.date}</TableCell>
                <TableCell>{income.source}</TableCell>
                <TableCell>{income.amount}</TableCell>
                <TableCell>{income.category}</TableCell>
                <TableCell>{income.payerInfo}</TableCell>
                <TableCell>
                    <span style={{ color: getStatusColor(income.status) }}>{income.status}</span>
                </TableCell>
                <TableCell>
                    <ActionButtons
                        income={income}
                        setOpenPopup={setOpenPopup}
                        setCurrentIncomeId={setCurrentIncomeId}
                        currrentIncomeId={currrentIncomeId}
                        confirmDialog={confirmDialog}
                        setConfirmDialog={setConfirmDialog}
                    />
                </TableCell>
            </TableRow>
            <TableRow sx={{ borderBottom: open ? 2 : 'unset', }}>
                <TableCell sx={{
                    paddingBottom: 0, paddingTop: 0,
                    backgroundColor: open ? '#FFD1DA' : 'inherit',
                }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ marginBottom: open ? 4 : "" }}>
                            <Table size="small" aria-label="purchases" >
                                <TableHead>
                                    <TableRow >
                                        <TableCell>Description</TableCell>
                                        <TableCell>Payment Method</TableCell>
                                        <TableCell >Confirmation Status</TableCell>
                                        <TableCell >Reference Number</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={income.id}>
                                        <TableCell component="th" scope="row">
                                            {income.description}
                                        </TableCell>
                                        <TableCell>{income.paymentMethod}</TableCell>
                                        <TableCell >{income.confirmationStatus}</TableCell>
                                        <TableCell >
                                            {income.referenceNumber}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
export default CollapsibleIncomeRow