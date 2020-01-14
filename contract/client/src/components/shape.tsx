import React from 'react'
import { useGetShapeQuery } from '../gql/types'


const Shape: React.FC = () => {
  const { loading, error, data } = useGetShapeQuery()

  if (loading) return <p>Loading...</p>
  if (error || !data?.shape) return <p>Error!</p>

  const { shape } = data
  switch (shape.__typename) {
    case 'Square':
      return <p>side len: {shape.sideLen}</p>
    case 'Rectangle':
      return <p>width: {shape.width} height: {shape.height}</p>
    case 'Circle':
      return <p>radius: {shape.radius}</p>
  }
}

export default Shape
