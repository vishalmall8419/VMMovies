import axios from "axios";

export async function getdata() {

    const apiKey = import.meta.env.VITE_MOVIE_API;

    const queries = [
        // Hollywood
        // "Avengers",
        // "Thor",
        // "Loki",
        // "Interstellar",
        // "The Martian",

   
        // "Jawan",
        // "Animal",
        // "Chhaava",

   
        // "Sholay",
        // "Lagaan",

   
        "Pushpa 2 The Rule",
        // "Kalki 2898 AD",
        "RRR",

        // "Baahubali The Beginning",
        // "Eega"
    ];

    const allMovies = [];

    try {

        // STEP 1: Search movies
        for (const query of queries) {

            const response = await axios.get(
                "https://www.omdbapi.com/",
                {
                    params: {
                        s: query,
                        type: "movie",
                        apikey: apiKey
                    }
                }
            );

            if (response.data.Search) {
                allMovies.push(...response.data.Search);
            }
        }

        // STEP 2: Remove duplicate movies
        const uniqueMovies = [
            ...new Map(
                allMovies.map(movie => [
                    movie.imdbID,
                    movie
                ])
            ).values()
        ];

        // console.log(
        //     "Search results:",
        //     uniqueMovies.length
        // );


        // STEP 3: Get complete details
        const completeMovies = [];

        for (const movie of uniqueMovies) {

            const response = await axios.get(
                "https://www.omdbapi.com/",
                {
                    params: {
                        i: movie.imdbID,
                        plot: "full",
                        apikey: apiKey
                    }
                }
            );

            if (response.data.Response === "True") {
                completeMovies.push(response.data);
            }

        }

        // console.log(
        //     "Complete movies:",
        //     completeMovies.length
        // );

        // console.log(completeMovies);

        return completeMovies;

    } catch (error) {

        console.error("ERROR:", error);

        return [];

    }
}