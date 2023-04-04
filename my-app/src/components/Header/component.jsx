import { NavLink } from 'react-router-dom'

import './styles.scss';

const Header = () => (
    <header>
      <div className="container">
        <nav className='navigation'>
            <ul className='menu'>
              <li className='menu__item'><NavLink to='ttn' className={({isActive}) => isActive ? 'menu__btn dark' : 'menu__btn light'}>Перевірити ТТН</NavLink></li>
              <li className='menu__item'><NavLink to='branches' className={({isActive}) => isActive ? 'menu__btn dark' : 'menu__btn light'}>Список відділень</NavLink></li>
            </ul>
        </nav>
      </div>
    </header>
  );


export default Header;