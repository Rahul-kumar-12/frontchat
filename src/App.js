import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Join from './Component/Join/Join';
import Chat from './Component/Chat/Chat';
import SignUp from './Component/Register/SignUp';
import Login from './Component/Register/Login'
import Logout from './Component/Register/Logout';
// import Privatecomponent from './Component/Privatecomponent';
import Navbar from './Component/Navbar/Navbar';
import Privatecomponent from './Component/Privatecomponent';

const App = () => {

  return (
    <>
 <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route element={<Privatecomponent/>}>
       <Route path="/join" element={<Join />} />
       <Route path="/chat" element={<Chat />} />
       <Route path='/logout' element={<Logout />} />
       </Route>

        <Route path="/" element={<Login />} />
         <Route exact path="/signup" element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App