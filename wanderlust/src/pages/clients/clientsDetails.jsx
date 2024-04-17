import React, { useEffect } from 'react'
import { useParams, useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../../features/clientsSlice";
import CircularProgress from '../../Components/CircularProgress'
import { Box, Button, Paper, Typography, Divider, Container, Stack } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Layout from "../../Layouts/client/layout"
import List from '@mui/material/List';
import { useMediaQuery, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';


function ClientsDetails() {
  let { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { isLoading, client } = useSelector((state) => state.clients);

  const handleNavigate = () => {
    navigate(-1)
  };
  const ListText = styled("p")(({ theme }) => ({
    display: isSmallScreen ? "none" : "block",
    marginLeft: "5px"
  }));

  // useEffect(() => {
  //   dispatch(getClient(clientId));
  // }, [clientId, dispatch]); //it should rerender when the id changes

  // if (isLoading) {
  //   return <CircularProgress />
  // }
  // if (!client) return null; //
  const navLinks = [
    { pathname: `/overview/clientsDetails/${id}`, text: "Details" },
    { pathname: `/overview/clientsDetails/${id}/bookings`, text: "Bookings" },
    { pathname: `/overview/clientsDetails/${id}/activities`, text: "Activities" },
  ];


  return (
    <Box
      sx={{
        flexGrow: 1,
        py: 8
      }}>
      <Container maxWidth="xl" >

        <Paper elevation={3}>
          <Button
            size="small"
            variant="outlined"
            color="inherit"
            onClick={handleNavigate}
            sx={{
              margin: 4,
              textTransform: "none",
              // color: "black",
              display: isSmallScreen ? "none" : "flex"

            }}
          > <KeyboardBackspaceIcon fontSize="small" sx={{ mr: 1 }} />Back</Button>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 4,
            ml: 3,
            p: 1,
          }}>

            <div>
              < Stack direction="column" spacing={3}>
                <Typography variant="h4" align='center' > Client </Typography>
                <Typography variant="h6">{`Client's ID: ${id}`}  </Typography>
              </Stack>
              <Stack >
                <Typography sx={{ m: 2, }} variant="body1"> Client Since: 15 Feb, 2019 </Typography>
              </Stack>
            </div>
            <Divider />
          </Box>

          <List
            sx={{ width: 'auto', bgcolor: 'background.paper', display: 'flex', marginLeft: 3 }}
          >
            {navLinks.map((navLink) => (
              <NavLink
                exact
                to={navLink.pathname}
                key={navLink.pathname}
                style={{
                  color: location.pathname === navLink.pathname ? 'rgb(99, 102, 241)' : '#000000',
                  textDecoration: location.pathname === navLink.pathname ? "underline" : 'none',
                  textUnderlineOffset: location.pathname === navLink.pathname ? "0.7em" : "",
                  textDecorationThickness: location.pathname === navLink.pathname ? "3px" : "",
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '1rem 0',
                  marginRight: '2rem',
                }}
              >
                <ListText>{navLink.text}</ListText>
              </NavLink>
            ))}
          </List>
          <Divider />
          <Layout client={client} />
        </Paper>
      </Container >
    </Box>
  )
}

export default ClientsDetails