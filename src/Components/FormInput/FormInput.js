import React, { useState } from 'react'
import './formInput.css'

// type FormInputPropTypes = {
//     placeholder: () => any
// }

// const FormInput = (props: FormInputPropTypes) => {
const FormInput = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputProps } = props

  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
    <div className='flex flex-col w-64 my-2'>
        <label className='py-2 text-grey'>{label}</label>
        <input
          className='p-2 rounded'   
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          onFocus={()=> inputProps.name === 'confirmPassword' && setFocused(true)}
          // ref={props.refer}
          // onChange={(e) => props.setUsername(e.target.value)}
        />
        <span 
          className='hidden p-1 text-pinkyred'
          // className={`${invalid ? 'p-1 text-pinkyred block' : 'hidden'}`}
        >{errorMessage}</span>
    </div>
  )
}

export default FormInput