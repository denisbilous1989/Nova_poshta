import Btn from '../Btn'

import { useNavigate } from 'react-router-dom'
import { useState } from "react";



import './style.scss';



const Form = () => {

  const [searchingTtn, setSearchingTtn] = useState('');
  

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/ttn/${searchingTtn}`)
  }

  const handleChange = (e) => {
    setSearchingTtn(e.target.value)
  }


return (
  <form className='form' onSubmit={handleSubmit} >
  <input type='text' className='form__input' placeholder='00000000000000' value={searchingTtn} onChange={handleChange}/>
  <Btn 
    text='Get status TTN'
    className='form__btn orange'
  />
</form>
)
}

export default Form;