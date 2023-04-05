import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    const expenses = props.expenses;

    return (
        <div>
            <ExpenseItem expenseData={expenses[0]} />
            <ExpenseItem expenseData={expenses[1]} />
        </div>
    );
}

export default Expenses;