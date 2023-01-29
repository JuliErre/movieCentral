import { Button, Icon, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Api from "../../data/Api";
import { addToList } from "../../features/watchlist/WatchlistSlice";

const AddToWatchList = ({ movie }) => {
    const toast = useToast();
    const userId = localStorage.getItem("id");
    const dispatch = useDispatch();

    const addToWatchList = () => {
        axios
            .post(`${Api.baseUrl}/watchlist`, {
                movieId: movie.id,
                userId: userId,
            })
            .then((res) => {
                dispatch(addToList(movie));

                const watchlist = localStorage.getItem("watchlist");
                const watchlistArray = JSON.parse(watchlist);
                watchlistArray.push(movie);
                localStorage.setItem(
                    "watchlist",
                    JSON.stringify(watchlistArray)
                );

                toast({
                    title: "Movie added to watchlist",
                    description: "We've added the movie to your watchlist",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
            })
            .catch((err) => {
                toast({
                    title: "Error",
                    description: "We've encountered an error",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
            });
    };
    return (
        <Button onClick={addToWatchList} variant="outline" colorScheme={"cyan"}>
            {" "}
            <Icon as={FaPlus} />{" "}
        </Button>
    );
};

export default AddToWatchList;
