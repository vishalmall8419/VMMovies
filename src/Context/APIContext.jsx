import { createContext, useEffect, useState } from "react";
import { getdata } from "../API/Api"

export const MovieContext = createContext();
const APIContext = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getdata().then(data => { setMovies(data); });
    }, []);

    

    return (
        <MovieContext.Provider value={movies}>{props.children}</MovieContext.Provider>
    )
}

export default APIContext