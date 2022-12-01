import React, { useState, ChangeEvent } from 'react'
import { ITask  } from './Interfaces'

type Props = {
    data: ITask,
    onUpdateClickHnd: (data: ITask) => void,
    toClearEditFieldHnd: () => void
}

const EditTodo = (props: Props) => {
    const { data, onUpdateClickHnd, toClearEditFieldHnd } = props
    const [ todoTitle, setTodoTitle ] = useState(data.taskTitle)

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTodoTitle(e.target.value)
      }
    
    const onEditTodoBtnClickHnd = (e: any) => {
        e.preventDefault()
        const updatedData: ITask = {
            id: data.id,
            taskTitle: todoTitle,
            isCompleted: false
        }
        onUpdateClickHnd(updatedData)
        toClearEditFieldHnd()
    }
  return (
    <div className='flex justify-center'>
    {/* <h3>Update TO-DO:</h3> */}
    <form
        onSubmit={onEditTodoBtnClickHnd} 
        className='flex bg-white m-1 w-70 h-18 max-w-sm overflow-hidden shadow-lg'
        >
      <input
        type='text'
        placeholder='new task'
        className='p-2'
        value={todoTitle}
        onChange={handleChange}
        // ref={inputRef}
      />
      <button
        type='submit'
        className='p-2 -pr-2 text-blue'
      >Update Todo</button>
    </form>
  </div>
  )
}

export default EditTodo