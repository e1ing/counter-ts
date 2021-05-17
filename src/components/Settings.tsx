import React, {useState} from "react";
import {Box, Button} from '@material-ui/core';
import {InputElement} from "./InputElement";
import {Save} from "@material-ui/icons";



export type SettingsType = {
    minValue: number
    maxValue: number
    setMinValue: (min: number) => void
    setMaxValue: (max: number) => void
    setDisplayValue: () => void
    errorState: boolean
}


export const Settings = (props: SettingsType) => {

let errorMax:boolean = (props.maxValue <= props.minValue) || (props.maxValue<0)|| (props.maxValue === props.minValue);
let errorMin:boolean = (props.minValue<0)|| (props.maxValue === props.minValue);
    return (
<Box>
        <Box>
            <Box style={{margin: 20 }}> max value </Box>
            <InputElement
                value={props.maxValue}
                changeValue={props.setMaxValue}
                error={errorMax}

            />
            <Box style={{margin: 20 }}> start value </Box>
            <InputElement
                value={props.minValue}
                changeValue={props.setMinValue}
                error={errorMin}
            />
        </Box>
        <Box>
            <Button  style={{margin: "70px", justifyContent: 'center'}}
                startIcon={<Save/>}
                size={"large"}
                variant='contained'
                color={'secondary'}
                    onClick={props.setDisplayValue}
                    className="button-style"
                   disabled={props.errorState}>
                SET
            </Button>
        </Box>
    </Box>
)};
