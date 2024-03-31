import React, { useMemo, useCallback, useState } from 'react';
// import { subDays, subHours } from 'date-fns';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt'; import PlusIcon from '@mui/icons-material/Add';
import {
  Box, Button, Container, Stack, SvgIcon, Typography, MenuItem,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';
import { useSelection } from '../../Customs/use-selection';
import { applyPagination } from '../../Utils/apply-pagination';
import { Search } from '../../Components/all-search';
import Circularprogress from "../../Components/CircularProgress";
import { UsersTable } from '../../sections/user/users-table';
import BackupIcon from '@mui/icons-material/Backup';
import Popup from "../../Components/Popup";
import UserForm from "./userForm"



const usersData = [
  {
    id: 1,
    username: 'john_doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    registrationDate: '2023-07-01',
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '123-456-7890',
    address: '123 Main St, New York, USA',
    status: 'Active',
    avatar: 'path/to/avatar1.jpg',
    verified: true,
  },
  {
    id: 2,
    username: 'jane_dafe',
    email: 'jane@example.com',
    role: 'Admin',
    registrationDate: '2022-07-01',
    firstName: 'Jane',
    lastName: 'Dafe',
    phoneNumber: '1653-456-7566',
    address: '456 Park Ave, London, UK',
    status: 'Pending',
    avatar: 'path/to/avatar2.jpg',
    verified: false,
  },
  {
    id: 3,
    username: 'mike_smith',
    email: 'mike.smith@example.com',
    role: 'User',
    registrationDate: '2023-01-15',
    firstName: 'Mike',
    lastName: 'Smith',
    phoneNumber: '987-654-3210',
    address: '789 Oak St, Sydney, Australia',
    status: 'Inactive',
    avatar: 'path/to/avatar3.jpg',
    verified: true,
  },
  {
    id: 4,
    username: 'emily_jones',
    email: 'emily.jones@example.com',
    role: 'User',
    registrationDate: '2022-11-20',
    firstName: 'Emily',
    lastName: 'Jones',
    phoneNumber: '741-852-9630',
    address: '101 Maple Rd, Toronto, Canada',
    status: 'Suspended',
    avatar: 'path/to/avatar4.jpg',
    verified: false,
  },
  {
    id: 5,
    username: 'alex_wang',
    email: 'alex.wang@example.com',
    role: 'User',
    registrationDate: '2023-03-10',
    firstName: 'Alex',
    lastName: 'Wang',
    phoneNumber: '369-258-1470',
    address: '456 Elm St, Tokyo, Japan',
    status: 'Active',
    avatar: 'path/to/avatar5.jpg',
    verified: true,
  },
  {
    id: 6,
    username: 'susan_brown',
    email: 'susan.brown@example.com',
    role: 'User',
    registrationDate: '2023-05-05',
    firstName: 'Susan',
    lastName: 'Brown',
    phoneNumber: '587-963-8520',
    address: '789 Pine Ave, Paris, France',
    status: 'Active',
    avatar: 'path/to/avatar6.jpg',
    verified: true
  },
];

const useUsers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(usersData, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};
const useUsersIds = (users) => {
  return useMemo(
    () => {
      return users.map((user) => user.id);
    },
    [users]
  );
};
const Users = () => {
  const isLoading = false;

  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const users = useUsers(page, rowsPerPage);


  const usersIds = useUsersIds(users);
  const filterUsersBySearchTerm = (users, searchTerm) => {
    const lowerCasedSearchTerm = searchTerm.toLowerCase();
    return users.filter((user) => {
      return (
        user.username.toLowerCase().includes(lowerCasedSearchTerm) ||
        user.email.toLowerCase().includes(lowerCasedSearchTerm) ||
        user.firstName.toLowerCase().includes(lowerCasedSearchTerm) ||
        user.lastName.toLowerCase().includes(lowerCasedSearchTerm) ||
        user.phoneNumber.toLowerCase().includes(lowerCasedSearchTerm) ||
        user.address.toLowerCase().includes(lowerCasedSearchTerm)
        // Add more fields to search as needed
      );
    });
  };

  // Filter users based on the search term
  // Filter users based on the search term
  const filteredUsers = useMemo(() => {
    if (!searchTerm) {
      return users;
    }

    const filteredUsersArray = filterUsersBySearchTerm(users, searchTerm);
    return filteredUsersArray.length > 0 ? filteredUsersArray : [];
  }, [users, searchTerm]);


  // Handle change in search term
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0); // Reset the page to 0 when the search term changes
  };

  const usersSelection = useSelection(usersIds);


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
    setCurrentId(null);
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Users
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <SystemUpdateAltIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <BackupIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
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
              </div>
            </Stack>
            <Stack
              // sx={{justifyContent:'space-around'}}
              alignItems="center"
              direction="row"
              spacing={3}>
              <Search
                searchTerm={searchTerm}
                handleSearchInputChange={handleSearchInputChange}
              />
              <Box sx={{ display: "flex", }}>
                <FormControl fullWidth sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel>Role</InputLabel>
                  <Select
                    value={roleFilter}
                    onChange={(event) => setRoleFilter(event.target.value)}
                    label="Role"

                  >
                    <MenuItem value="">All Roles</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="User">User</MenuItem>
                    {/* Add more role options as needed */}
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value)}
                    label="Status"

                  >
                    <MenuItem value="">All Status</MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                    <MenuItem value="Suspended">Suspended</MenuItem>
                    {/* Add more status options as needed */}
                  </Select>
                </FormControl>
              </Box>
            </Stack>
            <UsersTable
              count={usersData.length}
              items={filteredUsers}
              onDeselectAll={usersSelection.handleDeselectAll}
              onDeselectOne={usersSelection.handleDeselectOne}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={usersSelection.handleSelectAll}
              onSelectOne={usersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={usersSelection.selected}
              setOpenPopup={setOpenPopup}
              setCurrentId={setCurrentId}
              currentId={currentId}
            />
          </Stack>
        </Container>
        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} currentId={currentId} setCurrentId={setCurrentId} close={close} title="Users">
          {isLoading ? <Circularprogress /> :
            <UserForm currentId={currentId} setCurrentId={setCurrentId} setOpenPopup={setOpenPopup} close={close}
              users={users} />
          }
        </Popup>
      </Box>
    </>
  );
};

