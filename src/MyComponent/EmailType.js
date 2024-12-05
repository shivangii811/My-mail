import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import ErrorIcon from '@mui/icons-material/Error';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import '../css/EmailView.css';

const EmailType = () => {
  return (
    <div className='emailtype'>
        <div className='emailtype__option  emailtype__option--active'>
          <InboxIcon/>
          <p>Primary</p>
        </div>

        <div className='emailtype__option'>
          <ErrorIcon/>
          <p>Update</p>
        </div>

        <div className='emailtype__option'>
          <PeopleAltIcon/>
          <p>Social</p>
        </div>
      
    </div>
  )
}

export default EmailType
