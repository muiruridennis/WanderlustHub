import React from 'react'
import "./styles.js";
import Widget from "../../components/widgets/widget";
import { Container, Grid, Button } from "@mui/material"
import useStyles from "./styles"

function Home() {
    const classes = useStyles();
    return (
        <Container className={classes.main}>
            <Grid container    className={""}>
                <Grid item  md={12} sm={12}>
                    <Widget />
                </Grid>
                <Grid  item  md={12} >hello world</Grid >
            </Grid>
        </Container>
    )
}

export default Home