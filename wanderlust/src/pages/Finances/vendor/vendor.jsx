import React, { useState, useMemo, useCallback } from 'react'
import { Container, Paper, Typography, Grid, SvgIcon, Button, Stack } from "@mui/material"
import PlusIcon from '@mui/icons-material/Add';
import ArrowDownOnSquareIcon from '@mui/icons-material/Check';
import ArrowUpOnSquareIcon from '@mui/icons-material/ArrowUpward';
import VendorSummaryCards from './vendorSummaryCard'
import VendorMonthlySpending from './vendorSpending';
import { Search } from '../../../Components/all-search';
import { applyPagination } from '../../../Utils/apply-pagination';
import { vendorData } from '../../../Constants/DummyData';
import { useSelection } from '../../../Customs/use-selection';
import VendorTable from './vendorTable';
import Popup from "../../../Components/Popup"
import ConfirmDialog from "../../../Components/ConfirmDialog";
import VendorForm from './vendorForm';

const useVendor = (page, rowsPerPage) => {
    return useMemo(
        () => {
            return applyPagination(vendorData, page, rowsPerPage);
        },
        [page, rowsPerPage]
    );
};

const useVendorIds = (vendors) => {
    return useMemo(
        () => {
            return vendors.map((vendor) => vendor.id);
        },
        [vendors]
    );
};
function Vendor() {
    const [openPopup, setOpenPopup] = useState(false);
    const [currentVendorId, setcurrentVendorId] = useState(null);
    const [page, setPage] = useState(0);
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const vendors = useVendor(page, rowsPerPage);
    const vendorsIds = useVendorIds(vendors);
    const vendorSelection = useSelection(vendorsIds);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
        setPage(0);

    };
    const filteredVendors = vendors.filter((vendor) => {
        const vendorInfo = `${vendor.name.toLowerCase()} ${vendor.email.toLowerCase()}`;
        return vendorInfo.includes(searchTerm.toLowerCase());

    });


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = useCallback(
        (event) => {
            setRowsPerPage(event.target.value);
        },
        []
    );
    const close = () => {
        setOpenPopup(false);
        setcurrentVendorId(null)
    }
    return (
        <Container maxWidth="xl">
            <Paper>
                <Typography variant="h4" align='center' sx={{ marginBottom: 2 }} >
                    Vendor
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <VendorMonthlySpending />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <VendorSummaryCards />
                    </Grid>

                </Grid>
                <Stack spacing={3} sx={{ marginTop: 3 }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={4}
                    >
                        <Stack spacing={1}>
                            <Stack
                                alignItems="center"
                                direction="row"
                                spacing={1}
                            >
                                <Button
                                    color="inherit"
                                    startIcon={(
                                        <SvgIcon fontSize="small">
                                            <ArrowUpOnSquareIcon />
                                        </SvgIcon>
                                    )}
                                >
                                    Import
                                </Button>
                                <Button
                                    color="inherit"
                                    startIcon={(
                                        <SvgIcon fontSize="small">
                                            <ArrowDownOnSquareIcon />
                                        </SvgIcon>
                                    )}
                                >
                                    Export
                                </Button>
                            </Stack>
                        </Stack>
                        <Button
                            color='success'
                            onClick={() => setOpenPopup(true)}
                            startIcon={(
                                <SvgIcon fontSize="small">
                                    <PlusIcon />
                                </SvgIcon>
                            )}
                            variant="contained"
                        >
                            Add
                        </Button>
                    </Stack>
                    <Search searchTerm={searchTerm} handleSearchInputChange={handleSearchInputChange} />
                    <VendorTable
                        count={vendorData.length}
                        items={filteredVendors}
                        onDeselectAll={vendorSelection.handleDeselectAll}
                        onDeselectOne={vendorSelection.handleDeselectOne}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleRowsPerPageChange}
                        onSelectAll={vendorSelection.handleSelectAll}
                        onSelectOne={vendorSelection.handleSelectOne}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        selected={vendorSelection.selected}
                        setOpenPopup={setOpenPopup}
                        setcurrentVendorId={setcurrentVendorId}
                        confirmDialog={confirmDialog}
                        setConfirmDialog={setConfirmDialog}
                    />


                </Stack>
            </Paper>
            <Popup
                close={close}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title="Vendor Form"
            >
                <VendorForm
                    currentVendorId={currentVendorId}
                    vendors={vendorData}
                    close={close}
                    setOpenPopup={setOpenPopup}
                />
            </Popup>
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </Container>
    )
}

export default Vendor






// Sure, implementing a vendor payment section in a finance application involves managing and tracking the payments made to vendors for goods or services provided. Here's an outline of what needs to be implemented:

// Vendor List Management:

// Create a database or data structure to store information about vendors.
// Implement a user interface to add, edit, and delete vendor records.
// Store details such as vendor name, contact information, address, payment terms, and more.
// Invoice and Payment Tracking:

// Allow users to create invoices for each vendor, specifying items, quantities, and costs.
// Implement a mechanism to mark invoices as paid and record payment details like date, method, and amount.
// Provide an overview of unpaid invoices and due dates for each vendor.
// Payment Recording:

// Allow users to record vendor payments outside of specific invoices (e.g., early payments, advances).
// Provide options to specify payment date, method, amount, and reference.
// Payment Approvals:

// Implement a workflow for approving payments before they are processed.
// Assign roles and permissions to users based on their authorization level to approve payments.
// Payment Reports and Analytics:

// Provide reports and insights about vendor payments, such as total payments made, pending payments, payment trends, and more.
// Implement graphical representations, such as charts and graphs, to visualize payment data.
// Payment Reminders and Notifications:

// Implement reminders for upcoming payment due dates.
// Notify users when payments are due, overdue, or when payments are made.
// Integration with Accounting:

// Integrate the vendor payment section with the overall accounting system.
// Ensure that payment data is accurately recorded and synchronized with the general ledger.
// Data Security and Privacy:

// Implement proper authentication and authorization mechanisms to ensure that only authorized users can access and modify payment data.
// Implement data encryption to protect sensitive payment and vendor information.
// User Experience and Interface:

// Design a user-friendly interface that allows users to easily manage vendor payments.
// Implement features such as search, sorting, and filtering to help users find specific payment records.
// Export and Integration:

// Allow users to export payment data and reports in various formats, such as PDF or Excel.
// Integrate with other systems or tools, such as Enterprise Resource Planning (ERP) systems.
// Auditing and Compliance:

// Implement a system to track changes to payment records and maintain an audit trail.
// Ensure compliance with financial regulations and standards.
// Testing and Quality Assurance:

// Thoroughly test the vendor payment system to identify and fix any bugs or issues.
// Perform quality assurance to ensure the accuracy of payment calculations and data.