import { Flex, Image, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import Api from "../../data/Api";
import { setUserProfileImage } from "../../features/userData/UserData";
const ProfileImage = ({ image }) => {
    const dispatch = useDispatch();
    const toast = useToast();
    const userId = localStorage.getItem("id");
    const handleImage = () => {
        axios
            .patch(`${Api.baseUrl}/photo`, {
                photo: image.url,
                userId, 
            })
            .then((res) => {
                localStorage.setItem("photo", image.url);
                dispatch(setUserProfileImage(image.url));

                toast({
                    title: "Profile image updated",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
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
            cursor={"pointer"}
            onClick={handleImage}>
            <Image src={image.url} />
        </Flex>
    );
};

export default ProfileImage;
