import { Link } from 'react-router-dom';

import Btn from '../../shared/Btn'

import './styles.scss'

const Error = () => {
  return (
    <div className="container">
      <div className="error">
        <h2 className='error__title'>Error 404</h2>
        <p className='error__text'>File Not Found</p>
        <Link to='/'><Btn text='Back to Home' className='error__btn'/></Link>
      </div>
    </div>

    

  )
}

export default Error;