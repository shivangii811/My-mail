import React, { useEffect, useState } from "react";
import "../css/EmailView.css";
import EmailType from "./EmailType";
import EmailList from "./EmailList";
import { db } from "../firebase";

const EmailView = () => {
  const [emails , setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails").onSnapshot(snapshot => {
      setEmails(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  console.log(emails);
  return (
    <div className="emailView">
      <EmailType/>
      <EmailList/>
     
    </div>
  );
};

export default EmailView;
