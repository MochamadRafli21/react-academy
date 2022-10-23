import React, { useState , useEffect}  from 'react'
import YaInput from "../components/YaInput";
import YaButton from '../components/YaButton';
import YaLink from '../components/YaTextLink';
import useForm from '../hooks/useForm';
import { useNavigate } from "react-router-dom";




function Forget() {  
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    console.log(token)
    if(token){
      navigate('/dashboard')
    }
  });
  
  const loginForm = () => {
    console.log("Form Values ", values);
  }

  const [disabled, setDisabled] = useState(true)

  const validateForm = (values, errors) => {
    if(values.email && !errors.email){
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
        <div className='flex space-x-4 justify-end'>
          <YaButton name="Submit" type="submit" disabled={disabled}/>
        </div>
        <div className='mt-4'>
          <YaLink name="Sudah ingat ? click disini" url="/login"/>
        </div>
      </form>

    </div>
  )
}

export default Forget