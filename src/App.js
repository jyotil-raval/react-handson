import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [userData, setUserData] = useState({});

  const getUserData = () => {
    return {
      name: 'Jyotil',
      email: 'Jyotil@abc.xyz',
    };
  };

  useEffect(() => {
    const temp = getUserData();
    setUserData(temp);
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>{userData.name}</p>
      <p>{userData.email}</p>
    </div>
  );
}
