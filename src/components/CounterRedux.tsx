import React, {useEffect, useState} from "react";
import {DisplayCounter} from "./DisplayCounter";
import {Container, Grid, Paper} from '@material-ui/core';
import {Settings} from "./Settings";

export function CounterRedux() {

    /*useEffect(() => {
       let maxAsString = localStorage.getItem('maxKey')
       if (maxAsString) {
           setMaxValue(JSON.parse(maxAsString))
       }
       let minAsString = localStorage.getItem('minKey')
       if (minAsString) {
           setMinValue(JSON.parse(minAsString))
       }
   }, [])

   useEffect(() => {
       localStorage.setItem('maxKey', JSON.stringify(maxValue))
       localStorage.setItem('minKey', JSON.stringify(minValue))

   }, [maxValue, minValue])*/


    return (
        <Container fixed>

            <Grid container spacing={3} style={{padding: "30px 0px"}}
                  justify="center"
                  alignItems="center">

                <Paper style={{margin: 20}} elevation={3}>
                    <Settings

                    />
                </Paper>

                <Paper style={{margin: 20}} elevation={3}>
                    <DisplayCounter

                    />
                </Paper>
            </Grid>

        </Container>
    )
}