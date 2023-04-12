import DisplayMovies from "./DisplayMovies"
import DisplayTheatres from "./DisplayTheatres";
import "../../Styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function UserLanding() {

    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DisplayTheatres />} />
                <Route path="/book-tickets" element={<DisplayMovies />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default UserLanding;