import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import {useState, useEffect} from "react";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2022');

    const yearChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }
    useEffect(() => {
        console.log('Year data is Expenses.js ', props.expenses[0].date.getFullYear());
    }, []);

    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onChangeYear={yearChangeHandler} />
            <ExpenseItem expenseData={props.expenses[0]} />
            <ExpenseItem expenseData={props.expenses[1]} />
            <ExpenseItem expenseData={props.expenses[2]} />
        </Card>
    );
}

export default Expenses;

