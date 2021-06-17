export enum ACTIONS_TYPE {
    SET_COUNTER_VALUE = 'SET_COUNTER_VALUE',
    INCREASE_COUNTER_VALUE = 'INCREASE_COUNTER_VALUE',
    RESET_COUNTER_VALUE = 'RESET_COUNTER_VALUE',
    SET_MIN_VALUE = "SET_MIN_VALUE",
    SET_MAX_VALUE = "SET_MAX_VALUE",
}

type SetCounterValueAT = {
    type: ACTIONS_TYPE.SET_COUNTER_VALUE
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

type ActionType = SetCounterValueAT | IncreaseCounterValueAT |
    ResetCounterValueAT | SetMinValueAT | SetMaxValueAT

const initialState = {
    countValue: 0,
    maxValue: 0,
    minValue: 0,
    error: "",
}

export type InitialStateType = typeof initialState;

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_COUNTER_VALUE: {
            let copyState = {...state};
            copyState.countValue = action.minValue;
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
        default:
            return state;
    }
};


export const setCounterValue = (minValue: number): SetCounterValueAT => {
    return {type: ACTIONS_TYPE.SET_COUNTER_VALUE, minValue}
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

