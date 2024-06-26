
import './App.css'
import Landingpage from './Pages/Landingpage'

import Watchhistory from './Pages/Watchhistory'
import { Route, Routes } from 'react-router-dom'

import Foot from './Pages/components/Foot'
import Home from './Pages/Home'

import Header from './Pages/components/Header'



function App() {
 

  return (
    <>
      <Header/>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/watchhistory" element={<Watchhistory/>}/>
    </Routes>
    <Foot/>
     
    </>
  )
}

export default App