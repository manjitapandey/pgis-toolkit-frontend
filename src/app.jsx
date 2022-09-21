/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import PrivateRoute from '@Components/common/PrivateRoute';
import Toast from '@Components/common/Toast';
import Header from '@Components/common/Header/index';
import CommonActions from '@Actions/common';
import permissionAction from '@Actions/permission';
import indexRoutes from './routes';

function generateRoutes(routes) {
  return (
    <Switch>
      {routes.map((route) =>
        Array.isArray(route.component) ? (
          <Route path={route.path} key={route.name} exact={route.exact ?? false}>
            {generateRoutes(route.component)}
          </Route>
        ) : route.authenticated ? (
          <PrivateRoute component={route.component} exact={route.exact ?? false} path={route.path} key={route.name} />
        ) : (
          <Route
            // eslint-disable-next-line no-unused-vars
            component={route.component}
            exact={route.exact ?? false}
            path={route.path}
            key={route.name}
          />
        ),
      )}
    </Switch>
  );
}

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const newData = pathname?.includes('/organizations/') && pathname?.includes('/projects/');
  const paths = pathname?.includes('/verify-user/');
  const routesWithoutHeader = ['/login', '/', '/usecase', '/about', '/signup'];
  const hasNoHeader = paths || newData || routesWithoutHeader.includes(pathname);
  useEffect(() => {
    dispatch(CommonActions.setCsrfRequest());
    dispatch(permissionAction.getPermissionRequest());
    // if (!publicPageRoutes.includes(pathname)) {
    //   dispatch(LoginActions.checkLoginRequest());
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, pathname]);

  return (
    <>
      <Toast />
      {!hasNoHeader && <Header />}
      {generateRoutes(indexRoutes)}
    </>
  );
}

export default hot(module)(App);
