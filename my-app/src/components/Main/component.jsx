import TtnNumber from '../Pages/Ttn-number'
import Branches from '../Pages/Branches'
import Home from '../Pages/Home'
import { Routes, Route } from 'react-router-dom'

import './styles.scss';

const Main = () => {
  return (
    <main>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='ttn' element={<TtnNumber/>}/>
          <Route path='branches' element={<Branches/>}/>
      </Routes>
    </main>
  );
}

export default Main;