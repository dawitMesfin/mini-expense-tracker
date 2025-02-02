
import 'bootstrap/dist/css/bootstrap.css';

export interface Expense {
    id: number ,
    description: string,
    amount: number ,
    category: string
}

interface ExpenseListPropsType {
    expenses: Expense[],
    onDelete : (id:number) => void,
}

function ExpenseList({expenses, onDelete  } : ExpenseListPropsType) {
  return (
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Discription</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            {expenses.map(expense => <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td><button className='btn btn-outline-danger' onClick={()=> onDelete(expense.id)}>Delete</button></td>
            </tr>)}
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td>${expenses.reduce((acc , expense) => expense.amount + acc , 0)}</td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
  )
}

export default ExpenseList