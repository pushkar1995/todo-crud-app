import React, { useRef, useState } from 'react'
import FormInput from '../FormInput/FormInput'


const RegisterForm = () => {
  // const [username, setUsername] = useState('')
  // console.log(username)
  // console.log('re-rendered!!')
  const usernameRef = useRef()
  console.log('re-rendered!!')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(usernameRef)
  }

  return (
    <div className='flex flex-col p-4'>
      <form onSubmit={handleSubmit}>
        RegisterForm
        <FormInput />
        <FormInput 
          placeholder="Username"
          refer={usernameRef}
        />
        <FormInput placeholder="Email" />
        <FormInput placeholder='Full Name'/>
        <FormInput placeholder='SomeThing Else'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterForm