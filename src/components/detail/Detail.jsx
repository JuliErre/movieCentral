import {
    Heading,
    HStack,
    Image,
    VStack,
    Text,
    Flex,
    Spinner,
} from "@chakra-ui/react";
import React from "react";
import Api from "../../Api";
import useFetch from "../../hooks/useFetch";
import WatchListButtons from "../watchlist/WatchListButtons";

const Detail = ({ id }) => {
    const {
        data: movie,
        error,
        loading,
    } = useFetch(`${Api.baseUrl}/movies/${id}`);

    if (loading)
        return <Spinner textAlign="center" color="cyan.500" size="xl" p={10} />;

    return (
        <HStack
            align="start"
            p={24}
            gap={10}
            bgColor={"gray.700"}
            borderRadius="10px">
            <Image
                src={`${Api.baseUrlImage}/${movie?.poster_path}`}
                objectFit="cover"
                w="250px"
                h="360px"
            />
            <VStack align="start" gap={5} maxWidth="700px">
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
                <WatchListButtons movieId={movie.id} />
                <Text color="gray.300">{movie?.overview}</Text>
                <Text color="gray.300" fontSize={"md"}>
                    {movie?.release_date}
                </Text>
            </VStack>
        </HStack>
    );
};

export default Detail;
