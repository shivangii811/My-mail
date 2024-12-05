import React from 'react'
import { useSelector } from 'react-redux'
import Header from './MyComponent/Header'
import Sidebar from './MyComponent/Sidebar'
import EmailView from './MyComponent/EmailView'
import { selectSendMsgIsOpen } from './redux/mailSlice'
import Compose from './MyComponent/Compose'
import './app.css'

const App = () => {
  const isMsgOpen =useSelector(selectSendMsgIsOpen);
  return (
    <div className='App'>
        <Header/>
       <div className='sidebar__body'>
         <Sidebar/>
         <EmailView/>
       </div>
       {isMsgOpen && <Compose/>}
       
     </div>
  )
}

export default App
