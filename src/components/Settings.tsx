import React, {useState} from "react";
import {Box, Button} from '@material-ui/core';
import {InputElement} from "./InputElement";
import {Save} from "@material-ui/icons";
import {CounterStateType, setCounterValue, setMaxValue, setMinValue} from "../redux/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../redux/store";


export type SettingsType = {
    minValue: number
    maxValue: number
    errorMax: boolean
    errorMin: boolean
    errorMaxMin: boolean
}


export const Settings = (props: SettingsType) => {
    let dispatch = useDispatch()
    const maxValue = useSelector<AppRootState, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppRootState, number>(state => state.counter.minValue)
    const errorMax = useSelector<AppRootState, boolean>(state => state.counter.errorMax)
    const errorMin = useSelector<AppRootState, boolean>(state => state.counter.errorMin)


    const setDisplayValueHandler = (countValue: number, minValue: number) => {
        dispatch(setCounterValue(countValue, minValue))
    }


    const setMinValueHandler = (minValue: number) => {
        dispatch(setMinValue(minValue))

    }
    const setMaxValueHandler = (maxValue: number) => {
        dispatch(setMaxValue(maxValue))
    }
    const setErrorMaxMin = (maxValue: number, minValue: number) => {
        dispatch(setErrorMaxMin(maxValue, minValue))
    }

    return (
        <Box>
            <Box>
                <Box style={{margin: 20}}> max value </Box>
                <InputElement
                    value={maxValue}
                    changeValue={setMaxValueHandler}
                    error={errorMax}

                />
                <Box style={{margin: 20}}> start value </Box>
                <InputElement
                    value={minValue}
                    changeValue={setMinValueHandler}
                    error={errorMin}
                />
            </Box>
            <Box>
                <Button style={{margin: "70px", justifyContent: 'center'}}
                        startIcon={<Save/>}
                        size={"large"}
                        variant='contained'
                        color={'secondary'}
                        onClick={(e) => setDisplayValueHandler(+e.currentTarget.value, props.minValue)}
                        className="button-style"
                        disabled={props.errorMaxMin}>
                    SET
                </Button>
            </Box>
        </Box>
    )
};
