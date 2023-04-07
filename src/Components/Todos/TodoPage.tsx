import React, {useState} from 'react'
import { dummyTaskList, ITask, PageEnum } from '../Interfaces'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
import EditTodoForm from './EditTodoForm'

const TodoPage = () => {
    const [todoList, setTodoList] = useState(dummyTaskList as ITask[])
    const [shownComponent, setShownComponent] = useState(PageEnum.list)
    const [editTodo, setEditTodo] = useState({} as ITask)

      //Add Todo
    const addTodo = (data: ITask) :void => {
        //  setTodoList([...todoList, data]) 
        //One way
        setTodoList((todoList) => [...todoList, data])
        // window.alert("Todo added successfully")
    }

    const showListPage = () => {
        setShownComponent(PageEnum.list)
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
        setShownComponent(PageEnum.edit)
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
    <div>
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
        {shownComponent === PageEnum.edit && (
          <EditTodoForm 
            currentData={editTodo}
            onUpdateClickHnd={updateTodo}
            toClearEditFieldHnd={showListPage}
          />
        )}
    </div>
  )
}

export default TodoPage