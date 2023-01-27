import { HStack, Icon, Input, Flex, Fade } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate, Link } from "react-router-dom";

const SearchInput = () => {
    const [searchText, setSearchText] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (searchText.length > 0) {
            navigate(`/search/${searchText}`);
        } else {
            if (location.pathname.includes("/search")) {
                navigate(`/`);
            }
        }
    }, [searchText]);


    return (
        <HStack>
            <Icon
                as={FaSearch}
                color={"white"}
                fontSize="2xl"
                onClick={() => setShow((show) => !show)}
                cursor={"pointer"}
            />
            <Fade in={show}>
                {show && (
                    <Input
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="search a movie"
                        color="gray.300"
                        width="250px"
                        backgroundColor="gray.800"
                    />
                )}
            </Fade>
        </HStack>
    );
};

export default SearchInput;
