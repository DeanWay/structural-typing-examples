import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Circle = {
   __typename: 'Circle',
  radius: Scalars['Float'],
};

export type Query = {
   __typename: 'Query',
  shape?: Maybe<Shape>,
};

export type Rectangle = {
   __typename: 'Rectangle',
  width: Scalars['Float'],
  height: Scalars['Float'],
};

export type Shape = Square | Rectangle | Circle;

export type Square = {
   __typename: 'Square',
  sideLen: Scalars['Float'],
};

export type GetShapeQueryVariables = {};


export type GetShapeQuery = (
  { __typename: 'Query' }
  & { shape: Maybe<(
    { __typename: 'Square' }
    & Pick<Square, 'sideLen'>
  ) | (
    { __typename: 'Rectangle' }
    & Pick<Rectangle, 'width' | 'height'>
  ) | (
    { __typename: 'Circle' }
    & Pick<Circle, 'radius'>
  )> }
);


export const GetShapeDocument = gql`
    query getShape {
  __typename
  shape {
    ... on Square {
      sideLen
    }
    ... on Rectangle {
      width
      height
    }
    ... on Circle {
      radius
    }
  }
}
    `;
export type GetShapeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetShapeQuery, GetShapeQueryVariables>, 'query'>;

    export const GetShapeComponent = (props: GetShapeComponentProps) => (
      <ApolloReactComponents.Query<GetShapeQuery, GetShapeQueryVariables> query={GetShapeDocument} {...props} />
    );
    

/**
 * __useGetShapeQuery__
 *
 * To run a query within a React component, call `useGetShapeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShapeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShapeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShapeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetShapeQuery, GetShapeQueryVariables>) {
        return ApolloReactHooks.useQuery<GetShapeQuery, GetShapeQueryVariables>(GetShapeDocument, baseOptions);
      }
export function useGetShapeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetShapeQuery, GetShapeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetShapeQuery, GetShapeQueryVariables>(GetShapeDocument, baseOptions);
        }
export type GetShapeQueryHookResult = ReturnType<typeof useGetShapeQuery>;
export type GetShapeLazyQueryHookResult = ReturnType<typeof useGetShapeLazyQuery>;
export type GetShapeQueryResult = ApolloReactCommon.QueryResult<GetShapeQuery, GetShapeQueryVariables>;