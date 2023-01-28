import React from "react";
import { Flex, Image } from "@chakra-ui/react";
const ProfileImage = ({ image }) => {
    return (
        <Flex
            key={image.id}
            w="100px"
            h="100px"
            borderRadius="50%"
            border="3px solid"
            borderColor="cyan.700"
            backgroundColor={"gray.900"}
            m={2}
            cursor={"pointer"}>
            <Image src={image.url} />
        </Flex>
    );
};

export default ProfileImage;
