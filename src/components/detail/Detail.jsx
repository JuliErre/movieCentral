import {
    AspectRatio,
    Flex,
    Heading,
    HStack, Icon, Image,
    Spinner,
    Text,
    VStack
} from "@chakra-ui/react";
import React from "react";
import { MdMovie } from "react-icons/md";
import Api from "../../data/Api";
import useFetch from "../../hooks/useFetch";
import WatchListButtons from "../watchlist/WatchListButtons";
const Detail = ({ id }) => {
    const {
        data: movie,
        error,
        loading,
    } = useFetch(`${Api.baseUrl}/movies/${id}`);

    const {
        data: providers,
        error: errorProviders,
        loading: loadingProviders,
    } = useFetch(
        `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=771f03b9c3d4bcaf131e7e4859fdb6f0`
    );

    if (loading)
        return <Spinner textAlign="center" color="cyan.500" size="xl" p={10} />;

    return (
        <VStack
            position={"relative"}
            width="100%"
            minH={{ base: "140vh", md: "170vh" }}
            alignItems={"center"}
            maxW={"100%"}>
            <Flex position={"relative"}>
                <Image
                    src={`${Api.baseUrlImage}/${movie?.backdrop_path}`}
                    h={"500px"}
                    w={"100vw"}
                    objectFit={"cover"}
                    zIndex={1}
                />
                <Flex
                    width={"100%"}
                    height={{ base: "140vh", md: "170vh" }}
                    position="absolute"
                    bgGradient="linear(to-b, transparent, 
            RGBA(0, 0, 0, 0.7) 0%)"
                    zIndex={1}></Flex>
            </Flex>
            <VStack
                align="start"
                top={"270px"}
                gap={10}
                borderRadius="10px"
                zIndex={2}
                position={"absolute"}
                maxW={"100%"}
                px={5}>
                <HStack align="start" gap={10}>
                    <Flex display={{ base: "none", lg: "flex" }}>
                        <Image
                            src={`${Api.baseUrlImage}/${movie?.poster_path}`}
                            objectFit="cover"
                            w={"450px"}
                            h="650px"
                            borderRadius={"20px"}
                        />
                    </Flex>
                    <VStack align="start" gap={3} maxWidth="700px">
                        <Flex
                            justifyContent={"center"}
                            align="center"
                            flexDirection="row"
                            bgColor={"blackAlpha.500"}
                            px={3}
                            zIndex={2}>
                            <Text color="cyan.400">Action</Text>
                        </Flex>
                        <Heading as="h3" size="3xl" color="gray.300">
                            {movie?.title}
                        </Heading>
                        <Flex width={"100%"}>
                            <Text
                                color="gray.300"
                                fontWeight={"normal"}
                                fontSize={16}>
                                {movie?.overview}
                            </Text>
                        </Flex>
                        <Flex
                            justifyContent={"space-between"}
                            alignItems={"flex-end"}
                            width={"100%"}
                            pr={4}>
                            <WatchListButtons movie={movie} />
                            <Text color="gray.300" fontSize={"md"}>
                                {movie?.release_date}
                            </Text>
                        </Flex>
                        <VStack alignItems={"flex-start"}>
                            <Heading as="h3" size="md" color="gray.200">
                                Available on
                            </Heading>
                            <Flex direction={"row"} gap={4}>
                                {providers?.results?.AR?.flatrate?.map(
                                    (provider) => (
                                        <Image
                                            key={provider.provider_id}
                                            src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                                            objectFit="cover"
                                            w={"60px"}
                                            h="60px"
                                            borderRadius="10px"
                                        />
                                    )
                                )}
                                {
                                    providers?.results?.hasOwnProperty('AR') ? null : 
                                     <Flex w={"60px" } h={"60px"} bg={"gray.200"} alignItems={"center"} justify={"center"} borderRadius="10px"> 
                                        <Icon as={MdMovie} color="gray.800" fontSize="3xl" />
                                     </Flex>
                                }
                        
                            </Flex>
                        </VStack>
                        <VStack
                            maxW={"100%"}
                            justifyContent={"start"}
                            alignItems={"start"}
                            gap={1}>
                            <Heading as="h3" size="md" color="gray.200">
                                Cast
                            </Heading>
                            <Flex
                                flexDirection="row"
                                width={{ base: "300px", lg: "100%" }}
                                maxW={"100%"}
                                overflowX={"scroll"}
                                gap={{ base: 3, md: 5 }}
                                overflowY={"hidden"}
                                sx={{
                                    "::-webkit-scrollbar": {
                                        display: "none",
                                    },
                                }}>
                                {movie?.cast?.map((actor) => (
                                    <Flex
                                        w={{ base: "60px", md: "100%" }}
                                        direction={"column"}
                                        maxW={{ base: "60px", md: "100%" }} key={actor.id}>
                                        <Flex
                                            w={{ base: "60px", lg: "120px" }}
                                            h={{ base: "75px", lg: "150px" }}
                                            maxW={"100%"}>
                                            <Image
                                                key={actor.id}
                                                src={`${Api.baseUrlImage}/${actor.profile_path}`}
                                                objectFit="cover"
                                                w={{
                                                    base: "60px",
                                                    lg: "120px",
                                                }}
                                                h={{
                                                    base: "75px",
                                                    lg: "150px",
                                                }}
                                                borderRadius="10px"
                                            />
                                        </Flex>

                                        <Text
                                            color="gray.300"
                                            fontSize={"medium"}
                                            noOfLines={1}>
                                            {actor.name}
                                        </Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </VStack>
                    </VStack>
                </HStack>
                <VStack justify={"start"} align={"start"} gap={4} pt={10}>
                    <Heading as="h2" size="xl" color="gray.200">
                        Official Trailer
                    </Heading>
                    <AspectRatio
                        w={{
                            base: "20em",
                            sm: "400px",
                            md: "500px",
                            lg: "1000px",
                        }}
                        ratio={21 / 9}>
                        <iframe
                            src={movie?.trailer}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </AspectRatio>
                </VStack>
            </VStack>
        </VStack>
    );
};

export default Detail;