export default Users;

// Great! User Management is an essential part of any web application that allows administrators to manage user accounts, profiles, and permissions. Here's a step-by-step guide on how you can implement the User Management section in your admin dashboard:

// Create User List Page:

// Design a page that displays a list of registered users with relevant information like username, email, role, registration date, etc.
// Fetch the user data from your backend API or database and display it in a table format.
// Add functionalities to filter, search, and sort the user list for easy navigation.
// Create User Profile Page:

// Design a user profile page that displays detailed information about a selected user.
// Include the ability to view and edit the user's profile information such as name, email, avatar, etc.
// Add a form to allow administrators to update user information and save changes.
// Implement User Permissions:

// Determine the roles and permissions that will be available for users (e.g., admin, moderator, regular user, etc.).
// Create an interface to manage user roles and permissions.
// Allow administrators to assign or revoke permissions based on the selected user's role.
// Handle User Deletion:

// Implement a functionality to delete a user account when necessary.
// Include a confirmation dialog to ensure admins do not accidentally delete user accounts.
// User Activity Log:

// Consider implementing a user activity log that tracks user actions and activities within the system for auditing purposes.
// Security Measures:

// Ensure that sensitive user data (e.g., passwords) are securely stored and not accessible in plain text.
// Implement authentication mechanisms to protect user management functions from unauthorized access.
// Error Handling and Validation:

// Add proper error handling and validation to prevent unexpected behavior and ensure data integrity.
// User Feedback:

// Consider adding a feedback mechanism for users to report issues or make requests related to their accounts.
// User Account Verification and Password Reset:

// Implement verification processes for user registration to validate email addresses.
// Provide a password reset mechanism for users who forget their passwords.
// Remember to follow best practices for UX/UI design, and make the user management section as intuitive and user-friendly as possible. It's essential to test the functionality thoroughly and address any issues or bugs that may arise during testing.