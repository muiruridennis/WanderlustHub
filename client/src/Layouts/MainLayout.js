import React, { useState } from 'react'
import Drawer from "./Drawer/Drawer";
import Header from "./Header/Header";
import Toolbar from "@mui/material/Toolbar";
import Footer from "./Footer/Footer";
import Main from './Main/Main';
import Notification from "../Components/Notification"
import { DrawerContextProvider } from "../contexts/drawer-context";
import { Box } from '@mui/material';

function Layout() {
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });

  return (
    <DrawerContextProvider>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          minWidth: "100%"
        }}
      >
        <Header />
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            flex: 1,
          }}
        >
          <Drawer notify={notify}  setNotify={setNotify} />
          <Main style={{ flex: 1 }} />
        </Box>
        <Footer />
      </Box>
      <Notification
        notify={notify}
        setNotify={setNotify}
      />
    </DrawerContextProvider >
  );
};

export default Layout