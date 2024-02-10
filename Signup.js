import React from 'react'
import { Link } from 'react-router-dom'
import Validation from './SignupValidation';
import  { useState } from 'react';

function Signup() {

  const [values, setvalues] = useState({
    name: '',
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
        <h2>Sign-Up </h2>
        <form action="" onSubmit={handleInput}>
        <div className='mb-3'>
  <label htmlfor="name"><strong>Name</strong></label>
  <input type="text" placeholder='register your name' name='name'  onChange={handleInput} className='from-control rounded-0'/>
  {errors.name && <span className='test-danger'> {errors.name}</span>}
</div>


<div className='mb-3'>
  <label htmlfor="email"><strong>Email</strong></label>
  <input type="email" placeholder='Enter your email' name='email' onChange={handleInput}  className='from-control rounded-0'/>
  {errors.email && <span className='test-danger'> {errors.email}</span>}
</div>

<div className='mb-3'>
  <label htmlfor="passwprd"><strong>Password</strong></label>
  <input type="password" placeholder='Enter your Password' name='password' onChange={handleInput} className='from-control rounded-0' />
  {errors.password && <span className='test-danger'> {errors.password}</span>}
</div>
<div className='mb-3'>
  <label htmlfor="dob"><strong>Dateofbirth</strong></label>
  <input type="date" placeholder='Enter your dob'  className='from-control rounded-0'/>
</div>
<button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
<p>You are agree to our terms and policies</p>
<Link to="/" className='btn btn-default border w-100 rounded-0 text-decoration-none'>Log In</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup
