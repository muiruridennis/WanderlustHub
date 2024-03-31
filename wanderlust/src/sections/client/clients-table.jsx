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
import { Scrollbar } from '../../Components/scrollbar.jsx';
import { getInitials } from '../../Utils/get-initials.js';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';


export const ClientsTable = (props) => {
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
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                {/* <TableCell>
                  Signed Up
                </TableCell> */}
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map(({ id, createdAt, avatar, name, email, address, phone }) => {
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
                      {address.city}, {address.state}, {address.country}
                    </TableCell>
                    <TableCell>
                      {phone}
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={3}>
                        <IconButton onClick={() => handleOpenModal(id)}>
                          <EditIcon color='primary' />
                        </IconButton>
                        <IconButton component={Link} to={`/overview/clientsDetails/${id}`}>
                          <ArrowForwardIcon />
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