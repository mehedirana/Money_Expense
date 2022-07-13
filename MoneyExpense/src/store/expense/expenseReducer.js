import { ADD_TO_EXPENSE, EDIT_EXPENSE, REMOVE_FROM_EXPENSE, EMPTY_EXPENSE } from "../actionTypes"
const initialState = {
    expense: [],
    total: 0
}


export const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_EXPENSE:
            console.log();
            return {
                ...state,
                expense:[action.payload, ...state.expense],
                total: +state.total + +action.payload.expenseAmount

            }
        case EDIT_EXPENSE:
            return {
                ...state,
            }
        case REMOVE_FROM_EXPENSE:
            let removeItem = state.expense.filter(
                (item,i) => item.expenseId === action.payload.expenseId
            )
            return {
                ...state,
                expense: state.expense.filter((item,i)=> item.expenseId !== action.payload.expenseId)
            }

        case EMPTY_EXPENSE:
            return {
                ...state,
                expense: [],
                total: 0
            }
        default:
            return state;
    }

}