import React, {useEffect, useState} from "react";
import {DisplayCounter} from "./DisplayCounter";
import {Box, Container, Grid, Paper} from '@material-ui/core';
import {Settings} from "./Settings";


export function Counter() {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [countValue, setCountValue] = useState<any>(0)
    let [error, setError] = useState<string>("")


    const increaseValue = () => setCountValue(countValue + 1);

    const resetValue = () => setCountValue(0);

    const setDisplayValue = () => {
        setError(" ")
        setCountValue(minValue)
    }

    const setMinValueCallback = (val: number) => {
        setMinValue(val)

    }
    const setMaxValueCallback = (val: number) => {
        setMaxValue(val)
    }

    let errorMax:boolean = (maxValue <= minValue) || (maxValue<0)|| (maxValue === minValue);
    let errorMin:boolean = (minValue<0)|| (maxValue === minValue);
    let errorMaxMin:boolean = errorMax||errorMin;

    useEffect(() => {
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

    }, [maxValue, minValue])


    return (
        <Container fixed>

            <Grid container  spacing={3} style={{padding: "30px 0px"}}
                  justify="center"
                  alignItems="center">

                <Paper style={{margin: 20}}  elevation={3} >
                    <Settings
                        minValue={minValue}
                        maxValue={maxValue}
                        setMinValue={setMinValueCallback}
                        setMaxValue={setMaxValueCallback}
                        setDisplayValue={setDisplayValue}
                        errorMax={errorMax}
                        errorMin={errorMin}
                        errorMaxMin={errorMaxMin}
                    />
                </Paper>

                    <Paper style={{margin: 20}}   elevation={3}>
                        <DisplayCounter
                            increaseValue={increaseValue}
                            resetValue={resetValue}
                            counter={countValue}
                            maxValue={maxValue}
                            error={error}
                            />
                    </Paper>
            </Grid>

        </Container>
)
}