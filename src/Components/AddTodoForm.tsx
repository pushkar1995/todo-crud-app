import React, { FC, useState } from 'react'

const AddTodoForm: FC = () => {
    const [task, setTask] = useState<string>('')

    const onNewTaskChangeHandler = (e: any) => {
        setTask(e.target.value)
    }

  return ( 
    <div>
       <h1>Add Todo Form</h1>
        <form>
                <div>
                    <input
                        type='text'
                        className=''
                        placeholder='add new task'
                        value={task}
                        onChange={onNewTaskChangeHandler}
                    />
                </div>
                <div>
                    <input
                        type='submit'
                        className=''
                        value='Add Task' 
                    />
                </div>
        </form> 
    </div>
  )
}

export default AddTodoForm