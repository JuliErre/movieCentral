import { HStack, Icon, Input } from '@chakra-ui/react'
import React,{useState, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
    const [searchText, setSearchText] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        if (searchText.length > 0) {
          navigate(`/search/${searchText}`);
        } else {
          navigate(`/`);
        }
      }, [searchText]);

    
  return (
    <HStack position='absolute' top='10px' right='10px' zIndex={3} >
        <Icon as={FaSearch} color={'white'} fontSize='2xl'/>
        <Input onChange={(e)=> setSearchText(e.target.value)}  placeholder='search a movie' color='gray.300' width='250px'backgroundColor='gray.800' />
    </HStack>
  )
}

export default SearchInput