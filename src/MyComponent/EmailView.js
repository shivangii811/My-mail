import React, { useEffect, useState } from "react";
import "../css/EmailView.css";
import EmailType from "./EmailType";
import EmailList from "./EmailList";
import { db } from "../firebase";
import { collection, onSnapshot } from 'firebase/firestore'; 

const EmailView = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Correctly use onSnapshot with modular syntax
    const unsubscribe = onSnapshot(collection(db, 'emails'), (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="emailView">
      <EmailType/>

      {
  emails.map(({ id, data }) => (
    <EmailList
      key={id}
      name={data.to}   // Adjusted to use 'to' or the correct field for the name
      subject={data.subject}
      message={data.message}
      time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
    />
  ))
}
     
    </div>
  );
};

export default EmailView;
