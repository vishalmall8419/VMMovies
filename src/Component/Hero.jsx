import { Search } from "lucide-react"
import { useId } from "react"


const Hero = () => {
    const id = useId();
    return (
        <div className="flex justify-center items-center pt-10 flex-col">
           <h1 className="text-[clamp(2.5rem,5vw,6rem)] font-bold whitespace-nowrap -whitespace-[8px] text-white">
                Find Your Next Favorite Movie
            </h1>
            <small className="-mt-4 mb-5 text-white">Search for movies, explore details and add to your watchlist</small>
            <form action="">
                <label htmlFor={id + "search"} className=" flex flex-nowrap ">
                    <div className=" flex flex-nowrap bg-[#1E2837] text-white py-2 px-3 rounded-l-3xl ">
                    <Search size={25} />
                    <input className='w-120 outline-0 border-0 pl-3' type="search" id={id + "search"} placeholder="Search movies..." />
                    </div>
                    <button type="submit" className="bg-[#FBC32B] text-black font-bold py-2 px-3 rounded-r-3xl ">Search</button>
                </label>
            </form>
        </div>
    )
}

export default Hero