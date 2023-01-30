import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import WatchListContainer from "./WatchListContainer";

const Watchlist = () => {
    const name = localStorage.getItem("name");
    return (
        <VStack pt={40} gap={20} px={5} align={"center"} justify={"center"} width={"100%"}>
            <Heading color="gray.100" textAlign={"center"}>
                {" "}
                Hi {name}, this is your Watchlist{" "}
            </Heading>
            <WatchListContainer />
        </VStack>
    );
};

export default Watchlist;
