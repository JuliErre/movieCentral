import { Button, Flex, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Api from "../../data/Api";
import useFetch from "../../hooks/useFetch";
import GenresContainer from "../genre/GenresContainer";
import ConvertToStarts from "../starRating/ConvertToStarts";

const HeadPoster = () => {
    const {
        data: movie,
        error,
        loading,
    } = useFetch(`${Api.baseUrl}/movies/616037`);

    console.log(movie.genre_ids);

    if (loading)
        return <Spinner textAlign="center" color="cyan.500" size="xl" m={10} />;

    return (
        <Flex position="relative" width="100%" h="700px">
            <Flex
                justify={"center"}
                align={"start"}
                pl={{ base: 5, lg: 40 }}
                pt={{ base: 5, lg: 0 }}
                pb={12}
                zIndex={2}
                flexDirection="column"
                maxWidth={"1000px"}
                gap={6}>
                <GenresContainer genresCodes={movie?.genre_ids} />
                <ConvertToStarts num={movie.vote_average} size="20px" />
                <Heading
                    as="h3"
                    size={{ base: "2xl", md: "4xl" }}
                    color="gray.300">
                    {" "}
                    {movie?.title}
                </Heading>
                <Text
                    color="gray.300"
                    fontSize={{ base: "sm", md: "lg" }}
                    noOfLines={3}>
                    {" "}
                    {movie?.overview}
                </Text>
                <Link to={`detail/${movie.id}`}>
                    <Button
                        variant="outline"
                        borderRadius={50}
                        p={6}
                        colorScheme="cyan">
                        {" "}
                        Watch now
                    </Button>
                </Link>
            </Flex>

            <Flex
                width={"100%"}
                height={"100%"}
                position="absolute"
                bgGradient="linear(to-b, transparent, 
            RGBA(0, 0, 0, 0.8) 70%)"
                zIndex={1}></Flex>
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
