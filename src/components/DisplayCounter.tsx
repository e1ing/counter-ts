import React, {useState} from "react";
import {Box, Button} from '@material-ui/core';


export type DisplayCounterType = {
    increaseValue: () => void
    resetValue: () => void
    counter: number | string
    maxValue: number
    minValue: number
    errorCase: () => void
    error: string
    errorState: boolean
}

export function DisplayCounter(props: DisplayCounterType) {
    // let isDisabled = (props.error===" " ? true : false)
    return (
        <Box>
            <Box className={props.error === "incorrect value" ||
            props.error === "enter value and press set" ||
            props.counter===props.maxValue
                ? "error" : "counter"}>

                {(props.error === "incorrect value" ||
                    props.error === "enter value and press set")
                    ? props.error : props.counter}
            </Box>
            <Box className="buttons-block">
                <Button variant='contained'
                        className="button-style"
                        disabled={props.counter === props.maxValue}
                        onClick={props.increaseValue}>
                    INC
                </Button>
                <Button variant='contained'
                        onClick={props.resetValue}
                        className="button-style">
                    RESET
                </Button>
            </Box>
        </Box>
    )
}
