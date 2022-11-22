import React from 'react'
import { ITask } from './Interfaces'

interface Props {
  list: ITask[],
  onDeleteClickHnd(data: ITask): void,
  completedTodo(data: ITask): void, 
}

const TodoList = (props: Props) => {
  const { list, onDeleteClickHnd, completedTodo } = props
 
  return (
    <div className='p-1'>
      <div className='flex p-2'>
        <table>
          {list.map((task) => {
            console.log(task)

            return (
              <div>
                <div className='flex'>
                {/* <div style={{ backgroundColor: completed ? 'green' : 'white'}}> */}
                  <button
                    type='button'
                    className='pr-2 text-pinkyred'
                    onClick={() => onDeleteClickHnd(task)}
                  >X</button>
                      <input
                        type='checkbox' 
                        className='mr-1'
                        // className={`list ${task.completed ? 'complete' : ''}`}
                        onClick={() => completedTodo(task)}
                      />
                <tr key={task.id}>
                <td>
                  {task.taskTitle}
                </td>
                </tr>
                {/* </div> */}
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