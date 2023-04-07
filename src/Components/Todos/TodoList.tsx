import React, { ChangeEvent } from 'react'
import { AiTwotoneEdit } from "react-icons/ai"
import { ITask } from '../Interfaces'

interface TodoListProps {
  todoArray: ITask[],
  onDeleteClickHnd(id: Number): any,
  onEdit: (data: ITask) => void
  // toggleCompletedTodo(checked: boolean, id: Number) :any
  toggleCompletedTodo: any
}

const TodoList = (props: TodoListProps) => {
  const { todoArray, onDeleteClickHnd, onEdit, toggleCompletedTodo } = props

  const handleTodoCheckUnCheck = (id: Number) => {
    toggleCompletedTodo(id)
  }
 
  return (
    <div className='p-1'>
      <div className='flex p-2'>
        <ul>
          {todoArray.map((task) => {
            console.log(task)
            return (
              <div>
                <li>
                  <button
                    type='button'
                    title='Delete'
                    className='pr-2 text-pinkyred'
                    onClick={() => onDeleteClickHnd(task.id)} 
                  >X</button>
                      <input
                        // key={task.id}
                        title='Completed/Not Completed'
                        type='checkbox' 
                        className='mr-1'
                        onChange={() => handleTodoCheckUnCheck(task.id)}
                      />
                      <label
                        title='Task Name'
                        className={`${task.isCompleted ? 'line-through opacity-30' : ''}`}
                      >
                          {task.taskTitle}
                      </label>
                        {task.isCompleted ? null : (
                          <button
                              title='Edit'
                              type='button'
                              className='ml-2'
                              onClick={() => onEdit(task)}
                          >
                            <AiTwotoneEdit />
                          </button>
                        )}
                  </li>
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