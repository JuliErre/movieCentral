import { VStack } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/detail/Detail";

const DetailScreen = () => {
    const { id } = useParams();
    return (
        <VStack pt={32}>
            <Detail id={id} />
        </VStack>
    );
};

export default DetailScreen;
