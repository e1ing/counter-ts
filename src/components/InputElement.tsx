import React, {ChangeEvent} from "react";
import {Input, TextField} from '@material-ui/core';
import {InputProps} from "@material-ui/core/Input/Input";

export type InputElementType = {
    value: number
    changeValue: (value: number) => void
}

export function InputElement({value, changeValue, ...restProps}: InputElementType & InputProps) {
    const onValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeValue(+e.currentTarget.value)
    }

    return <Input style={{margin: 20}}
                  type="number"
                  value={value}
                  color={'primary'}
                  onChange={onValueChangeHandler} {...restProps}

    />
}