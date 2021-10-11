import { GraphQLClient, gql } from 'graphql-request';

const endpoint = `https://graphql.datocms.com/`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.DATO_MANAGEMENT_TOKEN}`,
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
