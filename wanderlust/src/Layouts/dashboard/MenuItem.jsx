import React, { useState } from "react"
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signOut } from "../../store/slices/authSlice";
import useResponsive from "../../Utils/hooks/useResponsive";

const MenuItem = ({ route, literal, isDropdown, ...props }) => {
  const { Icon, selected, handleDropdownClick, hasSubItems } = props;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSmallScreen, isLargeScreen } = useResponsive();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleLogout = async () => {
    dispatch(signOut());
    await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
    navigate('/auth');
  };

  const listItemButton = (
    <ListItemButton
      height={400}
      button="true"
      selected={selected}
      sx={{
        position: "relative",
        "&.Mui-selected": {
          backgroundColor: "#F3F8FF",
          borderLeft: "12px solid #408E91",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        "&:hover": {
          backgroundColor: "primary.light",
          color: "common.white",
        },
      }}
      onClick={() => {
        if (handleDropdownClick) {
          handleToggle();
          handleDropdownClick();
        } else if (literal === 'Logout') {
          handleLogout();
        } else if (route) {
          navigate(route);
        }
      }}
    >
      {Icon && (
        <ListItemIcon
          sx={[
            { minWidth: "auto" },
            (theme) => ({
              paddingRight: theme.spacing(2),
            }),
          ]}
        >
          <Icon
            fontSize={isSmallScreen ? "small" : "medium"}
            sx={{
              color: selected ? "#FC6736" : "#0C2D57",
              ...(literal === 'Logout' && { color: 'red' }),
            }}
          />
        </ListItemIcon>
      )}
      <ListItemText
        primary={literal}
        sx={{
          color: selected ? "#FC6736" : "#000000",
          "& .MuiTypography-root": {
            fontSize: isLargeScreen ? "1rem" : "0.8rem",
            fontWeight: isDropdown ? 400 : 500
          },
          ...(literal === 'Logout' && { color: 'red' }),
        }}
      />
      {hasSubItems && (
        <>
          {open ? (
            <ExpandLessIcon
              color="error"
              fontSize="large"
              sx={{
                position: "absolute",
                right: 1,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          ) : (
            <ArrowForwardIosIcon
              color="info"
              fontSize="medium"
              sx={{
                position: "absolute",
                right: 1,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          )}
        </>
      )}
    </ListItemButton>
  );
  // If the icon represents a logout action, render it without a link.
  // Otherwise, wrap it inside a link element to navigate to the specified route when clicked.
  return literal === 'Logout' ? listItemButton : <Link to={route}>{listItemButton}</Link>;
};

export default MenuItem;