import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import '../css/header.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';

const Header = () => {
  const user = useSelector(selectUser)
  return (
    <div className='header'>
        <div className='header__left'>
        <IconButton className="custom-icon-button">
           <ReorderIcon></ReorderIcon>
           </IconButton>
           <img src="data:image/png;base64,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" alt='logo'/>
        </div>
        <div className='header__middle'>
            <div className='search_bar'>
            <IconButton className="custom-icon-button">
             <SearchIcon></SearchIcon>
             </IconButton>
              <input type='text' placeholder='search mail'/>
              <IconButton className="custom-icon-button">
               <ArrowDownwardIcon></ArrowDownwardIcon>
               </IconButton>
            </div>
        </div>
        <div className='header__right'>
          <IconButton className="custom-icon-button">
            <SettingsIcon></SettingsIcon>
          </IconButton>

          <IconButton className="custom-icon-button">
            <HelpOutlineIcon></HelpOutlineIcon>
          </IconButton>

        </div>
    </div>
  )
}

export default Header
