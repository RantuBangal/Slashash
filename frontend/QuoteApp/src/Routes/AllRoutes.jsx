import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FavouritePage from "../pages/FavouritePage";



const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favourites" element={<FavouritePage />} />
            </Routes>
        </div>
    )
}

export default AllRoutes ;