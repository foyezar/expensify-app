// Expenses Reducer
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => action.id !== id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        return (expense.id === action.id) ? {...state, ...action.updates} : expense;
      });
    default:
      return state;
  }
};