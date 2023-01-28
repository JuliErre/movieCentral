import { Button, Icon, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { FaPlus } from "react-icons/fa";
import Api from "../../data/Api";

const AddToWatchList = ({ movieId, handleClicked }) => {
    const toast = useToast();
    const userId = localStorage.getItem("id");
    console.log(userId, " ", typeof movieId);

    const addToWatchList = () => {
        axios
            .post(`${Api.baseUrl}/watchlist`, {
                movieId: movieId,
                userId: userId,
            })
            .then((res) => {
                toast({
                    title: "Movie added to watchlist",
                    description: "We've added the movie to your watchlist",
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
        <Button onClick={addToWatchList} variant="outline" colorScheme={"cyan"}>
            {" "}
            <Icon as={FaPlus} />{" "}
        </Button>
    );
};

export default AddToWatchList;
