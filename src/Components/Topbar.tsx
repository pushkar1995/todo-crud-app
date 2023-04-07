import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

type TopbarPropTypes = {
    showRegisterPageOnClick: () => void
    showTodoPageOnClick: () => void
}

const Topbar = (props: TopbarPropTypes) => {
    const { showRegisterPageOnClick, showTodoPageOnClick } = props
  return (
    <div className='flex flex-row justify-between w-full shadow bg-white h-20'>
        <div className='px-4 p-4'>
            <h1>PG APP</h1>
            <ul className='p-2 px-6'>
                <button 
                    type='button'
                    onClick={showRegisterPageOnClick} 
                    className='px-3 text-grey font-semibold hover:underline'>Register</button>
                <button 
                    type='button' 
                    onClick={showTodoPageOnClick}
                    className='px-3 ml-3 text-grey font-semibold hover:underline'>ToDos</button>
            </ul>
        </div>
        <div className='grid grid-cols-2 py-5 -mr-12'>
            <div className='pr-8 text-end'>
                <div className='text-sm font-bold'>John Doe</div>
                <div className='text-sm text-grey'>Project Manager</div>
            </div>
            <div className='mt-3'>
                <FaUserAlt />
            </div>
        </div>
    </div>
  )
}

export default Topbar   