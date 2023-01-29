import { Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Api from "../../data/Api";
import MoviesList from "../movies/MoviesList";
import useFetch from "../../hooks/useFetch"
import { useSelector } from "react-redux";

const WatchListContainer = () => {
    const userId = localStorage.getItem("id");

    const { data, error, loading } = useFetch(`${Api.baseUrl}/watchlist/${userId}`);
    const {movies : watchList} = data;
    const movies = useSelector(state => state.watchlist)
    
 
    return (
        <Flex
            wrap={"wrap"}
            margin={"0px"}
            justifyItems={"center"}
            alignItems={"center"}
            gap={4}
            p={4}>
            <MoviesList movies={movies} />
        </Flex>
    );
};

export default WatchListContainer;
