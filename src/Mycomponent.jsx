import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';

function MyComponent() {
  const [contact, setcontact] = useState([]);
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=50')

      .then(res => setcontact(res.data.results))
      .catch((err) => console.log(err));
  }, []);



  return (

    <div className='container'>
      {
        contact.map((user) => {
          return (
            
              <div className="contact-card">
                <img src={user.picture.large} alt="profile" />
                <div className="user-details">
                  <p>Name: {user.name.title}{user.name.first}{user.name.last}</p>
                  <p>Email: {user.email}</p>
                  <p>Age: {user.dob.age}</p>
                </div>
              </div>
         
          )

        })
      }
    </div>

  );
}

export default MyComponent;