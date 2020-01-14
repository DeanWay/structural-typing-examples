import { gql } from 'apollo-boost';

export const getShape = gql`
  query getShapeQueryType {
    shape {
      ... on Square {
        __typename
        sideLen
      }
      ... on Rectangle {
        __typename
        width
        height
      }
      ... on Circle {
        __typename
        radius
      }
    }
  }
`;
