import { Heading, VStack, Image, Flex, Button, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import LogoutBtn from "../button/LogoutBtn";
import ProfileImagePicker from "./ProfileImagePicker";
import { FiEdit } from "react-icons/fi";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const userName = localStorage.getItem("name");

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <VStack pt={24} gap={5}>
            <Heading color={"white"}></Heading>
            <Flex
                backgroundColor={"gray.900"}
                borderRadius={"50%"}
                border={"3px solid"}
                borderColor={"cyan.800"}
                position={"relative"}
                cursor={"pointer"}
                onClick={handleOpen}>
                <Image
                    src="https://art-gallery-latam.api.hbo.com/images/a286cb57-fee3-45b1-a9c0-b9fabe519bfb/avatar?size=250x250&format=png"
                    alt="Games of thrones"
                />
                <Icon
                    as={FiEdit}
                    color={"gray.200"}
                    fontSize={"5xl"}
                    bottom={1}
                    right={10}
                    position={"absolute"}
                />
            </Flex>
            <Heading color={"white"} textTransform={"capitalize"}>
                Hi, {userName}
            </Heading>
            <ProfileImagePicker isOpen={isOpen} onClose={handleClose} />
            <LogoutBtn />
        </VStack>
    );
};

export default Profile;
