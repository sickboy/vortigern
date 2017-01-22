import * as e6p from 'es6-promise';
(e6p as any).polyfill();
import 'isomorphic-fetch';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
const { applyRouterMiddleware, Router, browserHistory } = require('react-router');
import { syncHistoryWithStore } from 'react-router-redux';
const { ReduxAsyncConnect } = require('redux-connect');
import { configureStore } from './app/redux/store';
import 'isomorphic-fetch';
import routes from './app/routes';

import { ApolloProvider } from 'react-apollo';
import { createClient } from './shared';

const ac = createClient({
  initialState: (window as any).__APOLLO_STATE__,
  ssrForceFetchDelay: 100,
});

const store = configureStore(
  browserHistory,
  window.__INITIAL_STATE__,
);
const history = syncHistoryWithStore(browserHistory, store);

import { useScroll } from 'react-router-scroll';

// const scroll = useScroll((prevRouterProps, { routes }) => {
//   if (routes.some((route) => route.ignoreScrollBehavior)) {
//     return false;
//   }

//   if (routes.some((route) => route.scrollToTop)) {
//     return [0, 0];
//   }

//   if (prevRouterProps) { return true; } else { return true; }
// });

const scroll = useScroll((prevRouterProps, { location }) => (
  prevRouterProps && location.pathname !== prevRouterProps.location.pathname
));

const connectedCmp = (props) => <ReduxAsyncConnect {...props} render={applyRouterMiddleware(scroll)} />;

ReactDOM.render(
  <ApolloProvider client={ac}>
    <Provider store={store} key="provider">
      <Router
        history={history}
        render={connectedCmp}
      >
        {routes}
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('app'),
);
