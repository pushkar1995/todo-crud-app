import React,{ FC, useState } from 'react';
import { dummyTaskList, ITask, PageEnum } from '../src/Components/Interfaces'
import AddTodoForm from './Components/AddToDoForm';
import EditTodo from './Components/EditTodo';
import TodoList from './Components/TodoList';

const App: FC = () => {
  const [todoList, setTodoList] = useState(dummyTaskList as ITask[])
  const [shownPage, setShownPage] = useState(PageEnum.list)
  const [dataToEdit, setDataToEdit] = useState({} as ITask)

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
    let newTodo = todoList.map( todo => {
      if( todo.id === id){
        return {...todo, isCompleted: !todo.isCompleted}
      }
      return todo;
    })
    setTodoList(newTodo)
  }

  //TODO Delete
  const deleteTodo = (taskNameToDelete: String): void => {
    // console.log('deleted')
    setTodoList(todoList.filter((task) => {
      return task.taskTitle != taskNameToDelete
    }))
  }

  // Edit ToDo 
  const editTodoData = (data: ITask) => {
    setShownPage(PageEnum.edit)
    setDataToEdit(data)
  }

  const updateData = (data: ITask) => {
    const filteredData =  todoList.filter(x => x.id === data.id)[0]
    const indexOfRecord = todoList.indexOf(filteredData)
    const tempData = [...todoList]
    tempData[indexOfRecord] = data
    setTodoList(tempData)
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
                list={todoList} 
                onDeleteClickHnd={deleteTodo}
                onEdit = {editTodoData}
                toggleCompletedTodo={toogleTodo}
            />
            
            {todoList.length>=1 && 
                  <footer className='p-1 mr-3 flex justify-end'>
                  <button
                    className='text-pinkyred'
                    onClick={clearAllTodoListItems}
                  >Clear</button>
                </footer>
            }
          </div>
        </div>
        {shownPage === PageEnum.edit && (
          <EditTodo 
            data={dataToEdit}
            onUpdateClickHnd={updateData}
            toClearEditFieldHnd={showListPage}
          />
        )}
      </section>
    </div>
  );
}

export default App;
