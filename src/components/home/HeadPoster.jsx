import React, { useState, useEffect } from "react";
import Api from "../../Api";
import {
    Button,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Text,
    VStack,
    Spinner,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import SearchInput from "../search/SearchInput";

const HeadPoster = () => {
    const [movie, setMovie] = useState({});
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        axios.get(`${Api.baseUrl}/movies/616037`)
        .then((res) => {
            setMovie(res.data[0])
        }
        )
        .finally(() =>{
            setTimeout(()=> {

                setLoading(false)
            },1000)
        })
        .catch(err => console.log(err))

    },[])

    if(loading) return <Spinner textAlign='center' color='cyan.500' size='xl' m={10} />

    return (
        <Flex position="relative" width="100%" h="700px">
            {/* <Flex position="absolute" top='10px' right='10px' zIndex={3}>

            <SearchInput/>
            </Flex> */}
            <Flex
                // position="absolute"
                // zIndex={2}
                justify={"center"}
                align={"start"}
                pl={40}
                pb={12}
                zIndex={2}
                flexDirection="column"
                maxWidth={"1000px"}
                gap={6}
            >
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
                <HStack>
                    <Icon as={FaStar} color="white" fontSize="md" />
                    <Icon as={FaStar} color="white" fontSize="md" />
                    <Icon as={FaStar} color="white" fontSize="md" />
                    <Icon as={FaStar} color="white" fontSize="md" />
                    <Icon as={FaStar} color="white" fontSize="md" />
                </HStack>
                <Heading as="h3" size="4xl" color="gray.300">
                    {" "}
                    {movie?.title}
                </Heading>
                <Text color="gray.300" fontSize="lg" noOfLines={3}>
                    {" "}
                    {movie?.overview}
                </Text>

                <Button
                    variant="outline"
                    borderRadius={50}
                    p={6}
                    colorScheme="cyan"
                >
                    {" "}
                    Watch now
                </Button>
            </Flex>

            <Flex
                width={"100%"}
                height={"100%"}
                position="absolute"
                bgGradient="linear(to-b, transparent, 
            RGBA(0, 0, 0, 0.8) 70%)"
                zIndex={1}
            ></Flex>
            <Flex width={"100%"} position="absolute">
                <Image
                    src={`${Api.baseUrlImage}/${movie?.backdrop_path}`}
                    objectFit="cover"
                    maxWidth={"100vw"}
                    maxHeight={"100vh"}
                    width={"100%"}
                    height={"700px"}
                    zIndex={0}
                />
            </Flex>
        </Flex>
    );
};

export default HeadPoster;
