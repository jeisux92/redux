import {
    ADD_COUNTER,
    INC_COUNTER,
    DEC_COUNTER,
    SUB_COUNTER
} from "./actionTypes";


const incCounter = () => ({ type: INC_COUNTER })

const decCounter = () => ({ type: DEC_COUNTER })

const addCounter = (value) => ({ type: ADD_COUNTER, value: value })

const subCounter = (value) => ({ type: SUB_COUNTER, value: value })


export {
    incCounter,
    decCounter,
    addCounter,
    subCounter
}