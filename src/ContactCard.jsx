import React from 'react';

const ContactCard = ({avatar,name,email,age}) => {
    return (
        <div className="container">
      <div className="contact-card">
        <img src={avatar.large} alt="profile" />
        <div className="user-details">
          <p>Name: {name.title}{name.first}{name.last}</p>
          <p>Email: {email}</p>
          <p>Age: {age}</p>
        </div>
      </div>
      </div>
    );
  };
  export default ContactCard