import { Outlet } from 'react-router-dom';
import Form from '../../shared/Form'


import './styles.scss'

const TtnNumber = () => {

  return (
    <div className="container">
      <Form />
      <Outlet />
    </div>
  )
}

export default TtnNumber;