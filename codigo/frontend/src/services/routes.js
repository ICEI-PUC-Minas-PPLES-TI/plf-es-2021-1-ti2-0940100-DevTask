import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPageModule from "../pages/landing-page/LandingPageModule";
import LoginModule from "../pages/login/LoginModule";
import RegisterContinueModule from "../pages/register-continue/RegisterContinueModule";
import RegisterModule from "../pages/register/RegisterModule";
import { isAuthenticated } from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <LandingPageModule />} />
      <Route path="/login" component={() => <LoginModule />} />
      <Route path="/register" component={() => <RegisterModule />} />
      <PrivateRoute path="/dashboard" component={() => <h1>Bem-vindo!</h1>} />
      <PrivateRoute
        path="/register-continue"
        component={() => <RegisterContinueModule />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
