import React, { useState }  from 'react'
import YaInput from "../components/YaInput";
import YaButton from '../components/YaButton';
import YaNavLink from '../components/YaNavLink';
import useForm from '../hooks/useForm';
import axios from 'axios';



function Register() {  

  
  const registerForm =async (e, values) => {
    e.preventDefault()
    try {
      const result = await axios.post('http://localhost:3000/users', {
          email: values.email,
          fullname: values.fullname,
          password: values.password,
      });
      console.log(result)
      } catch (error) {
      if (error.response) {
          alert(error.response.data.msg);
      }
    }
  }

  const [disabled, setDisabled] = useState(true)

  const validateForm = (values, errors) => {
    if(values.email && !errors.email && values.password && !errors.password  && values.fullname && !errors.fullname){
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }
  
  const {handleChange, values, errors, handleSubmit } = useForm(registerForm, validateForm);

  
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
          placeholder='Mochamad Hasan' 
          required={true} type='text' 
          name='fullname'
          errors={errors.fullname}
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
          <YaNavLink name="Sudah Memiliki akun ??" url="/login"/>
          <YaButton name="Masuk" type="submit" disabled={disabled}/>
        </div>
      </form>

    </div>
  )
}

export default Register