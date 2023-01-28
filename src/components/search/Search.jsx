import { HStack, Spinner,Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Api from '../../data/Api'
import MoviesList from '../movies/MoviesList'

const Search = ({text}) => {
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(true)
    

    useEffect(()=>{
        let isUnmount = false;
        setLoading(true)
        axios.get(`${Api.baseUrl}/movies/search/${text}`)
        .then(res => {
            if(!isUnmount){
                setMovies(res.data)
            }
        }
        )
        .finally(() =>{
            setTimeout(()=> {

                setLoading(false)
            },1000)
        }
        )
        .catch(err => console.log(err))

        return () => {
            isUnmount = true
        }
    
    },[text])

    if(loading) return <Spinner textAlign='center' color='cyan.500' size='xl' m={10} />
    if(movies.length === 0) return <Text color={'gray.100'} fontSize={'4xl'} p={10}>No results...</Text>
  return (
    <HStack pt={24} wrap='wrap' spacing={0} gap={3}>
        <MoviesList movies={movies}/>
    </HStack>
  )
}

export default Search