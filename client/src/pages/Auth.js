import React from 'react';
import Header from '../components/Header/Header';
import { useUserContext } from '../context/user';

const Auth = () => {
  const { setAuth } = useUserContext();

  const clickHandler = () => {
    setAuth();
  };

  return (
    <div>
      <Header />
      <button type="button" onClick={clickHandler}>Auth</button>
    </div>
  );
};

export default Auth;
