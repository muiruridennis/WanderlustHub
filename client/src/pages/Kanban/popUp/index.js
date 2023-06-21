import { Container,  List, Typography, Divider } from '@mui/material';
import Children from '../../.././Layouts/kanban/layout';
import {  NavLink } from 'react-router-dom';

function Index({task}) {

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
            name: "Overview",
            to: "/overview/kanban/overview",
        },
        {
            name: "Checklists",
            to: "/overview/kanban/checklists",
        },
        {
            name: "Comments",
            to: "/overview/kanban/comments",
        },
    ]
    return (
        <Container maxWidth="xl">
            <div>
                <List
                    sx={{ width: 'auto', bgcolor: 'background.paper', display: 'flex', }}
                >
                    {navLists.map(({ name, to }) => (
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
            <Children task={task}/>
        </Container>
    )
}
export default Index
