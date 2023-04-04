import './styles.scss'

const Branches = () => {
  return (
    <div className="container">
      <div className="branches">
        <ul className='branches__list'>
          <li className='branches__item'>
            <h3>Отделение 1</h3>
            <p><span className='first-word'>Адреса: </span> вул разумовська</p>
            <p><span className='first-word'>Час роботи: </span> 9:00 - 21:00</p>
          </li>
          <li className='branches__item'>
            <h3>Отделение 2</h3>
            <p><span className='first-word'>Адреса: </span> вул разумовська</p>
            <p><span className='first-word'>Час роботи: </span> 9:00 - 21:00</p>
          </li>
          <li className='branches__item'>
            <h3>Отделение 3</h3>
            <p><span className='first-word'>Адреса: </span> вул разумовська</p>
            <p><span className='first-word'>Час роботи: </span> 9:00 - 21:00</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Branches;