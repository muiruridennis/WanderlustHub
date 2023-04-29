import {
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDrawerContext } from "../../contexts/drawer-context";
import { styled } from "@mui/material/styles";
import { MenuItemsList, AppEssentials } from "./MenuList"
import MuiDrawer from '@mui/material/Drawer';

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})(({ isOpen, theme }) => ({
  width: isOpen ? 240 : theme.spacing(7),
  position: "static",
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
}));

const CustomDrawer = (props) => {
  const { notify, setNotify } = props
  const { isOpen, toggleIsOpen } = useDrawerContext();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));


  return (
    <StyledDrawer
      variant={isLargeScreen ? "permanent" : "temporary"}
      open={!isLargeScreen && isOpen ? true : false}
      onClose={() => toggleIsOpen(!isOpen)}
      isOpen={isOpen}
    >
      <MenuItemsList />
      <AppEssentials notify={notify} setNotify={setNotify} />
    </StyledDrawer>
  )
};

export default CustomDrawer;