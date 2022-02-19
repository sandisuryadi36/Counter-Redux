import * as counter from "./constant"

let initialState = {
    count: 0
}

let initialMod = {
    mod: 2
}

export const countReducer = (state = initialState, action) => { 
    switch (action.type) {
        case counter.INC:
            return {
                ...state,
                count: state.count + action.value
            }
        case counter.DEC:
            return {
                count: state.count - action.value
            }
        default: {
            return state
        }
    }
}

export const modReducer = (state = initialMod, action) => { 
    if (action.type === counter.MOD) {
        return {
            ...state,
            mod: action.value
        }
    } else return state
}