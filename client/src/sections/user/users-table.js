import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
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
  IconButton,
  Tooltip,
  Divider
} from '@mui/material';
import { Scrollbar } from '../../Components/scrollbar.js';
import { getInitials } from '../../Utils/get-initials.js';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CancelIcon from '@mui/icons-material/Cancel';
import { useParams, useNavigate, Link } from 'react-router-dom';


export const UsersTable = (props) => {
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
    setCurrentId,
  } = props;

  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;
  const navigate = useNavigate();

  const handleOpenModal = clientId => {
    setCurrentId(clientId)
    setOpenPopup(true);
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
                {/* <Divider type="vertical" /> */}
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Address
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Created At
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Verified
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.length === 0 ? (
                // <TableCell align='center' sx={{ color: 'red', whiteSpace: 'nowrap' }}>No matching users found.</TableCell>
                <TableCell sx={{ textAlign: 'center', color: 'red', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                  No matching users found.
                </TableCell>


              ) : (
                items.map(({ id, registrationDate, verified, name, email, address, phoneNumber, status }) => {
                  const isSelected = selected.includes(id);
                  // const createdAt = format(createdAt, 'dd/MM/yyyy');

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
                        {address}
                      </TableCell>
                      <TableCell>
                        {phoneNumber}
                      </TableCell>
                      <TableCell>
                        {registrationDate}
                      </TableCell>
                      <TableCell>
                        {status}
                      </TableCell>
                      <TableCell>
                        {verified ? <VerifiedUserIcon color='success' /> : <CancelIcon color='error' />}
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={3}>
                          <Tooltip title="Edit User Details">

                            <IconButton onClick={() => handleOpenModal(id)}>
                              <EditIcon color='primary' />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="View User Details">

                            <IconButton component={Link} to={`/overview/users/${id}`}>
                              <ArrowForwardIcon />
                            </IconButton>
                          </Tooltip>

                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                }))}
            </TableBody>
          </Table>
        </Box>
        {/* </Scrollbar> */}
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