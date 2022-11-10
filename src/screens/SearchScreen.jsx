import { HStack } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Search from "../components/search/Search";

const SearchScreen = () => {
    const { searchText } = useParams();

    return <Search text={searchText} />;
};

export default SearchScreen;
