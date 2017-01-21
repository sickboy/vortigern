import ApolloClient, { createNetworkInterface } from 'apollo-client';

// TODO: The ApolloProvider should be higher up at a Root element, however then it seems to be too late?
export const createClient = (options?, headers?) => {
  const ssrnetwork = options.ssrMode ? {
    opts: {
      credentials: 'same-origin',
      // transfer request headers to networkInterface so that they're accessible to proxy server
      // Addresses this issue: https://github.com/matthew-andrews/isomorphic-fetch/issues/83
      headers,
    },
  } : {};
  const opts = {
    ...options,
    networkInterface: createNetworkInterface({ ...ssrnetwork, uri: 'https://medium-gql.azurewebsites.net/graphql' }),
  };
  return new ApolloClient(opts);
};
