import React from 'react'
import { useSelector } from 'react-redux'
import Header from './MyComponent/Header'
import Sidebar from './MyComponent/Sidebar'
// import { userSelector } from 'react-redux'
import EmailView from './MyComponent/EmailView'
import { selectSendMsgIsOpen } from './redux/mailSlice'
import Compose from './MyComponent/Compose'
import './app.css'
import { Login } from '@mui/icons-material'
import {
  BrowserRouter as Router,
  // Switch,
  // Route
} from "react-router-dom"
import { selectUser } from './redux/userSlice'

const App = () => {
  const isMsgOpen =useSelector(selectSendMsgIsOpen);

  const user = null;
  console.log(isMsgOpen);
  return (
    <Router>
     {user && (
        <div className='App'>
        <Header/>
        <div className='sidebar__body'>
         <Sidebar/>
         <EmailView/>
       </div>

       {isMsgOpen && <Compose/>}
       
     </div>
    )} : {
      <Login/>
    }
    </Router>
  );
}

export default App
