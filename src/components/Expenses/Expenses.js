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

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onChangeYear={yearChangeHandler} />
            {
                filteredExpenses.map((expense) => {
                    return <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />;
                })
            }
        </Card>
    );
}

export default Expenses;
