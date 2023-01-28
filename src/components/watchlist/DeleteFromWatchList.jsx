import { Button, Icon, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Api from "../../data/Api";
const DeleteFromWatchList = ({ movieId, handleClicked }) => {
    const userId = localStorage.getItem("id");
    const toast = useToast();
    console.log(userId, " ", typeof movieId);
    const deleteFromWatchList = () => {
        axios
            .delete(`${Api.baseUrl}/watchlist`, {
                data: {
                    movieId: movieId,
                    userId: userId,
                },
            })
            .then((res) => {
                toast({
                    title: "Movie deleted from watchlist",
                    description: "We've deleted the movie from your watchlist",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
                console.log(res);
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
