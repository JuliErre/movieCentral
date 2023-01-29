import { Flex, HStack, Icon, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "../search/SearchInput";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = () => {
    const [show, handleShow] = useState(false);
    const userImage = useSelector(state => state.userData.image)

    const location = useLocation();

    const transitionNavBar = () => {
        if (window.scrollY > 50) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    if (location.pathname === "/login" || location.pathname === "/register")
        return null;

    return (
        <Flex
            backgroundColor={show ? "gray.900" : "transparent"}
            position="fixed"
            top="0px"
            width={"100%"}
            height={20}
            justifyContent={"space-between"}
            alignItems={"center"}
            transitionDuration={"0.7s"}
            p={4}
            zIndex={3}>
            <HStack alignItems={"center"} gap={4}>
                <Link to="/">
                    {" "}
                    <Icon as={FaHome} color={"white"} fontSize={"2xl"} />{" "}
                </Link>
                <Flex
                    left="20px"
                    color="white"
                    fontSize={"lg"}
                    fontWeight="bold">
                    <Link to="/watchList"> Watchlist </Link>
                </Flex>
            </HStack>
            <HStack>
                <SearchInput />
                <Link to="/profile">
                    <Flex
                        backgroundColor={"gray.700"}
                        padding={1}
                        borderRadius={50}
                        border={"2px solid"}
                        borderColor={"cyan.600"}
                        cursor={"pointer"}>
                        <Image
                            src={userImage}
                            w={50}
                            h={50}
                        />
                    </Flex>
                </Link>
            </HStack>
        </Flex>
    );
};

export default Navbar;
