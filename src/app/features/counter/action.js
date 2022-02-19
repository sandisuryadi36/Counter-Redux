import * as counter from "./constant"

export const increment = (value) => { 
    return {
        type: counter.INC,
        value: value
    }
}

export const decrement = (value) => { 
    return {
        type: counter.DEC,
        value: value
    }
}

export const decNoMinus = (value) => { 
    return (dispatch, getState) => { 
        if(getState().counter.count - value >= 0) {
            dispatch(decrement(value))
        }
    }
}

export const changeModifire = (value) => { 
    return {
        type: counter.MOD,
        value: parseInt(value)
    }
}