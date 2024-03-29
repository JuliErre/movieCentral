import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import WatchListScreen from "../screens/WatchListScreen";
import DetailScreen from "../screens/DetailScreen";
import SearchScreen from "../screens/SearchScreen";
import LoginScreen from "../screens/LoginScreen";
import ProtectedRoute from "./ProtectedRoute";
import RegisterScreen from "../screens/RegisterScreen";
import ProfileScreen from "../screens/ProfileScreen";

const routes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/watchlist" element={<WatchListScreen />} />
                <Route path="/detail/:id" element={<DetailScreen />} />
                <Route path="/search/:searchText" element={<SearchScreen />} />
                <Route path="/profile" element={<ProfileScreen/>} />
            </Route>
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
};

export default routes;
