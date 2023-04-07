import React, { useState, ChangeEvent } from 'react'
import { ITask  } from '../Interfaces'

type Props = {
    currentData: ITask,
    onUpdateClickHnd: (data: ITask) => void,
    toClearEditFieldHnd: () => void
}

const EditTodoForm = (props: Props) => {
    const { currentData, onUpdateClickHnd, toClearEditFieldHnd } = props
    const [ updatedTodoTitle, setUpdatedTodoTitle ] = useState(currentData.taskTitle)

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setUpdatedTodoTitle(e.target.value)
      }
    
    const onEditTodoBtnClickHnd = (e: any) => {
        e.preventDefault()
        const updatedData: ITask = {
            id: currentData.id,
            taskTitle: updatedTodoTitle,
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
        placeholder='update todo'
        className='p-2'
        value={updatedTodoTitle}
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

export default EditTodoForm