import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = ({ isAuth }) => (
  <Switch>
    {isAuth && authRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} component={Component} exact />
    ))}
    {publicRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} component={Component} exact />
    ))}
    <Redirect to={SHOP_ROUTE} />
  </Switch>
);

const mapStateToProps = (state) => ({ isAuth: state.user.isAuth });

AppRouter.propTypes = {
  isAuth: PropTypes.bool
};

AppRouter.defaultProps = {
  isAuth: false
};

export default connect(mapStateToProps, null)(AppRouter);
