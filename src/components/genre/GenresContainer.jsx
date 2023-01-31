import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import genres from "../../data/Genres";

const GenresContainer = ({ genresCodes, fontSize,bgColor }) => {
    const genreArray =  genresCodes?.slice(0, 1)

    return (
        <HStack>
            {genreArray?.map((genreCode) => {
                const genre = genres.find((genre) => genre.id === genreCode);
                return (
                    <Flex
                        key={genre.id}
                        justifyContent={"center"}
                        align="center"
                        flexDirection="row"
                        bgColor={bgColor? bgColor :"blackAlpha.500"}
                        px={3}
                        zIndex={2}
                        paddingx={2}
                        paddingy={1}
                        >
                        <Text fontSize={fontSize} color="cyan.400">{genre.name}</Text>
                    </Flex>
                );
            })}
        </HStack>
    );
};

export default GenresContainer;
