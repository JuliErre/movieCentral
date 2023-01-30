import { VStack } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/detail/Detail";

const DetailScreen = () => {
    const { id } = useParams();
    return (
        <VStack  pt={0} minH={"100vh"}>
            <Detail id={id} />
        </VStack>
    );
};

export default DetailScreen;
