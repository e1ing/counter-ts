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

export const Settings = (props: SettingsType) => (
    <Box>
        <Box>
            <Box> max value </Box>
            <InputElement
                value={props.maxValue}
                changeValue={props.setMaxValue}
                error={props.errorState}

            />
            <Box> start value </Box>
            <InputElement
                value={props.minValue}
                changeValue={props.setMinValue}
                error={props.errorState}
            />
        </Box>
        <Box>
            <Button  style={{margin: "10px", justifyContent: 'center'}}
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
);
