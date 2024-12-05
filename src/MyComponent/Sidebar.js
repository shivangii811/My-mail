import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import '../css/sidebar.css'
import SiderbarList from './SiderbarList';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch } from 'react-redux';
import { openSendMsg } from '../redux/mailSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
        <Button startIcon= {<AddIcon/>}
         className="compose__btn" onClick ={()=>dispatch(openSendMsg())}>COMPOSE</Button>

        <SiderbarList Icon={InboxIcon} title="Inbox" isactive={true}/>

        <SiderbarList Icon={StarBorderIcon} title="Starred"/>

        <SiderbarList Icon={SendIcon} title="Sent"/>

        <SiderbarList Icon={DraftsIcon} title="Draft"/>

        <SiderbarList Icon={ReportGmailerrorredIcon} title="Spam"/>
        
        <SiderbarList Icon={LabelImportantIcon} title="category"/>

        <SiderbarList Icon={KeyboardArrowDownIcon} title="more"/>

      
    </div>
  )
}


export default Sidebar
