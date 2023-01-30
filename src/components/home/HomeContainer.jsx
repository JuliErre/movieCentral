import { Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Api from "../../data/Api";
import useFetch from "../../hooks/useFetch";
import MoviesList from "../movies/MoviesList";

const HomeContainer = () => {
    const { data:movies, error, loading } = useFetch(`${Api.baseUrl}/movies`);

    return (
        <VStack justify={{base:"center",md:"start"}} alignItems={{base:"center",md:"start"}}  p={5}>
            <Heading as="h3" size={"lg"} color={"gray.200"} pl={{base:"0",md:24}}>
                {"Populars movies   >"}{" "}
            </Heading>
            <HStack
                wrap="wrap"
                justify={{base:"center",md:"center"}} alignItems={{base:"center",md:"center"}} 
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
