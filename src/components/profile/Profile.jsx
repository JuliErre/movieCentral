import { Heading, VStack, Image, Flex } from "@chakra-ui/react";
import React from "react";
import LogoutBtn from "../button/LogoutBtn";

const Profile = () => {
    const userName = localStorage.getItem("name");

    return (
        <VStack pt={24} gap={5}>
            <Heading color={"white"}></Heading>
            <Flex
                backgroundColor={"gray.900"}
                borderRadius={"50%"}
                border={"3px solid"}
                borderColor={"cyan.800"}>
                <Image
                    src="https://art-gallery-latam.api.hbo.com/images/a286cb57-fee3-45b1-a9c0-b9fabe519bfb/avatar?size=250x250&format=png"
                    alt="Games of thrones"
                />
            </Flex>
           <Heading color={"white"} textTransform={"capitalize"}>Hi, {userName}</Heading> 
           <LogoutBtn/>
        </VStack>
    );
};

export default Profile;
