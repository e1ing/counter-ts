import React, {useEffect, useState} from "react";
import {DisplayCounter} from "./DisplayCounter";
import {Container, Grid, Paper} from '@material-ui/core';
import {Settings} from "./Settings";
import {useDispatch, useSelector} from "react-redux";
import {
    CounterStateType,
    increaseCounterValue,
    resetCounterValue,
    setCounterValue, setErrorMaxMin,
    setMaxValue,
    setMinValue
} from "../redux/counter-reducer";
import {AppRootState} from "../redux/store";


export function CounterRedux() {

    let dispatch = useDispatch()
    const counter = useSelector<AppRootState, CounterStateType>(state => state.counter)





    const setErrorMaxMin = (maxValue: number, minValue: number) => {
        dispatch(setErrorMaxMin(maxValue, minValue))
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

    }, [maxValue, minValue])


    return (
        <Container fixed>

            <Grid container spacing={3} style={{padding: "30px 0px"}}
                  justify="center"
                  alignItems="center">

                <Paper style={{margin: 20}} elevation={3}>
                    <Settings
                        minValue={minValue}
                        maxValue={maxValue}
                        errorMax={errorMax}
                        errorMin={errorMin}
                        errorMaxMin={errorMaxMin}
                    />
                </Paper>

                <Paper style={{margin: 20}} elevation={3}>
                    <DisplayCounter
                        increaseValue={increaseCounterValueHandler}
                        resetValue={resetValueHandler}
                        counter={countValue}
                        maxValue={maxValue}
                        error={error}
                    />
                </Paper>
            </Grid>

        </Container>
    )
}