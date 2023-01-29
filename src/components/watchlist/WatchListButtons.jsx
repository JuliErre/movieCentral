import { HStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Api from "../../data/Api";
import AddToWatchList from "./AddToWatchList";
import DeleteFromWatchList from "./DeleteFromWatchList";

const WatchListButtons = ({ movie }) => {
    const watchlist = useSelector((state) => state.watchlist);

    return (
        <HStack>
            {watchlist.find((item) => item.id === movie.id) ? (
                <DeleteFromWatchList movie={movie} />
            ) : (
                <AddToWatchList movie={movie} />
            )}
        </HStack>
    );
};

export default WatchListButtons;
