import React, {useState} from "react";
import {Box, Button, InputLabel, Paper} from '@material-ui/core';
import {increaseCounterValue, resetCounterValue, setCounterValue} from "../bll/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../bll/store";


export function DisplayCounter() {
    const maxValue = useSelector<AppRootState, number>(state => state.counter.maxValue)
    const countValue = useSelector<AppRootState, number>(state => state.counter.countValue)
    const error = useSelector<AppRootState, string>(state => state.counter.error)
    let dispatch = useDispatch()

    let isDisabled = error === "incorrect value" ||
       error === "enter value and press set" ||
        countValue === maxValue

    const increaseCounterValueHandler = (countValue: number) => {
        dispatch(increaseCounterValue(countValue))
    };

    const resetValueHandler = (countValue: number) => {
        dispatch(resetCounterValue(countValue))
    };

    return (
        <Box>
            <InputLabel style={{margin: 100}}
                        error={isDisabled}
                        margin={'dense'}>

                {(error === "incorrect value" ||
                    error === "enter value and press set")

                    ? error : countValue}
            </InputLabel>
            <Box display="flex" justifyContent="center">
                <Button style={{margin: "10px", width: "50%"}}
                        variant='contained'
                        size={'large'}
                        color={"primary"}
                        className="button-style"
                        disabled={countValue === maxValue}
                        onClick={() => increaseCounterValueHandler(countValue)}>
                    INC
                </Button>
                <Button style={{margin: "10px", width: "50%"}}
                        variant='contained'
                        color={"primary"}
                        size={'large'}
                        onClick={() => resetValueHandler(countValue)}
                        className="button-style">
                    RESET
                </Button>
            </Box>

        </Box>
    )
}
