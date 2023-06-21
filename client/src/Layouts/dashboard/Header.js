import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from '@mui/material/styles';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from '@mui/material/MenuItem';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Typography from "@mui/material/Typography";
import { useDrawerContext } from '../../contexts/drawer-context';
import { useMediaQuery, useTheme } from "@mui/material";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import RepeatOneIcon from '@mui/icons-material/RepeatOne'; //to edit
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

import Avatar from '@mui/material/Avatar';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedUser } from "../../Actions/auth";
import DisplayPhoto from "../../Images/display-photo.jpg"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "25px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // left: "50%"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const Header = () => {
  const theme = useTheme();
  const { isOpen, setIsOpen } = useDrawerContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // useEffect(() => {
  //   dispatch(fetchLoggedUser());
  // }, [dispatch]);
  // console.log("authData", authData)
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        // marginTop: "30px"
        position: "absolute",
        top: "57px",
      }}
    >
      <MenuItem onClick={handleMenuClose}><PersonIcon sx={{ mr: 1, color: "primary.dark" }} />Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}><EditIcon sx={{ mr: 1, color: "primary.dark" }} /> Edit Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}> <RepeatOneIcon sx={{ mr: 1, color: "primary.dark" }} />Switch User</MenuItem>
      <MenuItem onClick={handleMenuClose}><LogoutIcon sx={{ mr: 1, color: "primary.dark" }} /> Logout</MenuItem>
    </Menu>
  );
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <AppBar
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: "#332FD0",
          // backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),

          color: "secondary.contrastText",
          // position: "fixed",
          top: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1, // Increase the zIndex value
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setIsOpen(!isOpen)}
            sx={{ padding: theme.spacing(1) }}
          >
            {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" sx={{ ml: 3, mr: 2, color: "yellow", display: isSmallScreen ? "none" : "block" }}>
            Take-us Safaris
          </Typography>

          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1, }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, }}>
            <Tooltip title="Mails">
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Account">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {/* {authData === null || undefined ?
                <AccountCircle sx={{
                  width: "36px",
                  height: "36px",
                  mr: "35px",
                  ml: "25px",
                  borderRadius: "50%"
                }} /> :
                <Avatar alt={authData?.avatarId} src={authData?.firstName}
                  sx={{
                    bgcolor: "purple",
                    width: 40,
                    height: 40,
                    mr: "35px",
                    ml: "25px",
                  }}>
                  {authData?.firstName.charAt(0)}
                </Avatar>
              } */}
                <Avatar
                  src={DisplayPhoto}
                  variant="rounded"
                />              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

export default Header;