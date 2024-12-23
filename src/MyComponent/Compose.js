import React, { useState } from 'react'
import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../css/compose.css'
import { useDispatch } from 'react-redux';
import { closeSendMsg } from '../redux/mailSlice';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db} from '../firebase';
import firebase from 'firebase/compat/app';

const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch= useDispatch();

  const formSubmit = async(e)=>{
    e.preventDefault();
    if(to===""){
      return alert("To is required")
    }
    if(subject===""){
      return alert("Subject is required")
    }
    db.collection("emails").add({

      to,
      subject,
      message,
      timestamp:serverTimestamp()
    });
    setTo("");
    setSubject("");
    setMessage("");
    alert("Email sent successfully!");
    dispatch(closeSendMsg());
  } 

   return (
    <div className='compose'>
        <div className='compose__header'>
          <div className='compose__header__left'>
            <span>My Message</span>
          </div>
          <div className='compose__header__right'>
          <MinimizeIcon/>
          <OpenInFullIcon/>
          <CloseIcon onClick ={()=> dispatch(closeSendMsg())}/>

          </div>
        </div>
        <form onSubmit={formSubmit}>
        <div className='compose__body'>
            <div className='compose__bodyForm'>
                <input type='email' placeholder='to' value={to} onChange={(e)=>setTo(e.target.value)}/>

                <input type='text' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>

                <textarea rows="20" onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
            </div>

        </div>

        <div className='compose__footer'>
           <div className='compose__footerLeft'>
            <button type='submit'>
                Send <ArrowDropDownIcon/>
            </button>
            </div> 
           <div className='compose__footerRight'>
           <LinkIcon/>
           <AttachFileIcon/>
           <InsertDriveFileIcon/>
           <DeleteIcon/>
            </div> 
        </div>
        </form>
    </div>
  )
}

export default Compose
