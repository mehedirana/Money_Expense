import { ADD_TO_EXPENSE, EDIT_EXPENSE, REMOVE_FROM_EXPENSE, EMPTY_EXPENSE } from "../actionTypes"


export const addToExpense = item => dispatch =>{
    dispatch({
        type: ADD_TO_EXPENSE,
        payload: {...item}
    })
}


export const editExpense = item => dispatch => {
    dispatch({
        type: EDIT_EXPENSE,
        payload:item
    })
}


export const removeFromExpense = item => dispatch => {
    dispatch({
        type: REMOVE_FROM_EXPENSE,
        payload:item
    })
}


export const emptyExpense = () => dispatch => {
    dispatch({
        type: EMPTY_EXPENSE,
    })
}