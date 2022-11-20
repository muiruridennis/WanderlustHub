import React, { useState, useEffect } from 'react';

import {Link} from "react-router-dom"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import MailIcon from '@mui/icons-material/EmailOutlined';
import Shield from '@mui/icons-material/LocalPoliceOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DoNotDisturb from '@mui/icons-material/DoNotDisturbOutlined';


export default function User ({ director }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleOpenActions = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMoreActionsClose = () => {
        setAnchorEl(null);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMoreActionsClose}
            sx={{
                position: "absolute",
                top: "30px",
                padding: 3
            }}
        >
            <MenuItem >
                <SettingsOverscanIcon fontSize ='small' sx={{ mr: 1.5 }} />
                <Typography variant='subtitle2'>Quick View</Typography>
            </MenuItem>
            <MenuItem>
                <RemoveRedEyeIcon fontSize ='small' sx={{ mr: 1.5 }} />
                <Typography variant='subtitle2'>View Details</Typography>
            </MenuItem>
            <MenuItem>
                <MailIcon  fontSize ='small' sx={{ mr: 1.5 }} />
                <Typography variant='subtitle2'>Send Mail</Typography>
            </MenuItem>
            <Divider/>
            <MenuItem>
                <Shield fontSize ='small' sx={{ mr: 1.5 }} />
                <Typography variant='subtitle2'>Reset Pass</Typography>
            </MenuItem>
            <MenuItem>
                <DoNotDisturb fontSize ='small' sx={{ mr: 1.5 }} />
                <Typography variant='subtitle2'>Suspend User</Typography>
            </MenuItem>
        </Menu>
    );
    return (
        <>
            <Card sx={{ maxWidth: 380, }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500], justifyContent: "center" }} aria-label="director">
                            {director.firstName.charAt(0)}
                        </Avatar>
                    }
                    title={`${director.firstName}  ${director.lastName}`}
                    subheader="Docket"
                    action={
                        <IconButton aria-label="settings" onClick={handleOpenActions} >
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary" align="center" sx={{ p: 2 }}>
                        Marketer and Strategist
                        I am an UI/UX Designer and Love to be creative.
                    </Typography>
                    <Box
                        sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                        <Box sx={{ m: 1 }}>
                            <Typography variant="h5" color="text.">215</Typography>
                            <Typography variant="body2" color="#8094ae">Clients</Typography>
                        </Box>
                        <Box sx={{ m: 1 }}>
                            <Typography variant="h5" color="text.">83%</Typography>
                            <Typography variant="body2" color="#8094ae">Performance</Typography>
                        </Box>
                        <Box sx={{ m: 1 }}>
                            <Typography variant="h5" color="text.">4</Typography>
                            <Typography variant="body2" color="#8094ae">Tasks</Typography>
                        </Box>
                    </Box>
                </CardContent>
                <CardActions disableSpacing sx={{ justifyContent: "center" }}>
                    <Link to={`/admin/users/${director.id}`} >
                    <Button variant="outlined"
                        sx={{
                            borderRadius: "15px",
                            pl: 2,
                            pr: 2,
                            textTransform: "none",
                            '&:hover': {
                                backgroundColor: '#e5e9f2',
                                color: '#000000',
                            },
                        }}
                    >View Profile</Button>
                    </Link>
                </CardActions>

            </Card>
            {renderMenu}
        </>
    );
}
