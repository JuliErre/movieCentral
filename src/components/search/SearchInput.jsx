import { HStack, Icon, Input,Flex } from '@chakra-ui/react'
import React,{useState, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa'
import { useLocation, useNavigate, Link } from 'react-router-dom'

const SearchInput = () => {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
        if (searchText.length > 0) {
          navigate(`/search/${searchText}`);
        } else {
          if (location.pathname.includes('/search')){
            navigate(`/`);
          }
        }
      }, [searchText]);

      
      if(location.pathname === '/login' || location.pathname === '/register') return null
    
  return (
    <>
           <Flex position="absolute" top="17px" left="20px" color="white" zIndex={3} fontSize={'lg'} fontWeight='bold'>
        <Link to='/watchList'> Watchlist </Link>
        </Flex>
    <HStack position='absolute' top='10px' right='10px' zIndex={3} >
        <Icon as={FaSearch} color={'white'} fontSize='2xl'/>
        <Input onChange={(e)=> setSearchText(e.target.value)}  placeholder='search a movie' color='gray.300' width='250px'backgroundColor='gray.800' />
    </HStack>
    </>
  )
}

export default SearchInput