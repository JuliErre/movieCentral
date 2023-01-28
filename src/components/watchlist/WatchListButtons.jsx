import { HStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Api from "../../data/Api";
import AddToWatchList from "./AddToWatchList";
import DeleteFromWatchList from "./DeleteFromWatchList";

const WatchListButtons = ({ movieId }) => {
    const userId = localStorage.getItem("id");
    const [watchList, setWatchList] = useState([]);
    const [isInWatchList, setIsInWatchList] = useState();
    const [clicked, setClicked] = useState(false);
 


    const HandleIsInWatchList = (isInWatchList) => {
        setIsInWatchList(isInWatchList)
        }

        const handleClicked = () => {
            setClicked(!clicked)
        }
    
    useEffect(() => {
        axios
            .get(`${Api.baseUrl}/watchlist/${userId}`)
            .then((res) => {
                setWatchList(res.data.movies);
                if (res.find((movie) => movie.id === movieId)) {
                    setIsInWatchList(true);
                } else {
                    setIsInWatchList(false);
                }
                console.log(res.data.movies);
            })
            .then(() => {
               
            })

            .catch((err) => console.log(err));
    }, []);

   

    return (
        <HStack>
      
                <AddToWatchList movieId={movieId} handleClicked = {handleClicked} />
                <DeleteFromWatchList movieId={movieId} handleClicked = {handleClicked} />
         
           
        </HStack>
    );
};

export default WatchListButtons;
