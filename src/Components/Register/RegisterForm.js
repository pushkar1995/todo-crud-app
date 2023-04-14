import React, { useRef, useState } from 'react'
import FormInput from '../FormInput/FormInput'


const RegisterForm = () => {
  // const [username, setUsername] = useState('')
  // console.log(username)
  // console.log('re-rendered!!')

  // const usernameRef = useRef()
  // console.log('re-rendered!!')

  const [ values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: 'Username should be 3-16 characters and shouldnt include any special characters',
      label: 'Username:',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid Email Address!',
      label: 'Email:',
      required: true
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      errorMessage: '',
      label: 'Birthday:',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Password should be 8-20 characters and should include at least 1 letter, 1 number and 1 special character!',
      label: 'Password:',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Password doesnt match!',
      label: 'Confirm Password:',
      pattern: values.password,
      required: true
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
  }

  const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value})
  }

  console.log(values)
  return (
    <div className='flex flex-col p-4 m-4 border rounded bg-grey-light'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col'
       >
        <div className='flex justify-center'>
          <h1 className='text-lg font-semibold text-pinkyred'>Register Page</h1>
        </div>
        {/* <FormInput 
          placeholder="Username"
          name="username"
        /> */}
        {inputs.map((input) => (
          <FormInput 
            key={input.id} {...input} 
            value={values[input.name]} 
            onChange={onChange}
            />
        ))}
       
        {/* <div className='flex justify-center '> */}
          <button className='p-2 my-6 border rounded bg-slate-400 cursor-pointer'>Submit</button>
        {/* </div> */}
      </form>
    </div>
  )
}

export default RegisterForm