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
    errorMax: boolean
    errorMin: boolean
    errorMaxMin: boolean
}


export const Settings = (props: SettingsType) => {


    return (
        <Box>
            <Box>
                <Box style={{margin: 20}}> max value </Box>
                <InputElement
                    value={props.maxValue}
                    changeValue={props.setMaxValue}
                    error={props.errorMax}

                />
                <Box style={{margin: 20}}> start value </Box>
                <InputElement
                    value={props.minValue}
                    changeValue={props.setMinValue}
                    error={props.errorMin}
                />
            </Box>
            <Box>
                <Button style={{margin: "70px", justifyContent: 'center'}}
                        startIcon={<Save/>}
                        size={"large"}
                        variant='contained'
                        color={'secondary'}
                        onClick={props.setDisplayValue}
                        className="button-style"
                        disabled={props.errorMaxMin}>
                    SET
                </Button>
            </Box>
        </Box>
    )
};
