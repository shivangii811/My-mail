import React from 'react'
import '../css/sidebarList.css'

const SiderbarList = ({Icon, title, isactive}) => {
  return (
      <div className={`sidebarList ${isactive && "sidebarlist--active"}`}>
        <Icon/>
        <h4>{title}</h4>
      
    </div>
  )
}

export default SiderbarList
