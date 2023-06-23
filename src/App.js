import {useEffect} from 'react';
import {useDispatch } from 'react-redux';
import { setUsers } from './Components/Store/userSlice';
import { dummyData } from './Components/Store/_base';
import { BrowserRouter } from "react-router-dom"
import Routing from './Components/Routing';

function App() {
  const dispatch = useDispatch() 

  useEffect(()=>{
    dispatch(setUsers(dummyData))
  })

  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
