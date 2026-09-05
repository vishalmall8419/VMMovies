
import { GripVertical, StepForward } from 'lucide-react'
import Hero from '../Component/Hero'
import { Link, useParams } from 'react-router-dom'
import { useContext, useMemo } from 'react'
import { MovieContext } from '../Context/APIContext'

const SearchPage = () => {
    const search = useParams("searchTitle")
    const movies = useContext(MovieContext);

    const allmovie = useMemo(() => { return [...movies] }, [movies])

    const searchedMovies = allmovie.filter((movie) => {
        return movie.Title.toLowerCase().includes(search.searchTitle.toLowerCase());
    })

    console.log("search ", searchedMovies);


    return (
        <div className='bg-[#050C17] p-10'>
            <Hero />

            <div className='mt-10 pt-10'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-white flex items-center font-bold text-2xl'
                        ><GripVertical className='text-amber-400 ' strokeWidth={3} absoluteStrokeWidth />
                            Search Results</h1>
                        <small className='text-gray-500 pl-4'>12 Result found from your search</small>
                    </div>
                    <Link to="" className='text-amber-400 flex flex-nowrap items-center gap-1' >View All <StepForward size={16} strokeWidth={3} /> </Link>
                </div>
                <div className='mt-8 flex gap-4 overflow-x-scroll text-white'>
                    card here
                    sfdsdfsdffffffff Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quo voluptatibus facere consequatur tempora cupiditate omnis, incidunt sit voluptate eveniet.
                </div>
            </div>

        </div>
    )
}

export default SearchPage