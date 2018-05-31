import expenseReducer from '../../reducers/expenses';
import expenses from "../fixtures/expenses";

test('should set default state', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: 4,
    description: 'Laptop',
    note: '',
    amount: 195,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const description = 'Rice';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description
    }
  }
  const state = expenseReducer(expenses, action);
  expect(state[0].description).toBe(description);
});

test('should not edit if id not found', () => {
  const description = 'Rice';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description
    }
  }
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});