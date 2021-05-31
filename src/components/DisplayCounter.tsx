import React, {useState} from "react";
import {Box, Button, InputLabel, Paper} from '@material-ui/core';


export type DisplayCounterType = {
    increaseValue: () => void
    resetValue: () => void
    counter: number | string
    maxValue: number
    error: string

}

export function DisplayCounter(props: DisplayCounterType) {
     let isDisabled = props.error === "incorrect value" ||
     props.error === "enter value and press set" ||
     props.counter===props.maxValue

    return (
        <Box>
            <InputLabel style={{margin: 100}}
                error={isDisabled}
                        margin={'dense'}
            >

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
                        onClick={props.increaseValue}>
                    INC
                </Button>
                <Button style={{margin: "10px",  width: "50%"}}
                    variant='contained'
                    color={"primary"}
                    size={'large'}
                        onClick={props.resetValue}
                        className="button-style">
                    RESET
                </Button>
            </Box>

        </Box>
    )
}
