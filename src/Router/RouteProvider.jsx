import { Route, Routes } from "react-router-dom";

import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

import Home from "../Pages/Home";
import MovieDetails from "../Pages/MovieDetail";
import { useContext, useMemo } from "react";
import { MovieContext } from "../Context/APIContext";
import Loading from "../Component/Loading";
import SearchPage from "../Pages/SearchPage";
import About from "../Pages/About";
import Watchlist from "../Pages/Watchlist";

const RouteProvider = () => {
  const movies = useContext(MovieContext);

  const allMovies = useMemo(() => {
    return [...movies]
  }, [movies])


  if (allMovies.length === 0) {
    return (<Loading />)
  } else {



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
          <Route
            path="/search/:searchTitle"
            element={<SearchPage />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/watchlist" element={<Watchlist />} />

        </Routes>

        <Footer />
      </>
    );
  }
};

export default RouteProvider;