import React, {useEffect, useState} from "react";
import {DisplayCounter} from "./DisplayCounter";
import {Box} from '@material-ui/core';
import {Settings} from "./Settings";


export function Counter() {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [countValue, setCountValue] = useState<any>(0)
    let [error, setError] = useState<string>("")
    let [errorState, setErrorState] = useState<boolean>(false)

    const increaseValue = () => setCountValue(countValue + 1);

    const resetValue = () => setCountValue(0);

    const setDisplayValue = () => {
        setError(" ")
        setCountValue(minValue)
    }

    const setMinValueCallback = (val: number) => {
        setMinValue(val)
        errorCase()
    }
    const setMaxValueCallback = (val: number) => {
        setMaxValue(val)
        errorCase()
    }

    const errorCase = () => {
        if (maxValue === minValue) {
            setError("incorrect value");
            setErrorState(true)
        } else if (minValue < 0) {
            setError("incorrect value");
            setErrorState(true)
        } else if (maxValue < 0) {
            setError("incorrect value");
            setErrorState(true)
        } else if (maxValue < minValue) {
            setError("incorrect value");
            setErrorState(true)
        } else {
            setError("enter value and press set")
            setErrorState(false)
        }
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
        errorCase()
    }, [maxValue, minValue])


    return (
        <Box className="body">
            <Settings
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValueCallback}
                setMaxValue={setMaxValueCallback}
                setDisplayValue={setDisplayValue}
                errorState={errorState}

            />
            <DisplayCounter
                increaseValue={increaseValue}
                resetValue={resetValue}
                counter={countValue}
                maxValue={maxValue}
                minValue={minValue}
                errorCase={errorCase}
                error={error}
                errorState={errorState}

            />
        </Box>
    )
}