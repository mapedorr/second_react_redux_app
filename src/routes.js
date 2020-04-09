import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './components/Home.jsx';
import Posts from './components/Posts.jsx';
import Albums from './components/Albums.jsx';
import Todos from './components/Todos.jsx';
import Photos from './components/Photos.jsx'

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/posts'>
      <Posts {...props} />
    </Route>
    <Route path='/albums'>
      <Albums {...props} />
    </Route>
    <Route path='/todos'>
      <Todos {...props} />
    </Route>
    <Route path='/photos/:albumId'>
      <Photos {...props} />
    </Route>
  </Switch>
);

export default Routes;
