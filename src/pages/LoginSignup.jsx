import React, { useState } from 'react'
import './CSS/Loginsignup.css'
  import 'react-toastify/dist/ReactToastify.css';
 import { ToastContainer, toast } from 'react-toastify';
const LoginSignup = () => {
  const [email,setEmail] = useState()
  const [name, setName] = useState();
  const [password,setPassword] = useState()
  const login = () => toast.success('you are Logged in now')
  const [allEntry,setAllEntry] = useState([])
  const submitForm = (e) =>{
    e.preventDefault()
    const newEntry = {name:name,email:email,password:password};
    setAllEntry([...allEntry,newEntry])
    console.log(allEntry);
  }
  return (
    <form action='' onSubmit={submitForm}>
      <div className='loginsignup'>
        <div className='container'>
          <div className='loginsignup-container'>
            <h1>Sign Up</h1>
            <div className='loginsignup-fields'>
              <input
                type='name'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={login} type='submit'>
              Continue
            </button>
            <p className='loginsignup-login'>
              Already have an account? <span>Login here</span>
            </p>
            <div className='loginsignup-agree'>
              <input type='checkbox' name='' id='' />
              <p>By continuing, i agree to use the terms of user & policy.</p>
            </div>
          </div>

          {allEntry.map((curr) => {
            return (
              <div className='new-ha' key={curr.id}>
                <p>{curr.name}</p>
                <p>{curr.email}</p>
                <p>{curr.password}</p>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer position='top-center' />
    </form>
  );
}

export default LoginSignup