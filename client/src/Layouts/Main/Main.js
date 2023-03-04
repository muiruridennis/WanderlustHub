import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { mainRoutes } from "../../Constants/AppContentRoutes";
import { useDrawerContext } from "../../contexts/drawer-context";
import { useMediaQuery, useTheme } from "@mui/material";


function Main() {
  const { isOpen } = useDrawerContext();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const drawerWidth = 190;

  return (
    <div component="main" style={{ marginTop: 0 }}>
      <Routes>
        {mainRoutes.map((route, idx) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            )
          )
        })}
        <Route path="/" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </div>
  )
}

export default Main