import React, { useState } from 'react'
import Home from './components/Home';
import {Route,Routes} from 'react-router-dom';
import India from './components/partials/India';
import Uel from './components/partials/Uel';
import Ucl from './components/partials/Ucl';
import Clubinfo from './components/partials/Clubinfo';
import Friendlies from './components/partials/Friendlies';
import Hero from './components/partials/Hero';
import About from './components/partials/About';

function App(){
  return (
    <div className='bg-[#1F1E24]' w-screen h-screen>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/india' element={<India/>} />
      <Route path='/uel' element={<Uel/>} />
      <Route path='/ucl' element={<Ucl/>} />
      <Route path='/clubinfo' element={<Clubinfo/>} />
      <Route path='/friendlies' element={<Friendlies/>} />
      <Route path='/indiansportsnews' element={<Hero/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App;