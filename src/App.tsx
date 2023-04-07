import React,{ FC, useState } from 'react';
import { dummyTaskList, ITask, PageEnum } from '../src/Components/Interfaces'
import Topbar from './Components/Topbar';
import RegisterPage from './Components/Register/RegisterPage';
import TodoPage from './Components/Todos/TodoPage';


const App: FC = () => {
  const [shownPage, setShownPage] = useState(PageEnum.registerpage)
 
  // For Page Routes
  const showRegisterPageHandler = () => {
    setShownPage(PageEnum.registerpage)
  }

  const showTodoPageHandler = () => {
    setShownPage(PageEnum.todopage)
  }

  return (
    <div className="bg-grey">
     <Topbar 
        showRegisterPageOnClick = {showRegisterPageHandler}
        showTodoPageOnClick ={showTodoPageHandler}
     />
      <section> 
        {shownPage === PageEnum.registerpage && (
          // <div className="mx-10 col-span-2 bg-white rounded overflow-hidden shadow">
            <RegisterPage />
          // </div>
        )}
        {shownPage === PageEnum.todopage && (
          // <div className="mx-10 col-span-2 bg-white rounded overflow-hidden shadow">
            <TodoPage/>
          // </div>
        )}
      </section>
    </div>
  );
}

export default App;
