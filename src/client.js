import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { split, ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

const cache = new InMemoryCache();

const stateLink = withClientState({
	cache: new InMemoryCache(),
});

const link = ApolloLink.from([
	stateLink,
	httpLink
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    dataIdFromObject: object => object.id
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
      errorPolicy: "ignore"
    },
    query: {
      fetchPolicy: "network-only",
      errorPolicy: "all"
    },
    mutate: {
      errorPolicy: "all"
    }
  }
});
  
// const client = new ApolloClient({
//   link,
//   cache,
// 	connectToDevTools: true
// });

export default client;