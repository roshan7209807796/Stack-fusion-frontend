// import React from 'react'

// const SignUp = () => {
//   return (
//     <div>
//         <p> Welcome !!</p>
//         <h1> Sign <span className="up"> Up. </span></h1>
//     </div>
//   )
// }

// export default SignUp;


// import React, {Component} from 'react';

import React, { useState } from 'react';


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    phone: ''
  });

  const handleInputChange = event => {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // Add your code to submit form data to the server
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;

