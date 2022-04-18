import { ApolloClient, InMemoryCache } from "@apollo/client";

const { REACT_APP_GRAPHQL_API } = process.env;

export const client = new ApolloClient({
  uri: REACT_APP_GRAPHQL_API,
  cache: new InMemoryCache(),
});
