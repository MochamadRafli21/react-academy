import React, { useState, useEffect }  from 'react'
import YaInput from "../components/YaInput";
import YaButton from '../components/YaButton';
import YaLink from '../components/YaTextLink';
import YaNavLink from '../components/YaNavLink';
import useForm from '../hooks/useForm';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Login() { 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if(token){
      navigate('/dashboard')
    }
  });
  
  const loginForm = async(e, values) => {
    e.preventDefault()
    try {
      const result = await axios.post('http://localhost:3000/auth/login', {
          email: values.email,
          fullname: values.fullname,
          password: values.password,
      });
      localStorage.setItem("access_token", "Bearer "+result.data.access_token);
      navigate('/dashboard')
      } catch (error) {
      if (error.response) {
          alert(error.response.data.msg);
      }
    }
  }

  const [disabled, setDisabled] = useState(true)

  const validateForm = (values, errors) => {
    if(values.email && !errors.email && values.password && !errors.password){
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }
  
  const {handleChange, values, errors, handleSubmit } = useForm(loginForm, validateForm);

  
  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className='md:w-1/4 m-4'>
        <YaInput 
          placeholder='emailkamu@gmail.com' 
          required={true} type='email' 
          name='email'
          errors={errors.email}
          onChange={handleChange} 
        />
        <YaInput 
          placeholder='*******' 
          type='password' 
          required={true}
          errors={errors.password}
          name='password' 
          onChange={handleChange}
        />
        <div className='flex space-x-4 justify-end'>
          <YaNavLink name="Register" url="/register"/>
          <YaButton name="Masuk" type="submit" disabled={disabled}/>
        </div>
        <div className='mt-4'>
          <YaLink name="Lupa password ? click disini" url="/forget"/>
        </div>
      </form>

    </div>
  )
}

export default Login