import { Divider } from "@mui/material";
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
    <ListItem
      button
      selected={selected}
      sx={{
        maxHeight: "32px",
        fontSize: "16px",
        fontWeight: 400,
        "&.Mui-selected": {
          backgroundColor: "primary.dark",
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
        <Icon sx={{ color:  "#293462"}} />
      </ListItemIcon>
      <ListItemText primary={literal} sx={{ color : "#000000"}} />
    </ListItem>
  );
  return route ? <Link to={route}>{link}</Link> : link;
};

export default MenuItem;