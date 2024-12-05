// src/components/EmailView.js
import React, { useEffect, useState } from "react";
import "../css/EmailView.css";
import EmailType from "./EmailType";
import EmailList from "./EmailList";

const EmailView = () => {
 
  return (
    <div className="emailView">
      <EmailType/>
      <EmailList/>
     
    </div>
  );
};

export default EmailView;
