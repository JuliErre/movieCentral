import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
} from "@chakra-ui/react";
import ProfileImageList from "./ProfileImageList";
import profileImages from "../../data/ProfileImgs";

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
