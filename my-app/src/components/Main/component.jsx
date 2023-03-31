import Btn from '../shared/Btn/component';
import TtnNumber from '../Pages/Ttn-number'
import Branches from '../Pages/Branches'
import { Routes, Route, Outlet } from 'react-router-dom'

import './styles.scss';

const Main = () => {
  return (
    <main>

    <Routes>
        <Route path='ttn' element={<TtnNumber/>}/>
        <Route path='branches' element={<Branches/>}/>
    </Routes>
    </main>
  );
}

export default Main;