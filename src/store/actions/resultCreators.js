import {
    STORE_RESULT,
    DELETE_RESULT
} from "./actionTypes";

const saveResult = (counter) => ({
    type: STORE_RESULT,
    counter: counter
})

const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => dispatch(saveResult(res)), 2000)
    }
}

const deleteResult = (index) => ({ type: DELETE_RESULT, index: index })

export {
    storeResult,
    deleteResult
}