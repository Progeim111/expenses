import logo from './logo.svg';
import './App.css';
import './components/Expenses/Expenses.css';
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES  = [
    {
        id: 'e1',
        date: new Date(2023, 0, 10),
        title:'New book',
        amount: 30.99
    },
    {
        id: 'e2',
        date: new Date(2023, 0, 5),
        title:'New jeans',
        amount: 99.99
    },
    {
        id: 'e3',
        date: new Date(2024, 0, 15),
        title:'New shoes',
        amount: 59.99
    }
    ]

const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        console.log('In App.js')
        setExpenses((previousExpenses) => {
            return [expense, ...previousExpenses]
        }
        )
    }
    console.log(expenses)

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;