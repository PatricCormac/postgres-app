import React from 'react';
import { Link } from 'react-router-dom';
import { UseUserContext } from '../context/user';

const Auth = () => {
  const { user, setAuth } = UseUserContext();

  const clickHandler = () => {
    setAuth();
  };

  console.log({ user });

  return (
    <div>
      <button type="button" onClick={clickHandler}>Auth</button>
      <Link to={{ pathname: '/admin' }}>Admin</Link>
    </div>
  );
};

export default Auth;
