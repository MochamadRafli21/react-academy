import React, { useState, useEffect }  from 'react'
import YaInput from "../components/YaInput";
import YaButton from '../components/YaButton';
import YaLink from '../components/YaTextLink';
import YaNavLink from '../components/YaNavLink';
import useForm from '../hooks/useForm';



function Login() {  
  
  const loginForm = () => {
    console.log("Form Values ", values);
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