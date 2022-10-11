import React from 'react'
import YaInput from "../components/YaInput";
import YaButton from '../components/YaButton';
function Login() {

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className='md:w-1/4'>
        <YaInput placeholder='emailkamu@gmail.com' type='email' name='Email' />
        <YaInput placeholder='*******' type='password' name='Password' />
        <YaButton name="Masuk" type="submit"/>
      </form>
    </div>
  )
}

export default Login