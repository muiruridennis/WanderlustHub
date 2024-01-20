import { useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../../contexts/drawer-context";
import { styled } from "@mui/material/styles";
import { MenuItemsList, AppEssentials } from "./MenuList";
import Drawer from "@mui/material/Drawer";

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})(({ isOpen, theme }) => ({
  width: isOpen ? 240 : theme.spacing(7),
  position: "static",
  top: 0, 
  transition: isOpen
    ? theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    : theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
  "& .MuiDrawer-paper": {
    background: "#D8DCD6",
    position: "static",
    overflowX: "hidden",
  },
  [theme.breakpoints.down("sm")]: {
    position: "fixed",
    top: 0,
  },
}));

const CustomDrawer = () => {
  const { isOpen, setIsOpen } = useDrawerContext();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));


  return (
    <StyledDrawer
      variant={isLargeScreen ? "permanent" : "temporary"}
      open={!isLargeScreen && isOpen ? true : false}
      onClose={() => setIsOpen(!isOpen)}
      isOpen={isOpen}
    >
      <MenuItemsList />
      <AppEssentials  />
    </StyledDrawer>
    
  );
};

export default CustomDrawer;
