import React from 'react';
import { Box, Container, Divider, Button, Paper, Typography, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from "@mui/material/styles";

function Transaction({ transactionsData, transactionId }) {
    // Find the selected transaction based on the transactionId
    const selectedTransaction = transactionsData.find(
        (transaction) => transaction.id === transactionId
    );

    if (!selectedTransaction) {
        // Handle case when selectedTransaction is not found
        return <div>No transaction data found for the selected ID</div>;
    }

    const StyledBox = styled(Box)({
        backgroundColor: "#F5F5F5",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 70
    });

    return (
        <Container maxWidth="lg">
            <StyledBox>
                <StyledBox>
                    {selectedTransaction.isApproved === true && selectedTransaction.status === "success" ? (
                        <CheckCircleIcon color='success' fontSize="large" />
                    ) : (
                        <CancelIcon color='error' fontSize='large' />
                    )}
                </StyledBox>

            </StyledBox>
            <Typography variant="h6" align="center">
                {selectedTransaction.details}
            </Typography>
            <Divider />
            <Paper elevation={2} sx={{ paddingY: "2rem", paddingX: "1rem", marginY: 1, backgroundColor: "#FFEBEB" }}>
                <Stack spacing={2}>
                    <TransactionInfo label="Amount" value={selectedTransaction.amount} />
                    <TransactionInfo label="Payment Status" value={selectedTransaction.status} color={selectedTransaction.status === "success" ? "green" : "red"} />
                    <TransactionInfo label="Ref Number" value={selectedTransaction.reference} />
                    <TransactionInfo label="Payment Method" value={selectedTransaction.paymentMethod} />
                    <TransactionInfo label="Payment Time" value={selectedTransaction.date} />
                    <TransactionInfo label="Payment Approved" value={selectedTransaction.isApproved ? "Approved" : "Not Approved"} color={selectedTransaction.isApproved ? "green" : "red"} />
                </Stack>
            </Paper>
            <Button variant="contained" fullWidth>
                Back
            </Button>
        </Container>
    );
}

const TransactionInfo = ({ label, value, color }) => (
    <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="body1">{label}</Typography>
        <Typography variant="body1" align='right' sx={{ color: color || 'inherit' }}>
            {value}
        </Typography>
    </Stack>
);

export default Transaction;

