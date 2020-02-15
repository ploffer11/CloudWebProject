import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './main';
import Login from './login';
import Register from './register';
import User from './user';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/user" component={User} />
      </Switch>
    </div>
  );
}

export default App;
