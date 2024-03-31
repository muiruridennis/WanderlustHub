import React from 'react';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  IconButton
} from '@mui/material';
import { Scrollbar } from '../../../Components/scrollbar.jsx';
import { getInitials } from '../../../Utils/get-initials.js';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const VendorsTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => { },
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
    setOpenPopup,
    setcurrentVendorId,
    confirmDialog,
    setConfirmDialog
  } = props;

  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;

  const handleOpenModal = vendorId => {
    setcurrentVendorId(vendorId)
    setOpenPopup(true);
  };
  const handleDelete = () => {
    setConfirmDialog({
      isOpen: true,
      title: 'Are you sure to delete this Vendor?',
      subTitle: "You can't undo this operation",
      action: "Delete",

      onConfirm: () => {
        setConfirmDialog({
          ...confirmDialog,
          isOpen: false
        })
        alert(`deleting....`)

      }
    })
  };


  return (
    <Card>
      <Scrollbar>
        <Box
          sx={{ minWidth: 800 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Address
                </TableCell>
                <TableCell>
                  Service Type
                </TableCell>

                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map(({ id, name, email, address, serviceType }) => {
                const isSelected = selected.includes(id);
                return (
                  <TableRow
                    hover
                    key={id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(id);
                          } else {
                            onDeselectOne?.(id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        <Avatar
                          // src={avatar}
                          src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max"

                        >
                          {getInitials(name)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {email}
                    </TableCell>
                    <TableCell>
                      {address.city}, {address.state}, {address.street}
                    </TableCell>
                    <TableCell>
                      {serviceType}
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={0}>
                        <IconButton
                          onClick={() => handleOpenModal(id)}
                        >
                          <EditIcon color='primary' />
                        </IconButton>
                        <IconButton
                          onClick={handleDelete}
                        >
                          <DeleteIcon color='error' />
                        </IconButton>
                        <IconButton component={Link} to={`/overview/finances/vendor/${id}`} >
                          <ArrowForwardIcon color='warning' />
                        </IconButton>

                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
        <TablePagination
          component="div"
          count={count}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10, 15, 20]}
        />
      </Scrollbar>
    </Card>
  );
};
export default VendorsTable;