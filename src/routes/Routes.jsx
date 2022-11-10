import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import WatchListScreen from '../screens/WatchListScreen'
import DetailScreen from '../screens/DetailScreen'
import SearchScreen from '../screens/SearchScreen'

const routes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/watchlist" element={<WatchListScreen />} />
        <Route path="/detail/:id" element={<DetailScreen />} />
        <Route path="/search/:searchText" element={<SearchScreen />} />
        
    </Routes>
  )
}

export default routes