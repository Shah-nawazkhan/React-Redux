import { v4 as uuidv4 } from 'uuid';

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const addExpense = ({ name, amount, spendDate, category }) => ({
   type: ADD_EXPENSE,
   payload: {
      id: uuidv4(),
      name,
      amount,
      spendDate,
      category
   }
});
export const deleteExpense = id => ({
   type: DELETE_EXPENSE,
   payload: {
      id
   }
});
