import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Card = ({ movie }) => {

    return (
        <Link to={`/moviedetails/${movie.imdbID}`}>

            <div className="flex flex-col border-[1.5px] border-[#f1f1f138] rounded-2xl w-55 text-white bg-[#0205312b]">

                <img
                    src={movie.Poster}
                    className="w-full h-70 object-cover rounded-t-2xl"
                    alt={movie.Title}
                />

                <div className="flex flex-col py-2 px-4">

                    <h2 className="font-bold">
                        {movie.Title}
                    </h2>

                    <div className="flex flex-nowrap justify-between my-2">

                        <p className="text-gray-500 font-semibold">
                            {movie.Year}
                        </p>

                        <p className="flex flex-nowrap items-center gap-1">
                            <Star
                                className="text-amber-300"
                                size={16}
                                absoluteStrokeWidth
                                strokeWidth={3}
                            />

                            {movie.imdbRating || "N/A"}
                        </p>

                    </div>

                </div>

            </div>

        </Link>
    )
}

export default Card