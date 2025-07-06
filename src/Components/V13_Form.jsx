import React, { useState } from 'react';

const V13_Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your form has been submitted.\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);

    // Optional: Save data to localStorage (temporary browser storage)
    // localStorage.setItem("formData", JSON.stringify({ name, email, password }));

    // Optional: Clear the form after submission
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </div>
        <h4>{name}</h4><br />

        <div>
          Email: <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <h4>{email}</h4><br />

        <div>
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>
        <h4>{password}</h4><br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default V13_Form;
