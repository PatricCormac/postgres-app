import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsAuth } from '../store/user/actions';

const Auth = ({ setUserAuth }) => {
  const authHandler = () => setUserAuth();
  return (
    <div>
      <button type="button" onClick={authHandler}>Auth</button>
      <Link to={{ pathname: '/admin' }}>Admin</Link>
    </div>
  );
};

const mapDispatchToProps = {
  setUserAuth: setIsAuth
};

Auth.propTypes = {
  setUserAuth: PropTypes.func
};

Auth.defaultProps = {
  setUserAuth: null
};

export default connect(null, mapDispatchToProps)(Auth);
