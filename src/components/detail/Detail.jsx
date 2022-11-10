import { Heading, HStack, Image, VStack,Text, Flex, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Api from '../../Api'

const Detail = ({id}) => {
    const [movie,setMovie] = useState({})
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
        axios.get(`${Api.baseUrl}/movies/${id}`)
        .then(res => setMovie(res.data[0]))
        .finally(() => {
            setTimeout(()=>{
                setLoading(false)
            },1000)
        })
            
        .catch(err => console.log(err))

    },[])

    if (loading) return <Spinner textAlign='center' color='cyan.500' size='xl' p={10} />
    


  return (
    <HStack align='start' p={24} gap={10} bgColor={'gray.700'} borderRadius='10px'>
        <Image src={`${Api.baseUrlImage}/${movie?.poster_path}`} objectFit='cover' w='250px' h='360px'/>
        <VStack align='start' gap={5} maxWidth='700px'> 
        <Flex 
                    justifyContent={"center"}
                    align="center"
                    flexDirection="row"
                    bgColor={"blackAlpha.500"}
                    px={3}
                    zIndex={2}
                    
                >
                    <Text color="cyan.400">Action</Text>
                </Flex>
            <Heading as='h3' size='3xl' color='gray.300'>{movie?.title}</Heading>
            <Text color='gray.300'>{movie?.overview}</Text>
            <Text color='gray.300' fontSize={'md'}>{movie?.release_date}</Text>

        </VStack>
    </HStack>
  )
}

export default Detail