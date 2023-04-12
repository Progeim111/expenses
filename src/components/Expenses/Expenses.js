import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem expenseData={props.expenses[0]} />
            <ExpenseItem expenseData={props.expenses[1]} />
        </Card>
    );
}

export default Expenses;

