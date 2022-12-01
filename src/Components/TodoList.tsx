import React, { ChangeEvent } from 'react'
import { AiTwotoneEdit } from "react-icons/ai"
import { ITask } from './Interfaces'

interface Props {
  list: ITask[],
  onDeleteClickHnd(taskNameToDelete: String): void,
  onEdit: (data: ITask) => void
  // toggleCompletedTodo(checked: boolean, id: Number) :any
  toggleCompletedTodo: any
}

const TodoList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit, toggleCompletedTodo } = props

  const handleTodoCheckUnCheck = (id: Number) => {
    toggleCompletedTodo(id)
  }
 
  return (
    <div className='p-1'>
      <div className='flex p-2'>
        <ul>
          {list.map((task) => {
            // console.log(task)

            return (
              <div>
                {/* <div className='flex'> */}
                <li>
                  <button
                    type='button'
                    className='pr-2 text-pinkyred'
                    onClick={() => onDeleteClickHnd(task.taskTitle)} 
                  >X</button>
                      <input
                        // key={task.id}
                        title='Completed/Not Completed'
                        type='checkbox' 
                        className='mr-1'
                        onChange={() => handleTodoCheckUnCheck(task.id)}
                        // checked={task.isCompleted}
                        // className={`${task.isCompleted ? 'line-through opacity-30' : ''}`}
                        // onClick={(e) => task.isCompleted ? handleTodoCheckUnCheck(e, task.id) : ''}
                      />
                    <label
                      className={`${task.isCompleted ? 'line-through opacity-30' : ''}`}
                    >
                      {task.taskTitle}
                      <button
                        type='button'
                        className='ml-2'
                        onClick={() => onEdit(task)}
                      >
                        <AiTwotoneEdit />
                      </button>
                    </label>
                  </li>
                {/* </div> */}
                <hr className="w-40 border-grey-300" />
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TodoList


{/* <div className='flex bg-white m-10 w-60 h-60 max-w-sm overflow-hidden shadow-lg'> */}