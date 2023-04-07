import React from 'react'
import './formInput.css'

// type FormInputPropTypes = {
//     placeholder: () => any
// }

// const FormInput = (props: FormInputPropTypes) => {
const FormInput = (props) => {
    // const { placeholder } = props
  return (
    <div className='my-4'>
        {/* <label>Username</label> */}
        <input
          className='p-2 rounded'   
          placeholder={props.placeholder}
          ref={props.refer}
          // onChange={(e) => props.setUsername(e.target.value)}
        />
    </div>
  )
}

export default FormInput