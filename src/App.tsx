
import { useState } from 'react'
import './App.css'
import ExpenseList from './Components/ExpenseList'
import ExpenseFilter from './Components/ExpenseFilter'
import ExpenseForm from './Components/ExpenseForm'



function App() {

   
  const [expenses , setExpenses] = useState([{id: 1, description: 'milk',amount: 3, category: "Utilities"}])

  console.log(expenses)
   

  return (
    <>
    <div className="mb-5">
      <ExpenseForm  onSubmit={(data) => setExpenses([...expenses, {...data, id: expenses.length+1}])} />
    </div>
    <ExpenseFilter onSelectCategory={(category) => setExpenses(expenses.filter((expense)=> expense.category == category))} />
     <ExpenseList  expenses={expenses} onDelete={(id) => setExpenses(expenses.filter((expense) => expense.id !== id))} />
    </>
  )
}

export default App
