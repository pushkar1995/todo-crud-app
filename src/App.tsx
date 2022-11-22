import React,{FC, useState, ChangeEvent } from 'react';
import { dummyTaskList, ITask } from '../src/Components/Interfaces'
import AddTodoForm from './Components/AddToDoForm';
import TodoList from './Components/TodoList';

const App: FC = () => {
  const [todoList, setTodoList] = useState(dummyTaskList as ITask[])

  //Add Todo
  const addTodo = (data: ITask) => {
     setTodoList([...todoList, data])
  }

  const completedTodoHandler = (data: ITask) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === data.id) {
          // return { ...item, completed: !item.completed}
          return { ...item, completed: true}
        } else {
          return item
        }
      })
    )
  }

  //TODO Delete
  const deleteTodo = (data: ITask) => {
    const indexToDelete = todoList.indexOf(data)
    const tempList = [...todoList]
    tempList.splice(indexToDelete, 1)
    setTodoList(tempList)
  }

  //To Clear to do List at Once
  const clearAllTodoListItems = () => {
    setTodoList
  }

  return (
    <div className="bg-pinkyred">
      <div className='flex pt-3 justify-center'>
        <h3 className='font-bold text-white'>TO-DO LIST</h3>
      </div>
        <AddTodoForm
          onAddTodoClickHnd={addTodo}
        />
      <div className='flex justify-center'>
        <div className='bg-white m-5 w-60 h-60 max-w-sm overflow-hidden shadow-lg'>
            <TodoList
                list={todoList} 
                onDeleteClickHnd={deleteTodo}
                completedTodo={completedTodoHandler}
                // completed={completed}
            />
          <footer className='p-1 mr-3 flex justify-end'>
            <button
              className='text-pinkyred'
              onClick={clearAllTodoListItems}
            >Clear</button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
