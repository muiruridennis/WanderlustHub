import React, { useEffect } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../../Actions/clients";
import CircularProgress from '../../Components/CircularProgress'
import { Box, Button, Paper, Typography, Divider } from '@mui/material';
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
  let { clientId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { isLoading, client } = useSelector((state) => state.clients);
  const navLinkStyles = ({ isActive }) => (

    isActive
      ? {
        color: '#3E6D9C',
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


  const handleNavigate = () => {
    navigate(-1)
  };
  const ListText = styled("p")(({ theme }) => ({
    display: isSmallScreen ? "none" : "block",
    marginLeft: "5px"
  }));

  useEffect(() => {
    dispatch(getClient(clientId));
  }, [clientId, dispatch]); //it should rerender when the id changes

  if (isLoading) {
    return <CircularProgress />
  }
  if (!client) return null; //

  return (
    <div style={{ backgroundColor: "#EEEEEE", margin: "auto", }}>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4,
        ml: 3,
        p: 1,
      }}>
        <div>
          <Box sx={{ display: 'flex' }}>
            <Typography variant="h6" > User / </Typography>
            <Typography variant="h6" color="primary">{` ${client.firstName} ${client.lastName}`}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", mt: 1 }}>
            <Typography variant="caption"> User ID: UD003054</Typography>
            <Typography sx={{ ml: 2, mr: 2 }} variant="caption"> Last Login: 15 Feb, 2019 01:02 PM</Typography>
            <Typography variant="caption">Account Status: <span>Active</span> </Typography>
          </Box>
        </div>
        <Button
          size="small"
          variant="outlined"
          onClick={handleNavigate}
          sx={{
            m: 2,
            textTransform: "none",
            // pr: 2, pl: 2, 
            color: "black",
            display: isSmallScreen ? "none" : "flex"

          }}
        > <KeyboardBackspaceIcon fontSize="small" sx={{ mr: 1 }} />Back</Button>
      </Box>
      <Paper elevation={3}
        sx={{
          p: isSmallScreen ? "auto" : 2,
          ml: isSmallScreen ? "auto" : 1,
          mr: isSmallScreen ? "auto" : 1,
          mb: isSmallScreen ? "auto" : 2,

        }
        }>
        <List
          sx={{ width: 'auto', bgcolor: 'background.paper', display: 'flex', }}
        >
          <NavLink
            to={`/admin/users/${clientId}/personal`}

            style={
              navLinkStyles
            }
          >
            <PersonOutlineIcon sx={{ alignItems: "center" }} />
            <ListText>Personal</ListText>
          </NavLink>
          <NavLink
            to={`/admin/users/${clientId}/transactions`}
            style={navLinkStyles}

          >
            <SyncAltIcon />
            <ListText>Tranactions</ListText>
          </NavLink>
          <NavLink
            to={`/admin/users/${clientId}/referrals`}
            style={navLinkStyles}
          >
            <GroupIcon />
            <ListText>Referrals</ListText>
          </NavLink>
          <NavLink
            to={`/admin/users/${clientId}/activities`}

            style={navLinkStyles}
          >
            <InsightsIcon />
            <ListText>Activities</ListText>
          </NavLink>
        </List>
        <Divider />
        <MiniLayout client={client} />
      </Paper>
    </div >
  )
}

export default UserDetails