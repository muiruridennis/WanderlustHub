import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import { Button, Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import DRAWER_LIST from "../../Constants/menu";
import MenuItem from "./MenuItem";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDrawerContext } from "../../contexts/drawer-context";
import { logOut } from "../../Actions/auth"
import { useNavigate } from "react-router-dom";

export const MenuItemsList = () => {
  const { pathname } = useLocation();

  return (
    <Grid>
      <List sx={{ p: 0 }}>
        {DRAWER_LIST.map(({ literal, route, Icon }) => (
          <MenuItem
            Icon={Icon}
            literal={literal}
            route={route}
            key={route}
            selected={pathname === route}
          />
        ))}
      </List>
      <Divider light sx={{ bgcolor: "#FA2FB5" }} />
    </Grid>
  );
};
export const AppEssentials = (props) => {
  const { notify, setNotify } = props
  const { authData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen } = useDrawerContext();
  const handleLogut = () => {
    dispatch(logOut);
    setNotify({
      isOpen: true,
      message: 'logged out Successfully',
      type: 'success'
    })
    navigate('/')
  }

  return (
    <>
      {/* <Typography variant="caption" sx={{fontSize:"1rem"}} > Essentials</Typography> */}
      <Grid>
        <Box sx={{ width: '100%' }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsApplicationsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" sx={{ ml: -2 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DarkModeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dark Mode" sx={{ ml: -2 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* <Button
                      size="small"
                      onClick={handleLogut}
                      variant="text"
                      color="error"
                      sx={{ borderRadius: "15px", textTransform: "none" }} > */}
                    <LogoutIcon fontSize="medium" color="warning" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ ml: -2 }} />
                  {/* </Button> */}
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
        <Divider light sx={{ bgcolor: "#FA2FB5" }} />
      </Grid>
    </>
  );
};

