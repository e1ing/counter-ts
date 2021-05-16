import React, {useEffect, useState} from "react";
import {DisplayCounter} from "./DisplayCounter";
import {Box, Container, Grid, Paper} from '@material-ui/core';
import {Settings} from "./Settings";


export function Counter() {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [countValue, setCountValue] = useState<any>(0)
    let [error, setError] = useState<string>("")
    let [errorState, setErrorState] = useState<boolean>(false)

    const increaseValue = () => setCountValue(countValue + 1);

    const resetValue = () => setCountValue(0);

    const setDisplayValue = () => {
        setError(" ")
        setCountValue(minValue)
    }

    const setMinValueCallback = (val: number) => {
        setMinValue(val)
        errorCase()
    }
    const setMaxValueCallback = (val: number) => {
        setMaxValue(val)
        errorCase()
    }

    const errorCase = () => {
        if (maxValue === minValue) {
            setError("incorrect value");
            setErrorState(true)
        } else if (minValue < 0) {
            setError("incorrect value");
            setErrorState(true)
        } else if (maxValue < 0) {
            setError("incorrect value");
            setErrorState(true)
        } else if (maxValue < minValue) {
            setError("incorrect value");
            setErrorState(true)
        } else {
            setError("enter value and press set")
            setErrorState(false)
        }
    }


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
        errorCase()
    }, [maxValue, minValue])


    return (
        <Container fixed>

            <Grid container spacing={3} style={{padding: "30px 0px"}}
                  direction="row"
                  justify="center"
                  alignItems="center">

                <Paper style={{height:60 , width: 50}}>
                    <Settings
                        minValue={minValue}
                        maxValue={maxValue}
                        setMinValue={setMinValueCallback}
                        setMaxValue={setMaxValueCallback}
                        setDisplayValue={setDisplayValue}
                        errorState={errorState}/>
                </Paper>

                    <Paper >
                        <DisplayCounter
                            increaseValue={increaseValue}
                            resetValue={resetValue}
                            counter={countValue}
                            maxValue={maxValue}
                            minValue={minValue}
                            errorCase={errorCase}
                            error={error}
                            errorState={errorState}/>
                    </Paper>
            </Grid>

        </Container>
)
}