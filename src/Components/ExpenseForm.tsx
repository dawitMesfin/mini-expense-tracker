import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import listCategory from '../categories'



const expenseSchema = z.object({
    description: z.string(),
    amount: z.number(),
    category: z.enum(listCategory)
    
}
)

interface ExpenseFormProps {
    onSubmit: (data : ExpenseFormData) => void
}

type ExpenseFormData = z.infer<typeof expenseSchema>


const ExpenseForm = ({ onSubmit } :ExpenseFormProps) => {

    const {register , handleSubmit ,getValues, formState : {errors}} = useForm<ExpenseFormData>({resolver : zodResolver(expenseSchema)})

    console.log('values', getValues())

  return (
    <form className='form' onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input {...register('description')} id='description' type="text" className='form-control'/>
            {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input {...register('amount', {valueAsNumber:true})} id='amount'  type="number" className="form-control" />
            {errors.amount && <p>{errors.amount.message}</p>}

        </div>
        
        <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select {...register('category')} id="category" className="form-select">
                <option value="all-category"></option>
                {listCategory.map(category => <option id='category' value={category} key={category} >{category}</option>)}
                
            </select>
            {errors.category && <p>{errors.category.message}</p>}

            
        </div>

        <button className='btn btn-primary' type='submit' >Submit</button>

    </form>
)
}

export default ExpenseForm