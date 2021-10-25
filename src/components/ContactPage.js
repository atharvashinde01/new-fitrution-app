import React from "react";
import "../css/ContactPage.css";
import { useHistory } from "react-router-dom";
import db from "../firebase";

const ContactPage = () => {
  const history = useHistory();

  const saveAnswer = (e) => {
    e.preventDefault();
    
    const elementsArray = [...e.target.elements];
    // console.log(elementsArray)

    const formData = elementsArray.reduce((accumulator, currentValue) => {
        if (currentValue.id) {
            accumulator[currentValue.id] = currentValue.value;
        }

        return accumulator;
    }, {});

    db.collection("PersonalInfo").add(formData)
  }

  return (
    <div className="contactPage">
      <div className="contactPage__container">
        <form onSubmit={saveAnswer} className="form_container">
          <h1>Send us a message!</h1>
          <input type="text" id="1" className="inputBox" placeholder="Full Name" />
          <input type="text" id="2" className="inputBox" placeholder="Email Address" />
          <input type="text" id="3" className="inputBox" placeholder="Contact Number"  />
          <input type="text" id="4" className="inputBox" placeholder="Message" />
          <button className="submitButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
