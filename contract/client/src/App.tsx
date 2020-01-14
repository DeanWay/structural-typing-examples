import React from 'react'
import './App.css'
import { ApolloProvider } from '@apollo/react-hooks'

import client from './gql/client'
import Shape from './components/shape'

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <Shape />
      </div>
    </ApolloProvider>
  )
}

export default App
