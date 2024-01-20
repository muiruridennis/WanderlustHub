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
import IncomeTable from "./incomeTable";
import IncomeSubmissionForm from "./incomeSubmissionForm";
import { Search } from '../../../Components/all-search';
import { incomeData } from '../../../Constants/DummyData';
import IncomeSummaryCards from './incomeSummaryCards';



function Income() {
  const [openPopup, setOpenPopup] = useState(false);
  const [currrentIncomeId, setCurrentIncomeId] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', action: "" });

  const filteredIncome = incomeData.filter(income =>
    selectedMonth === '' || new Date(income.date).toLocaleString('default', { month: 'long' }) === selectedMonth
  );

  const useIncome = (page, rowsPerPage) => {
    return useMemo(
      () => {
        return applyPagination(filteredIncome, page, rowsPerPage);
      },
      [page, rowsPerPage, selectedMonth]
    );
  };

  const income = useIncome(page, rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const close = () => {
    setOpenPopup(false);
    setCurrentIncomeId(null)
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
            Income
          </Typography>
          <IncomeSummaryCards incomeData={filteredIncome} />

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
                    label="Income By Month"
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
                New Income
              </Button>
            </Stack>
            <IncomeTable
              selectedMonth={selectedMonth}
              income={income}
              filteredIncome={filteredIncome}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              page={page}
              rowsPerPage={rowsPerPage}
              setOpenPopup={setOpenPopup}
              setCurrentIncomeId={setCurrentIncomeId}
              currrentIncomeId={currrentIncomeId}
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
        <IncomeSubmissionForm
          currrentIncomeId={currrentIncomeId}
          income={filteredIncome}
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

export default Income;
