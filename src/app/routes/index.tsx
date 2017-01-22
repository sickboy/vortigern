import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, ErrorPage } from 'containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={ErrorPage}/>
  </Route>
);
