import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { setIsAuth } from '../store/user/actions'

const Auth = ({ setIsAuth }) => {
  const authHandler = () => setIsAuth();
  return (
    <div>
      <button onClick={authHandler}>Auth</button>
      <Link to={{ pathname: "/admin" }}>Admin</Link>
    </div>
  )
}

const mapDispatchToProps = {
  setIsAuth
}

export default connect(null, mapDispatchToProps)(Auth)
