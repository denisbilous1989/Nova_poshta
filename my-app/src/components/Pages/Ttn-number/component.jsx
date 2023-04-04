import Btn from '../../shared/Btn'

import { KEY, URL } from '../../../constans'


import { useEffect } from "react"

import './styles.scss'

const TtnNumber = () => {



  useEffect(() => {
    fetch(URL, {
       method: 'POST',
        body: {
          "apiKey": KEY,
          "modelName": "TrackingDocument",
          "calledMethod": "getStatusDocuments",
          "methodProperties": {
            "Documents": [
              {
                "DocumentNumber": "59000950733809",
                "Phone": ""
              }
            ]
          }
        },
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }

    }).then(response => response.json()).
    then(result => console.log(result, 'result'))
  })


  return (
    <div className="container">
      <form className='form'>
        <input type='text' className='form__input' placeholder='00000000000000'/>
        <Btn 
          text='Get status TTN'
          className='form__btn orange'
        />
      </form>

      <div className="box">
        <div className="status">
          <p className='status__text'><span className='first-word'>Статус доставки: </span>Одержано</p>
          <p className='status__text'><span className='first-word'>Відправлено: </span>Відділення №17 (до 30 кг): вул. Розумовська, 29</p>
          <p className='status__text'><span className='first-word'>Отримано: </span>Відділення №13 (до 30 кг): просп. Гагаріна, 43</p>
        </div>
        <div className="history">
          <h3 className='history__title'>Історія</h3>
          <ul className='history__list'>
            <li className='history__item'><span className='first-word'>20400048799002</span></li>
            <li className='history__item'><span className='first-word'>20400048799003</span></li>
            <li className='history__item'><span className='first-word'>20400048799004</span></li>
            <li className='history__item'><span className='first-word'>20400048799005</span></li>
            <li className='history__item'><span className='first-word'>20400048799005</span></li>
            <li className='history__item'><span className='first-word'>20400048799005</span></li>
            <li className='history__item'><span className='first-word'>20400048799005</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TtnNumber;