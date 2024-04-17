import React, { useEffect } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../../features/clientsSlice";
import CircularProgress from '../../Components/CircularProgress'
import { Box, Button, Paper, Typography, Divider, Container } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MiniLayout from "../MiniPages/MiniLayout"
import List from '@mui/material/List';
import { useMediaQuery, useTheme } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import GroupIcon from '@mui/icons-material/Group';
import InsightsIcon from '@mui/icons-material/Insights';
import { styled } from '@mui/material/styles';


function UserDetails() {
  let { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLoading = false
  // const { 
  //   // isLoading,
  //   user } = useSelector((state) => state.user);
  const user = {
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
  }
  const navLinkStyles = ({ isActive }) => (

    isActive
      ? {
        color: '#6366f1',
        textDecoration: "underline",
        textUnderlineOffset: "1em",
        textDecorationThickness: "3px",
        display: "inline-flex",
        alignItems: "center",
        padding: "1rem 0",
        fontWeight: 600,
        marginRight: "2rem"

      }
      : {
        color: '#000000',
        display: "inline-flex",
        alignItems: "center",
        padding: "1rem 0",
        marginRight: "2rem"
      }
  );
  const navLists = [
    {
      name: "General",
      to: `/overview/users/${userId}/personal`,
    },
    {
      name: "Transactions",
      to: `/overview/users/${userId}/transactions`,
    },
    {
      name: "Refferals",
      to: `/overview/users/${userId}/reffrals`,
    },
    {
      name: "Activities",
      to: `/overview/users/${userId}/activities`,
    },

  ]


  const handleNavigate = () => {
    navigate(-1)
  };
  const ListText = styled("p")(({ theme }) => ({
    display: isSmallScreen ? "none" : "block",
    marginLeft: "5px"
  }));

  // useEffect(() => {
  //   dispatch(getClient(userId));
  // }, [userId, dispatch]); //it should rerender when the id changes

  // if (isLoading) {
  //   return <CircularProgress />
  // }
  // if (!user) return null; //

  return (
    <Container maxWidth="xl"
      sx={{
        flexGrow: 1,
        py: 8
      }}>
      <div>
        <Typography variant="h4" align='left' sx={{ marginBottom: 7 }}>
          Account
        </Typography>
        <List
          sx={{ width: 'auto', bgcolor: 'background.paper', display: 'flex', }}
        >
          {navLists.map(({ name, to }) => (
            <NavLink
              key={name}
              to={to}
              style={navLinkStyles}
            >
              {name}
            </NavLink>
          ))}
        </List>
      </div>
      <MiniLayout user={user} />
    </Container>
  )
}

export default UserDetails