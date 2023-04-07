import React,{ useState, ChangeEvent, useEffect, useRef }  from 'react'
import { ITask } from '../Interfaces'

type Props = {
    onAddTodoClickHnd: (data: ITask) => void
}

const AddTodoForm = (props: Props) => {
    const { onAddTodoClickHnd } = props
    const [ todoTitle, setTodoTitle ] = useState<string>('')

    const inputRef = useRef(null)
    useEffect(() => {
        // inputRef.current.focus()
    })

// If function doesnt have any return type than we can add return type of function is
// ": void" like below
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodoTitle(e.target.value)
  }

  const onAddTodoBtnClickHnd = (e: any): void => {
    e.preventDefault()
    const data: ITask = {
        id: new Date().getMilliseconds(),
        taskTitle: todoTitle,
        isCompleted: false 
    }
    onAddTodoClickHnd(data)
    setTodoTitle('')
  }

  return (
    <div className='flex justify-center'>
        {/* <h3>Add Task:</h3> */}
        <form
            onSubmit={onAddTodoBtnClickHnd} 
            className='flex bg-white m-1 w-70 h-18 max-w-sm overflow-hidden shadow-lg'
            >
          <input
            title='Task Name'
            type='text'
            placeholder='new task'
            className='p-2'
            value={todoTitle}
            onChange={handleChange}
            ref={inputRef}
          />
          <button
            type='submit'
            className='p-2 -pr-2 text-blue'
          >Add</button>
        </form>
      </div>
  )
}

export default AddTodoForm