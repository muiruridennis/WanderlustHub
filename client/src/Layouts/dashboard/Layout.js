import React, { useState } from 'react'
import Drawer from "./Drawer";
import Header from "./Header";
import Toolbar from "@mui/material/Toolbar";
import Footer from "./Footer";
import Main from './Main';
import { DrawerContextProvider } from "../../contexts/drawer-context";
import { Box } from '@mui/material';

function Layout({ children }) {

  return (
    <DrawerContextProvider>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            // flex: 1,
          }}
        >
          <Drawer />
          <Main />

        </Box>
        {/* <Footer /> */}
      </Box>
    </DrawerContextProvider>
  );
};

export default Layout