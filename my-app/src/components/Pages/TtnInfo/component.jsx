import Form from '../../shared/Form'
import { useParams } from "react-router-dom"
import { useState } from "react";


import { KEY, URL } from '../../../constans'
import useGetData from '../../hooks/useGetData'

import './styles.scss'

const TtnInfo = () => {


  const { ttnNumber } = useParams()
  

//   const dataTtn = {
//       apiKey: KEY,
//       modelName: "TrackingDocument",
//       calledMethod: "getStatusDocuments",
//       methodProperties: {
//         Documents: [
//           {
//             DocumentNumber: ttnNumber,
//           }
//         ]
//       }
// }

 const { responseData, error, loading } = useGetData(ttnNumber)
 console.log('ttnNumber', ttnNumber);

console.log('responseData', responseData);
console.log('error', error);
console.log('loading', loading);

// 59000941037595
// 20400323092940

const { data } = responseData


  return (
    <>
    {error || responseData.success === false
          ? <p>Error</p>
          : ''}

          {responseData.length === 0 ? '' : (<div className="box">
      <div className="status">
        <p className='status__text'><span className='first-word'>Статус доставки: {data[0].Status}</span></p>
        <p className='status__text'><span className='first-word'>Відправлено: </span>{data[0].WarehouseSender}</p>
        <p className='status__text'><span className='first-word'>Отримано: </span>{data[0].WarehouseRecipient}</p>
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
    </div>)}
    
  </>
  )
}

export default TtnInfo;