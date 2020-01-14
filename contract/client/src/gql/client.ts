import ApolloClient from 'apollo-boost';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import possibleTypes from './fragment-matcher';


const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: possibleTypes,
});

const cache = new InMemoryCache({
  fragmentMatcher,
});

export default new ApolloClient({
  cache,
  uri: 'http://localhost:8000/',
});
