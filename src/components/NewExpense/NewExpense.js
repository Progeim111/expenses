import React, {useState} from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


const NewExpense = (props) => {
    const [lastId, setLastId] = useState(3);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: 'e' + (lastId + 1)
        }
        setLastId(lastId + 1)
        props.onAddExpense(expenseData)
    }
    return (
        <div className={'new-expense'}>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense