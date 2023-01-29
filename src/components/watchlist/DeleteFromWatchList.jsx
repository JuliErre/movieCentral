import { Button, Icon, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Api from "../../data/Api";
import { deleteFromList } from "../../features/watchlist/WatchlistSlice";
const DeleteFromWatchList = ({ movie }) => {
    const userId = localStorage.getItem("id");
    const toast = useToast();
    const dispatch = useDispatch();
    
    const deleteFromWatchList = () => {
        axios
            .delete(`${Api.baseUrl}/watchlist`, {
                data: {
                    movieId: movie.id,
                    userId: userId,
                },
            })
            .then((res) => {
                dispatch(deleteFromList(movie.id));

                const watchlist = localStorage.getItem("watchlist");
                const watchlistArray = JSON.parse(watchlist);
                const newWatchlist = watchlistArray.filter(
                    (item) => item.id !== movie.id
                );
                localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
                
                toast({
                    title: "Movie deleted from watchlist",
                    description: "We've deleted the movie from your watchlist",
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
        <Button
            onClick={deleteFromWatchList}
            variant="outline"
            colorScheme={"cyan"}
        >
            <Icon as={FaCheck} />
        </Button>
    );
};

export default DeleteFromWatchList;
