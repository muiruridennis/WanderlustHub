import React from 'react';
import List from "@mui/material/List";
import MenuItem from "./MenuItem";
import Collapse from "@mui/material/Collapse";
import { useLocation } from "react-router-dom";
import listItems from "../../Constants/menu";

export const MenuItemsList = () => {
  const { pathname } = useLocation();
  const [openDropdown, setOpenDropdown] = React.useState(null);

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <List sx={{ p: 0 }}>
      {listItems.map(({ literal, route, Icon, subItems }, index) => (
        <React.Fragment key={route}>
          {subItems ? (
            <>
              <MenuItem
                key={route} // Unique key for direct MenuItem
                Icon={Icon}
                literal={literal}
                selected={pathname === route}
                hasSubItems={true}
                handleDropdownClick={() => handleDropdownClick(index)}
              />
              <Collapse in={openDropdown === index} timeout="auto" unmountOnExit>
                <List disablePadding sx={{ bgcolor: 'background.paper', paddingLeft: 5 }}>
                  {subItems.map((subItem, subIndex) => ( // Use subIndex for nested MenuItem
                    <MenuItem
                      key={`${subItem.route}-${subIndex}`} // Unique key for nested MenuItem
                      literal={subItem.literal}
                      route={subItem.route}
                      selected={pathname === route}
                      isDropdown={true}
                    />
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <MenuItem
              key={route} // Unique key for direct MenuItem
              Icon={Icon}
              literal={literal}
              route={route}
              selected={pathname === route}
              hasSubItems={false}
            />
          )}
        </React.Fragment>
      ))}
    </List>
  );
};
