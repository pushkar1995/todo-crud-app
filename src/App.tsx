import React,{ FC, useState } from 'react';
import { dummyTaskList, ITask, PageEnum } from '../src/Components/Interfaces'
import AddTodoForm from './Components/AddTodoForm';
import EditTodoForm from './Components/EditTodoForm';
import TodoList from './Components/TodoList';

const App: FC = () => {
  const [todoList, setTodoList] = useState(dummyTaskList as ITask[])
  const [shownPage, setShownPage] = useState(PageEnum.list)
  const [editTodo, setEditTodo] = useState({} as ITask)

  //Add Todo
  const addTodo = (data: ITask) :void => {
    //  setTodoList([...todoList, data]) 
    //One way
    setTodoList((todoList) => [...todoList, data])
    // window.alert("Todo added successfully")
  }

  const showListPage = () => {
    setShownPage(PageEnum.list)
  }

  //  Mark task as done or completed
  const toogleTodo = (id: Number) => {
    // let newTodo = todoList.map( todo => {
    //   if( todo.id === id){
    //     return {...todo, isCompleted: !todo.isCompleted}
    //   }
    //   return todo;
    // })
    // setTodoList(newTodo)
    setTodoList(todoList.map(todo => ({
     ...todo,
     isCompleted: todo.id === id ? !todo.isCompleted : todo.isCompleted
    })))
  }

  //TODO Delete
  // const deleteTodo = (taskNameToDelete: String): void => {
  //   // console.log('deleted')
  //   setTodoList(todoList.filter((task) => {
  //     return task.taskTitle !== taskNameToDelete
  //   }))
  // }

  // const deleteTodo = (id: Number): void => {
  //   let tempList = todoList.filter( task => task.id !== id)
  //   setTodoList(tempList)
  // }

  const deleteTodo = (id: Number) => {
    setTodoList(todoList.filter( (task) => {
      return task.id !== id
    }))
  }

  // Edit ToDo 
  const editTodoData = (data: ITask) => {
    setShownPage(PageEnum.edit)
    setEditTodo(data)
  }

  // Update Todo
  // const updateTodo = (data: ITask) => {
  //   const filteredData =  todoList.filter(todo => todo.id === data.id)[0]
  //   const indexOfRecord = todoList.indexOf(filteredData)
  //   const tempData = [...todoList]
  //   tempData[indexOfRecord] = data
  //   setTodoList(tempData)
  // }

  const updateTodo = (data: ITask) => {
    // let newTodo = todoList.map( todo => {
    //   if( todo.id === data.id){
    //     return {...todo, todoName: data.taskTitle}
    //   }
    //   return todo;
    // })
    // setTodoList(newTodo)

    setTodoList(todoList.map(todo => ({
      ...todo,
      taskTitle: todo.id === data.id ? data.taskTitle: todo.taskTitle
    })))
    
    // setTodoList(todoList.map(todo => (
    //   todo.id === data.id
    //     ? { ...todo, taskTitle: data.taskTitle}
    //     : todo
    // )))
  }

  //To Clear to do List All Items at Once
  const clearAllTodoListItems = () => {
    setTodoList([])
  }

  return (
    <div className="bg-pinkyred">
      <div className='flex pt-3 justify-center'>
        <h3 className='font-bold text-white'>TO-DO LIST</h3>
      </div>
      <section>
        <AddTodoForm
            onAddTodoClickHnd={addTodo}
          />
        <div className='flex justify-center'>
          <div className='bg-white m-5 w-60 h-60 max-w-sm overflow-hidden shadow-lg'>
              <TodoList
                todoArray={todoList} 
                onDeleteClickHnd={deleteTodo}
                onEdit = {editTodoData}
                toggleCompletedTodo={toogleTodo}
            />
            
            {todoList.length>=1 && 
                  <footer className='p-1 mr-3 flex justify-end'>
                  <button
                    title='Clear List'
                    className='text-pinkyred'
                    onClick={clearAllTodoListItems}
                  >Clear</button>
                </footer>
            }
          </div>
        </div>
        {shownPage === PageEnum.edit && (
          <EditTodoForm 
            currentData={editTodo}
            onUpdateClickHnd={updateTodo}
            toClearEditFieldHnd={showListPage}
          />
        )}
      </section>
    </div>
  );
}

export default App;
