import React from 'react'
import { useParams } from 'react-router-dom';
import Detail from '../components/detail/Detail'

const DetailScreen = () => {
  const { id } = useParams();
  return (
    <Detail id={id} />
  )
}

export default DetailScreen