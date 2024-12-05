// src/components/EmailList.js
import React from "react";
import "../css/EmailView.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const EmailList = () => {
 return (
    <div className="emailList">
      <div className="emailList__left">
        <CheckBoxOutlineBlankIcon/>
        <StarBorderIcon/>
        <h4>Shivangi</h4>
      </div>

      <div className="emailList__middle">
        <div className="emailList__middle__msg">
        <p><b>Subject</b> - Message </p>
        </div>
      </div>

      <div className="emailList__right">
        <p>2:30 PM</p>
      </div>
    </div>
  );
};

export default EmailList;
