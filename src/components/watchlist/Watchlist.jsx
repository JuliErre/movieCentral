import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import WatchListContainer from "./WatchListContainer";

const Watchlist = () => {
    const name = localStorage.getItem("name");
    return (
        <VStack pt={40} gap={20}>
            <Heading color="gray.100">
                {" "}
                Hi {name}, this is your Watchlist{" "}
            </Heading>
            <WatchListContainer />
        </VStack>
    );
};

export default Watchlist;
