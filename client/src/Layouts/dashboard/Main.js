import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { mainRoutes } from "../../Constants/AppContentRoutes";
import { useDrawerContext } from '../../contexts/drawer-context';
import { useMediaQuery, useTheme } from "@mui/material";


function Main() {
  return (
    <main component="main" style={{
      flex: 1,
      //  padding: '16px', // Adjust the value as per your requirement
    }}>
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
        <Route path="/" element={<Navigate to="overview" replace />} />
      </Routes>
    </main>
  )
}

export default Main