export enum ACTIONS_TYPE {
    SET_COUNTER_VALUE = 'SET_COUNTER_VALUE',
    INCREASE_COUNTER_VALUE = 'INCREASE_COUNTER_VALUE',
    RESET_COUNTER_VALUE = 'RESET_COUNTER_VALUE',
    SET_MIN_VALUE = "SET_MIN_VALUE",
    SET_MAX_VALUE = "SET_MAX_VALUE",
    SET_ERROR_FOR_MAX_MIN = "SET_ERROR",
}

type SetCounterValueAT = {
    type: ACTIONS_TYPE.SET_COUNTER_VALUE
    countValue: number
    minValue: number
}

type IncreaseCounterValueAT = {
    type: ACTIONS_TYPE.INCREASE_COUNTER_VALUE
    countValue: number
}

type ResetCounterValueAT = {
    type: ACTIONS_TYPE.RESET_COUNTER_VALUE
    countValue: number
}

type SetMinValueAT = {
    type: ACTIONS_TYPE.SET_MIN_VALUE
    minValue: number
}

type SetMaxValueAT = {
    type: ACTIONS_TYPE.SET_MAX_VALUE
    maxValue: number
}

type SetErrorMaxMinAT = {
    type: ACTIONS_TYPE.SET_ERROR_FOR_MAX_MIN
    minValue: number
    maxValue: number
    countValue: number | string
}

type ActionType = SetCounterValueAT | IncreaseCounterValueAT |
    ResetCounterValueAT | SetMinValueAT | SetMaxValueAT | SetErrorMaxMinAT

export type CounterStateType = {
    countValue: number | string,
    maxValue: number,
    minValue: number,
    error: string,
    errorMax: boolean,
    errorMin: boolean,
}

const initialState: CounterStateType = {
    countValue: 0,
    maxValue: 0,
    minValue: 0,
    error: "",
    errorMax: true,
    errorMin: true,
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_COUNTER_VALUE: {
            let copyState = {...state};
            copyState.minValue = action.minValue;
            return copyState;
        }

        case ACTIONS_TYPE.INCREASE_COUNTER_VALUE: {
            let copyState = {...state}
            copyState.countValue = action.countValue + 1;
            return copyState;
        }

        case ACTIONS_TYPE.RESET_COUNTER_VALUE: {
            let copyState = {...state}
            action.countValue = 0;
            copyState.countValue = action.countValue;
            return copyState;
        }

        case ACTIONS_TYPE.SET_MIN_VALUE: {
            let copyState = {...state}
            copyState.minValue = action.minValue
            return copyState;
        }
        case ACTIONS_TYPE.SET_MAX_VALUE: {
            let copyState = {...state}
            copyState.maxValue = action.maxValue
            return copyState;
        }

        case ACTIONS_TYPE.SET_ERROR_FOR_MAX_MIN: {
            let copyState = {...state}

            if ((action.maxValue <= action.minValue) || (action.maxValue < 0) || (action.maxValue === action.minValue)) {
                copyState.errorMax = !copyState.errorMax;
                copyState.countValue = "incorrect value"
            } else {
                copyState.countValue = "enter value and press set"
            }
            if ((action.minValue < 0) || (action.maxValue === action.minValue)) {
                copyState.errorMin = !copyState.errorMax
                copyState.countValue = "incorrect value"
            } else {
                copyState.countValue = "enter value and press set"
            }
            return copyState;
        }
        default:
            return state;
    }
};


export const setCounterValue = (countValue: number, minValue: number): SetCounterValueAT => {
    return {type: ACTIONS_TYPE.SET_COUNTER_VALUE, countValue, minValue}
}

export const increaseCounterValue = (countValue: number): IncreaseCounterValueAT => {
    return {type: ACTIONS_TYPE.INCREASE_COUNTER_VALUE, countValue}
};

export const resetCounterValue = (countValue: number): ResetCounterValueAT => {
    return {type: ACTIONS_TYPE.RESET_COUNTER_VALUE, countValue}
};

export const setMinValue = (minValue: number): SetMinValueAT => {
    return {type: ACTIONS_TYPE.SET_MIN_VALUE, minValue}
};

export const setMaxValue = (maxValue: number): SetMaxValueAT => {
    return {type: ACTIONS_TYPE.SET_MAX_VALUE, maxValue}
};

export const setErrorMaxMin = (minValue: number, maxValue: number, countValue: number | string): SetErrorMaxMinAT => {
    return {type: ACTIONS_TYPE.SET_ERROR_FOR_MAX_MIN, minValue, maxValue, countValue}
};
