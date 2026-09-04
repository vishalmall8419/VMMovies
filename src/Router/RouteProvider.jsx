import { Route, Routes } from "react-router-dom";

import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

import Home from "../Pages/Home";
import MovieDetails from "../Pages/MovieDetail";

const RouteProvider = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/moviedetails/:movieId"
          element={<MovieDetails />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default RouteProvider;