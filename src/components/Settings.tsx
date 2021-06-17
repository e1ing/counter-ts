import React, {useState} from "react";
import {Box, Button} from '@material-ui/core';
import {InputElement} from "./InputElement";
import {Save} from "@material-ui/icons";
import {setCounterValue, setMaxValue, setMinValue} from "../bll/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../bll/store";


export const Settings = () => {
    const maxValue = useSelector<AppRootState, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppRootState, number>(state => state.counter.minValue)
    let dispatch = useDispatch()

    let errorMax: boolean = (maxValue <= minValue) || (maxValue < 0) || (maxValue === minValue);
    let errorMin: boolean = (minValue < 0) || (maxValue === minValue);
    let errorMaxMin: boolean = errorMax || errorMin;

    const setDisplayValueHandler = (minValue: number) => {
        dispatch(setCounterValue(minValue))
    }
    const setMinValueHandler = (minValue: number) => {
        dispatch(setMinValue(minValue))
    }
    const setMaxValueHandler = (maxValue: number) => {
        dispatch(setMaxValue(maxValue))
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
                        onClick={() => setDisplayValueHandler(minValue)}
                        className="button-style"
                        disabled={errorMaxMin}>
                    SET
                </Button>
            </Box>
        </Box>
    )
};
