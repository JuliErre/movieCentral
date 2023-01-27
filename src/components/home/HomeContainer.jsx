import { Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Api from "../../Api";
import useFetch from "../../hooks/useFetch";
import MoviesList from "../movies/MoviesList";

const HomeContainer = () => {
    const { data:movies, error, loading } = useFetch(`${Api.baseUrl}/movies`);

    return (
        <VStack justify="start" alignItems="start" p={5}>
            <Heading as="h3" size={"lg"} color={"gray.200"}>
                {"Populars movies   >"}{" "}
            </Heading>
            <HStack
                wrap="wrap"
                justify="start"
                align={"start"}
                spacing={0}
                gap={3}
                maxWidth={"90vw"}
                pt={10}>
                <MoviesList movies={movies} />
            </HStack>
        </VStack>
    );
};

export default HomeContainer;
