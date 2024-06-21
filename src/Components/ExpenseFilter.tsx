import listCategory from "../categories"

interface ExpenseFilterProps {
    onSelectCategory : (category : string) => void
}


function ExpenseFilter({onSelectCategory} : ExpenseFilterProps) {



  return (
    <div className="mb-3">
        <select className='form-select' onChange={(event) => onSelectCategory(event.target.value)}>
            <option value="All-Category">All Category</option>
            {listCategory.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
    </div>
  )
}

export default ExpenseFilter