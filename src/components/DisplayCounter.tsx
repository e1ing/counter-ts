import React, {useState} from "react";
import {Box, Button, InputLabel, Paper} from '@material-ui/core';
import {increaseCounterValue, resetCounterValue} from "../redux/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../redux/store";


export type DisplayCounterType = {
    increaseValue: () => void
    resetValue: () => void
    counter: number | string
    maxValue: number
    error: string
}

export function DisplayCounter(props: DisplayCounterType) {
    let dispatch = useDispatch()
    const countValue = useSelector<AppRootState, number | string>(state => state.counter.counter)

     let isDisabled = props.error === "incorrect value" ||
     props.error === "enter value and press set" ||
     props.counter===props.maxValue

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

                {(props.error === "incorrect value" ||
                    props.error === "enter value and press set")

                    ? props.error : props.counter}
            </InputLabel >
            <Box  display="flex"  justifyContent="center">
                <Button style={{margin: "10px", width: "50%"}}
                    variant='contained'
                        size={'large'}
                        color={"primary"}
                        className="button-style"
                        disabled={props.counter === props.maxValue}
                        onClick={() => increaseCounterValueHandler(countValue)}>
                    INC
                </Button>
                <Button style={{margin: "10px",  width: "50%"}}
                    variant='contained'
                    color={"primary"}
                    size={'large'}
                        onClick={resetValueHandler}
                        className="button-style">
                    RESET
                </Button>
            </Box>

        </Box>
    )
}
