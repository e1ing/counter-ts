
export type CounterStateType = {
    countValue: number,
    maxValue: number,
    minValue: number,
    error: string,
}

const initialState: any = {
    countValue: 0,
    maxValue: 0,
    minValue: 0,
    error: ""
}

export const counterReducer = (state: any, action: any) =>{
switch (action.type) {
    case A:
        return


    case B:
        return

    case C:
        return

    default: return state;
}
};