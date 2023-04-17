import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2023');

    console.log('Year data in Expenses.js ' + selectedYear)

    const yearChangeHandler = (year) => {
        console.log('Filter change handled by Expenses.js')
        console.log(year + 'in Expenses.js')
        setSelectedYear(year);

    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onChangeYear={yearChangeHandler} />
            {
                props.expenses.map((expense) => {
                    return <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>
            })
            }
        </Card>
    );
}

export default Expenses;

