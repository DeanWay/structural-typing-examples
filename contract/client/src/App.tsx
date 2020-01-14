import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';

import client from './gql/client';
import { getShape } from './gql/shape'
import { getShapeQueryType } from './gql/__generated__/getShapeQueryType'


const Shape: React.FC = () => {
  const { loading, error, data } = useQuery<getShapeQueryType>(getShape);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  const { shape } = data || {};
  if (!shape) {
  return <p>{String(data)}</p>
  }
  switch(shape.__typename) {
    case 'Square':
      return <p>side len: {shape.sideLen}</p>
    case 'Rectangle':
      return <p>width: {shape.width} height: {shape.height}</p>
    case 'Circle':
      return <p>radius: {shape.radius}</p>
  }
}

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <Shape />
      </div>
    </ApolloProvider>
  );
}

export default App;
