import { Image, VStack,HStack, Flex,Text,Icon, Heading } from '@chakra-ui/react'
import React from 'react'
import Api from '../../data/Api'

import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate(`/detail/${movie.id}`)
  }
  return (
    <VStack h={'400px'} w={'300px'} position='relative' alignItems={'start'} justifyContent={'end'} cursor='pointer' onClick={()=> handleClick()}  >
        <Image src={`${Api.baseUrlImage}${movie?.poster_path}`} alt={movie.title} position='absolute' zIndex={0} h={'400px'} w={'300px'} objectFit={'cover'} />
        <Flex w='100%' h='100%' bgGradient={"linear(to-b, transparent, RGBA(0, 0, 0, 0.8) 80%)"} position='absolute' zIndex={1}></Flex>
        
        <Flex p={7} zIndex={2} flexDirection='column' gap={'20px'}>

        <Flex
                    justifyContent={"center"}
                    align="center"
                    flexDirection="column"
                    bgColor={"blackAlpha.900"}
                    
                    zIndex={2}
                    width={'80px'}

                    >
                    <Text fontSize={'sm'} color="cyan.400">Action</Text>
                </Flex>
                <HStack>
                    <Icon as={FaStar} color="white" fontSize="10px" />
                    <Icon as={FaStar} color="white" fontSize="10px" />
                    <Icon as={FaStar} color="white" fontSize="10px" />
                    <Icon as={FaStar} color="white" fontSize="10px" />
                    <Icon as={FaStar} color="white" fontSize="10px" />
                </HStack>
                <Heading as='h2' size='md' color='gray.300'>{movie?.title}</Heading>        

        {/* `url('')` */}
        </Flex>
    </VStack>
  )
}

export default MovieCard