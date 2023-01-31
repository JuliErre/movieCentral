import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import React from "react";
import profileImages from "../../data/ProfileImgs";
import ProfileImageList from "./ProfileImageList";

function ProfileImagePicker({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent backgroundColor={"gray.700"} color={"gray.300"}>
                <ModalHeader pt={10} textAlign={"center"} fontSize={"2xl"}>
                    Choose Your Profile Image
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody py={5}>
                    <ProfileImageList images={profileImages} />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ProfileImagePicker;
