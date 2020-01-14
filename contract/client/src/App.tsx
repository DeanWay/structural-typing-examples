import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './gql/client';
import { useGetShapeQuery } from './gql/types'


const Shape: React.FC = () => {
  const { loading, error, data } = useGetShapeQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  if (!data?.shape) return <p>Error!</p>
  const { shape } = data;
  switch (shape.__typename) {
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
