import { Container,  Typography, List } from '@mui/material';
import Children from '../../Layouts/account/layout';
import { NavLink } from 'react-router-dom';


function Index() {
    const navLinkStyles = ({ isActive }) => (

        isActive
            ? {
                color: '#6366f1',
                textDecoration: "underline",
                textUnderlineOffset: "1em",
                textDecorationThickness: "3px",
                display: "inline-flex",
                alignItems: "center",
                padding: "1rem 0",
                fontWeight: 600,
                marginRight: "2rem"

            }
            : {
                color: '#000000',
                display: "inline-flex",
                alignItems: "center",
                padding: "1rem 0",
                marginRight: "2rem"
            }
    );

    const navLists = [
        {
            name: "General",
            to: "/overview/account/general",
        },
        {
            name: "Billing",
            to: "/overview/account/billings",
        },
        {
            name: "Notifications",
            to: "/overview/account/notifications",
        },
        {
            name: "Security",
            to: "/overview/account/security",
        },
    ]
    return (
        <Container maxWidth="xl"
            sx={{
                flexGrow: 1,
                py: 8
            }}>
            <div>
                <Typography variant="h4" align='left' sx={{ marginBottom: 7 }}>
                    Account
                </Typography>
                <List
                    sx={{ width: 'auto', bgcolor: 'background.paper', display: 'flex', }}
                >
                    {navLists.map(({name, to}) => (
                        <NavLink
                            key={name}
                            to={to}
                            style={navLinkStyles}
                        >
                            {name}
                        </NavLink>
                    ))}
                </List>
            </div>
            <Children />
        </Container>
    )
}

export default Index
