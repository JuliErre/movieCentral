import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import ProfileImage from "./ProfileImage";
const ProfileImageList = ({ images }) => {
    return (
        <Flex
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            wrap={"wrap"}>
            {images.map((image) => (
                <ProfileImage key={image.id} image={image} />
            ))}
        </Flex>
    );
};

export default ProfileImageList;
