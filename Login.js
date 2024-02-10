import React from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';
import  { useState } from 'react';

// Your component code here


function Login() {
    const [values, setvalues] = useState({
        email: '',
        password: ''
    })
const [errors, setErrors] = useState({})
const handleInput =(event) => {
    setvalues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}


const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(Validation(values));
}



  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
        
<div className='mb-3'>
  <label htmlfor="email"><strong>Email</strong></label>
  <input type="email" placeholder='Enter your email' name='email' onChange={handleInput} className='from-control rounded-0'/>
  {errors.email && <span className='test-danger'> {errors.email}</span>}
</div>

<div className='mb-3'>
  <label htmlfor="passwprd"><strong>Password</strong></label>
  <input type="password" placeholder='Enter your Password' name='password'  onChange={handleInput}  className='from-control rounded-0' />
  {errors.password && <span className='test-danger'> {errors.password}</span>}
</div>

<button type='submit' className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
<p>You are agree to our terms and policies</p>
<Link to="/signup" className='btn btn-default border w-100 rounded-0 text-decoration-none'>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
