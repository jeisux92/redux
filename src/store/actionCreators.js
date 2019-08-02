import {
    ADD_COUNTER,
    INC_COUNTER,
    DEC_COUNTER,
    SUB_COUNTER,
    STORE_RESULT,
    DELETE_RESULT
} from "./actionTypes";


const incCounter = () => ({ type: INC_COUNTER })

const decCounter = () => ({ type: DEC_COUNTER })

const addCounter = (value) => ({ type: ADD_COUNTER, value: value })

const subCounter = (value) => ({ type: SUB_COUNTER, value: value })

const storeResult = () => ({ type: STORE_RESULT })

const deleteResult = (index) => ({ type: DELETE_RESULT, index: index })

export {
    incCounter,
    decCounter,
    addCounter,
    subCounter,
    storeResult,
    deleteResult
}