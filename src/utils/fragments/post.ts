import { gql } from '../request';

export const PostFragment = gql`
  fragment PostFragment on Article {
    createdAt
    title
    slug
    tags {
      description
    }
    content {
      value
    }
  }
`;
