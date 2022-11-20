import { useDrawerContext } from "../../contexts/drawer-context";
import { useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiDrawer from '@mui/material/Drawer';
import { MenuItemsList, AppEssentials, Apps, Reports, Accounts } from "./MenuList"

const CustomDrawer = (props) => {
  const {notify, setNotify} = props
  const { isOpen, setIsOpen } = useDrawerContext();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const drawerWidth = 190;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    top: 0,
    left: 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    overflowY: 'auto',
    background: "#6FEDD6",
    position: isLargeScreen && isOpen ? "static" : "",

  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    overflowY: 'auto',
    width: theme.spacing(7.3),
    background: "#6FEDD6",
    position: "static",

  });
  const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'isOpen' })(
    ({ theme, isOpen }) => ({
      width: drawerWidth,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(isOpen && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!isOpen && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  return (
    <>
      <StyledDrawer
        variant={isLargeScreen ? "permanent" : "temporary"}
        open={!isLargeScreen && isOpen ? true : false}
        onClose={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        <MenuItemsList />
        <Reports />
        <Accounts />
        <Apps />
        <AppEssentials notify={notify} setNotify={setNotify} />
      </StyledDrawer>
    </>
  );
};

export default CustomDrawer;