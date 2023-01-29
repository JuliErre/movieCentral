import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { VStack } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initWatchList } from "./features/watchlist/WatchlistSlice";
import { initUserData } from "./features/userData/UserData";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const watchlist = JSON.parse(localStorage.getItem("watchlist"));

        const id = localStorage.getItem("id");
        const name = localStorage.getItem("name");
        const photo = localStorage.getItem("photo");

        const userInfo = {
            image: photo
                ? photo
                : "https://art-gallery-latam.api.hbo.com/images/a286cb57-fee3-45b1-a9c0-b9fabe519bfb/avatar?size=250x250&format=png",
            id,
            name,
        };

        dispatch(initUserData(userInfo));

        if (watchlist) {
            dispatch(initWatchList(watchlist));
        }
    }, []);
    return (
        <VStack
            maxWidth={"100vw"}
            minHeight={"100vh"}
            spacing={0}
            margin={0}
            bgColor="gray.800"
            position="relative">
            <BrowserRouter>
                <Routes />
                <Navbar />
            </BrowserRouter>
        </VStack>
    );
}

export default App;
