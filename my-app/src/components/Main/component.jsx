import { Routes, Route } from 'react-router-dom'

import TtnNumber from '../Pages/Ttn-number'
import Branches from '../Pages/Branches'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import TtnInfo from '../Pages/TtnInfo'

import './styles.scss';

const Main = () => {
  return (
    <main>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='ttn/' element={<TtnNumber/>} >
             <Route path=':ttnNumber' element={<TtnInfo/>} />
          </Route>
          <Route path='branches' element={<Branches/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
  );
}

export default Main;