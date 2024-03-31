import { useMediaQuery, useTheme } from "@mui/material";

const useResponsive = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));


  return {
    isSmallScreen,
    isLargeScreen
  };
};

export default useResponsive;

