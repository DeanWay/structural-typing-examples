import { GraphQLResolveInfo } from 'graphql';
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



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Shape: ResolversTypes['Square'] | ResolversTypes['Rectangle'] | ResolversTypes['Circle'],
  Square: ResolverTypeWrapper<Square>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Rectangle: ResolverTypeWrapper<Rectangle>,
  Circle: ResolverTypeWrapper<Circle>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Shape: ResolversParentTypes['Square'] | ResolversParentTypes['Rectangle'] | ResolversParentTypes['Circle'],
  Square: Square,
  Float: Scalars['Float'],
  Rectangle: Rectangle,
  Circle: Circle,
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
};

export type CircleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Circle'] = ResolversParentTypes['Circle']> = {
  radius?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  shape?: Resolver<Maybe<ResolversTypes['Shape']>, ParentType, ContextType>,
};

export type RectangleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rectangle'] = ResolversParentTypes['Rectangle']> = {
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
};

export type ShapeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shape'] = ResolversParentTypes['Shape']> = {
  __resolveType: TypeResolveFn<'Square' | 'Rectangle' | 'Circle', ParentType, ContextType>
};

export type SquareResolvers<ContextType = any, ParentType extends ResolversParentTypes['Square'] = ResolversParentTypes['Square']> = {
  sideLen?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Circle?: CircleResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Rectangle?: RectangleResolvers<ContextType>,
  Shape?: ShapeResolvers,
  Square?: SquareResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

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