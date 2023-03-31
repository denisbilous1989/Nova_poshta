import { Link } from 'react-router-dom'

import './styles.scss';

const Header = () => (
    <header>
      <div className="container">
        <nav className='navigation'>
            <ul className='menu'>
              {/* <li className='menu__item'><button className='menu__btn menu__btn--ttn'>Перевірити ТТН</button></li> */}
              <li className='menu__item'><Link to='/ttn' className='menu__btn menu__btn--ttn'>Перевірити ТТН</Link></li>
              <li className='menu__item'><Link to='/branches' className='menu__btn menu__btn--branches'>Список відділень</Link></li>
              {/* <li className='menu__item'><button className='menu__btn menu__btn--branches'>Список відділень</button></li> */}
            </ul>
        </nav>
      </div>
    </header>
  );


export default Header;