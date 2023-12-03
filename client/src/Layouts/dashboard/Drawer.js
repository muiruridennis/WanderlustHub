import { useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../../contexts/drawer-context";
import { styled } from "@mui/material/styles";
import { MenuItemsList, AppEssentials } from "./MenuList";
import MuiDrawer from "@mui/material/Drawer";

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})(({ isOpen, theme }) => ({
  width: isOpen ? 140 : theme.spacing(7),
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  "& .MuiDrawer-paper": {
    background: "#D8DCD6",
    overflowX: "hidden",
    marginTop: theme.spacing(7),
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
