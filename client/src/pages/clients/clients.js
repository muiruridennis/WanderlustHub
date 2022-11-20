import React, { useEffect, useState } from 'react';
import { alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Popup from "../../Components/Popup";
import {
  Button, Container,
  Grid, Box, Switch, FormControlLabel, Tooltip, TextField, Checkbox,
  TablePagination, Paper, Typography, Toolbar, TableSortLabel, TableRow,
  TableHead, TableContainer, TableCell, TableBody, Table, Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { headCells } from "../../Constants/DummyData"
// import {useHistory} from "react-router-dom"
import { visuallyHidden } from '@mui/utils';
import { useSelector, useDispatch } from "react-redux";
import { fetchClients, deleteClient, getClientsBySearch } from "../../Actions/clients";
import useDebounce from "../../Customs/Debounce"

import RegForm from "./regForm";
import Circularprogress from "../../Components/CircularProgress";
import Notification from "../../Components/Notification"
import ConfirmDialog from "../../Components/ConfirmDialog";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Search from "../../Components/Search"

export default function Clients() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState("id");
  const [selected, setSelected] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
  const isMenuOpen = Boolean(anchorEl);
  const dispatch = useDispatch();
  const { clients, isLoading, isSearching } = useSelector((state) => state.clients);


  useEffect(() => {
    dispatch(fetchClients());
  }, [currentId, dispatch]);

  const debounce = useDebounce(searchInput, 1000);
  useEffect(() => {
    if (debounce) {
      dispatch(getClientsBySearch(debounce));
      console.log("clients", clients);
    }
   
  }, [debounce])

  {isSearching && <div>Searching ...</div>}
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleMoreActionsClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleOpenModal = clientId => {
    setCurrentId(clientId)
    setOpenPopup(true);
  };


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - clients.length) : 0;
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }



  function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'center' : 'left'}
              // padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>

          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
      <Toolbar
        sx={{
          display: "flex",
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected <= 0 ? (
          <Box>

            <div style={{ position: "absolute", right: 10, top: 20, textTransform: "none" }}>
              <Tooltip title="Add client" >
                <Button sx={{ textTransform: 'none' }} onClick={() => setOpenPopup(true)} variant="contained">
                  <PersonAddIcon sx={{ mr: 1 }} />
                  Add Client
                </Button>
              </Tooltip>
            </div>
          </Box>


        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>

        )}
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };


  return (
    isLoading ? <Circularprogress /> :
      <>
        <Container maxWidth="lg"
          sx={{
            display: 'table',
            tableLayout: 'fixed',
            minWidth: "100%",
            overflowX: 'auto'
          }} >
          <Paper sx={{
            overflowX: "scroll",
            margin: "auto",
          }} elevation={3}>
            <Search
              setSearchInput={setSearchInput}
              searchInput={searchInput}
            />
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer sx={{ overflowX: "scroll" }}>
              <Table
                sx={{ maxWidth: "100%", overflowX: 'scroll' }}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}

                  onRequestSort={handleRequestSort}
                  rowCount={selected.length}
                />
                <TableBody>
                  {
                    clients && clients.length  ?

                      stableSort(clients, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((client, index) => {
                          const labelId = `enhanced-table-checkbox-${index}`;
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={client.id}
                            >
                              <TableCell align="left">
                                <img style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%"
                                }} alt=""
                                  // src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" />
                                  src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max" />
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="auto"
                              >
                                {`${client.firstName} ${client.lastName}`}
                              </TableCell>
                              <TableCell align="left">{client.phoneNumber}</TableCell>
                              <TableCell align="left">{client.email}</TableCell>
                              <TableCell align="left">{client.address}</TableCell>
                              <TableCell align="left"> {client.lastPackage}</TableCell>
                              <TableCell align="left"> {client.group}</TableCell>
                              <TableCell align="right">
                                <Tooltip title="Choose action">
                                  <Button onClick={() => handleOpenModal(client.id)}>
                                    <EditIcon size="small" />
                                    <Typography sx={{
                                      fontSize: "14px",
                                      color: "#120956",
                                      textTransform: "none"
                                    }}  > Update</Typography>
                                  </Button>
                                </Tooltip>
                              </TableCell>
                              <TableCell align="left">
                                <Button onClick={() => {
                                  setConfirmDialog({
                                    isOpen: true,
                                    title: 'Are you sure to delete this record?',
                                    subTitle: "You can't undo this operation",
                                    onConfirm: () => {
                                      setConfirmDialog({
                                        ...confirmDialog,
                                        isOpen: false
                                      })
                                      dispatch(deleteClient(client.id))
                                      handleMoreActionsClose()
                                      setNotify({
                                        isOpen: true,
                                        message: 'Deleted Successfully',
                                        type: 'error'
                                      })
                                      setCurrentId(null)
                                    }
                                  })

                                }}>
                                  <DeleteIcon  size="small" sx={{
                                    color: "#d31818",
                                  }} />
                                  <Typography sx={{ textTransform: "none" }}  > Delete</Typography>
                                </Button>
                              </TableCell>
                            </TableRow>
                          );
                        }) :
                      <Paper elevation={6}>
                        <Circularprogress />
                      </Paper>
                  }
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={clients ? clients.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <FormControlLabel
              control={<Switch checked={dense} onChange={handleChangeDense} />}
              label="Dense padding"
            />
          </Paper>

        </Container>

        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} currentId={currentId} setCurrentId={setCurrentId} title="Clients Form">
          {isLoading ? <Circularprogress /> :
            <RegForm currentId={currentId} setCurrentId={setCurrentId} setOpenPopup={setOpenPopup} notify={notify}
              setNotify={setNotify} />
          }
        </Popup>

        <ConfirmDialog
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
        <Notification
          notify={notify}
          setNotify={setNotify}
        />
      </>
  );
}
