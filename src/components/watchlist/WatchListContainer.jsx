import { Flex } from '@chakra-ui/react'
import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Api from '../../Api'
import MoviesList from '../movies/MoviesList'

const WatchListContainer = () => {
    const [watchList, setWatchList] = useState([])
    const userId  = localStorage.getItem('id') 


 
    useEffect(()=> {
        axios.get(`${Api.baseUrl}/watchlist/${userId}`)
        .then(res => {
            setWatchList(res.data.movies)
            console.log(res.data.movies)
        }
        )
        .catch(err => console.log(err))

    },[userId])
  return (
      <Flex wrap={'wrap'} margin={'0px'} justifyItems={'center'} alignItems={'center'} gap={4} p={4}>

      <MoviesList movies = {watchList}/>
      </Flex>
        
  )
}

export default WatchListContainer