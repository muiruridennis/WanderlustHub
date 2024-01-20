import { Divider, ListItemButton } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const MenuItem = ({
  route,
  literal,
  Icon,
  selected,
  onClick,
}) => {
  const link = (
    <ListItemButton
      button="true"
      selected={selected}
      sx={{
        // fontWeight: "bold",
        "&.Mui-selected": {
          backgroundColor: "#408E91",
          color: "common.white",
        },
        "&:hover": {
          backgroundColor: "primary.light",
          color: "common.white",
        },
      }}
      onClick={onClick}
    >
      <ListItemIcon
        sx={[
          { minWidth: "auto" },
          (theme) => ({
            paddingRight: theme.spacing(2),
          }),
        ]}
      >
        <Icon sx={{ color: "secondary.dark" }} />
      </ListItemIcon>
      <ListItemText primary={literal} sx={{ color : "#000000", fontWeight: 700}} />
    </ListItemButton>
  );
  return route ? <Link to={route}>{link}</Link> : link;
};

export default MenuItem;