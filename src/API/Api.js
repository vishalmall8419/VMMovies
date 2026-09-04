import axios from "axios";

export async function getdata() {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=1377537a2f8bda31d2dd7051ab67f643"
        );
        console.log(response.data.results);
    } catch (error) {
        console.error("ERROR:", error);
    }
}