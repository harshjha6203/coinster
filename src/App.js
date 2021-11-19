import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadCrypto from './Pages/LoadCrypto';
import LoadExchange from './Pages/LoadExchange';
import Development from './Pages/Development';

const App = () => {
    return (
        <> 
            <Routes>
              <Route path='/' element={<LoadCrypto/>}/>
              <Route path='/exchanges' element={<LoadExchange/>}/>
              <Route path='/development' element={<Development/>}/>
            </Routes>
        </>
    )
}

export default App
