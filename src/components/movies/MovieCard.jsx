import { Flex, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../data/Api";
import GenresContainer from "../genre/GenresContainer";
import ConvertToStarts from "../starRating/ConvertToStarts";

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/detail/${movie.id}`);
    };
    return (
        <VStack
            h={"400px"}
            w={"300px"}
            position="relative"
            alignItems={"start"}
            justifyContent={"end"}
            cursor="pointer"
            onClick={() => handleClick()}>
            <Image
                src={`${Api.baseUrlImage}${movie?.poster_path}`}
                alt={movie.title}
                position="absolute"
                zIndex={0}
                h={"400px"}
                w={"300px"}
                objectFit={"cover"}
            />
            <Flex
                w="100%"
                h="100%"
                bgGradient={"linear(to-b, transparent, RGBA(0, 0, 0, 0.8) 80%)"}
                position="absolute"
                zIndex={1}></Flex>

            <Flex p={7} zIndex={2} flexDirection="column" gap={"20px"}>
                <GenresContainer
                    genresCodes={movie?.genre_ids}
                    fontSize={"sm"}
                    bgColor={"blackAlpha.900"}
                />
                <ConvertToStarts num={movie.vote_average} size="13px" />
                <Heading as="h2" size="md" color="gray.300" noOfLines={1}>
                    {movie?.title}
                </Heading>
            </Flex>
        </VStack>
    );
};

export default MovieCard;
