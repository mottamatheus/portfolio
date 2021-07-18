import { GraphQLClient, gql } from 'graphql-request';

const endpoint = `https://graphql.datocms.com/`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer 0390ede1af0fbb445b930545d44aad`,
  },
});

const request: GraphQLClient['request'] = (
  document,
  variables,
  requestHeaders,
) => {
  return graphQLClient.request(document, variables, requestHeaders);
};

export { request, gql };
