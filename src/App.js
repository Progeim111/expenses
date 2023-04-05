import logo from './logo.svg';
import './App.css';
import './components/Expenses.css';
import Expenses from "./components/Expenses";
function App() {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title:'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 5),
            title:'New jeans',
            price: 3.99
        }
    ]

    return (
        <div className="App">
            <div className="expenses">
            <Expenses expenses={expenses} />
        </div>
        </div>
    );
}


export default App;