import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = ({ isAuth }) => {

  return (
    <Switch>
      {isAuth && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} component={Component} exact />
      )}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} component={Component} exact />
      )}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  )
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.user.isAuth
  }
};

export default connect(mapStateToProps, null)(AppRouter);