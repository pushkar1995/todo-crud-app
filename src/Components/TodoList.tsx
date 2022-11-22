import React from 'react'
import { ITask } from './Interfaces'

interface Props {
  list: ITask[],
  onDeleteClickHnd(data: ITask): void,
  // completedTodo(data: ITask): void, 
}

const TodoList = (props: Props) => {
  const { list, onDeleteClickHnd } = props
 
  return (
    <div className='p-1'>
      <div className='flex p-2'>
        <table>
          {list.map((task) => {
            console.log(task)

            return (
              <div key={task.id}>
                <div className={`flex ${task.completed ? 'line-through opacity-30' : ''}`}>
                  <button
                    type='button'
                    className='pr-2 text-pinkyred'
                    onClick={() => onDeleteClickHnd(task)}
                  >X</button>
                      <input
                        title='Completed/Not Completed'
                        type='checkbox' 
                        className='mr-1'
                        // className={`list ${task.completed ? 'complete' : ''}`}
                        // onClick={(e) => markDone(task.id)}
                      />
                <tr>
                <td>
                  {task.taskTitle}
                </td>
                </tr>
                </div>
                <hr className="w-40 border-grey-300" />
              </div>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default TodoList


{/* <div className='flex bg-white m-10 w-60 h-60 max-w-sm overflow-hidden shadow-lg'> */}