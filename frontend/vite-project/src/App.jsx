import { useState } from 'react';
import Login from './views/Login'
import {useSelector} from 'react-redux';


function App() {
  const {auth} = useSelector(state=>state)

  return (
    <>
    {!auth.loggedIn ?
     <Login/> : <h1>Hello</h1>
    }
    </>
  )
}

export default App
