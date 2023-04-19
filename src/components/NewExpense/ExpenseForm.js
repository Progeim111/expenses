import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        setIsEditing(false)
    }
    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    let expenseFormContent = (
        <button onClick={startEditingHandler}>Add New Expense</button>
    )

    if (isEditing) {
        expenseFormContent = (
            <form onSubmit={submitHandler}>
                <div className={"new-expense__controls"}>
                    <div className={"new-expense__control"}>
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                    </div>
                    <div className={"new-expense__control"}>
                        <label>Amount</label>
                        <input type="number" min="1" step="1" onChange={amountChangeHandler}/>
                    </div>
                    <div className={"new-expense__control"}>
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2025-12-31" onChange={dateChangeHandler}/>
                    </div>
                    <div>
                        <button type="button" onClick={stopEditingHandler}>Cancel</button>
                        <button type="submit">Add Expense</button>
                    </div>
                </div>
            </form>
        )
    }

    return (
        <div className="new-expense">
            {expenseFormContent}
        </div>
    )
}

export default ExpenseForm
