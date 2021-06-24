import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from './Route';

import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';
import { ResetPassword } from '../pages/ResetPassword';

import { Home } from '../pages/Home';

import ScrollOnTop from '../lib/ScrollOnTop';

const Routes: React.FC = () => (
  <BrowserRouter>
    <ScrollOnTop />

    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/reset-password" component={ResetPassword} />

      <Route path="/" component={Home} exact isPublic />
    </Switch>
  </BrowserRouter>
);

export default Routes;
