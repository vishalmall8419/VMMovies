
import { GripVertical, StepForward } from 'lucide-react'
import Card from '../Component/Card'
import Hero from '../Component/Hero'
import GenreCard from '../Component/GenreCard'
import { Link } from 'react-router-dom'
import { useContext, useMemo } from 'react'
import { MovieContext } from '../Context/APIContext'



const Home = () => {

    const movies = useContext(MovieContext);

    const allMovies = useMemo(() => {
        return [...movies]
    }, [movies])

    const topRated = useMemo(() => {

        return [...movies].filter((movie) => movie.imdbRating >= 8)


    }, [movies])

    const LatestMovies = useMemo(() => {

        return [...movies].filter((movie) => movie.Year).sort((a, b) => Number(b.Year) - Number(a.Year))


    }, [movies])


    const allGenres = allMovies.map(movie => movie.Genre.split(",")).flat();

    const uniqueGenres = [...new Set(allGenres)];


    return (
        <>
            <div className='bg-[#050C17] p-10'>
                <Hero />
                <div className='mt-10 pt-10'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-white flex items-center font-bold text-2xl'
                            ><GripVertical className='text-amber-400 ' strokeWidth={3} absoluteStrokeWidth />
                                Popular Movies</h1>
                        </div>
                        <Link to="" className='text-amber-400 flex flex-nowrap items-center gap-1' >View All <StepForward size={16} strokeWidth={3} /> </Link>
                    </div>
                    <div className='mt-8 flex gap-4 overflow-x-scroll'>

                        {
                            allMovies.map((movie) => { return <Card movie={movie} key={movie.imdbID} /> })

                        }
                    </div>
                </div>
                <div className='mt-10 pt-10'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-white flex items-center font-bold text-2xl'
                            ><GripVertical className='text-amber-400 ' strokeWidth={3} absoluteStrokeWidth />
                                Browse By Genre</h1>
                        </div>
                        <Link to="" className='text-amber-400 flex flex-nowrap items-center gap-1 '  >View all <StepForward size={16} strokeWidth={3} /> </Link>
                    </div>
                    <div className='mt-8 flex gap-4 overflow-x-scroll'>
                        {
                            uniqueGenres.map((genre) => { return <GenreCard genre={genre} key={genre + Math.random} /> })

                        }
                    </div>
                </div>


                <div className='mt-10 pt-10'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-white flex items-center font-bold text-2xl'
                            ><GripVertical className='text-amber-400 ' strokeWidth={3} absoluteStrokeWidth />
                                Top Rated</h1>
                        </div>
                        <Link to="" className='text-amber-400 flex flex-nowrap items-center gap-1' >
                            View All <StepForward size={16} strokeWidth={3} />
                        </Link>
                    </div>
                    <div className='mt-8 flex gap-4 overflow-x-scroll'>
                        {
                            topRated.map((movie) => { return <Card movie={movie} key={movie.imdbID} /> })
                        }


                    </div>
                </div>

                <div className='mt-10 pt-10'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-white flex items-center font-bold text-2xl'
                            ><GripVertical className='text-amber-400 ' strokeWidth={3} absoluteStrokeWidth />
                                Latest Movies</h1>
                        </div>
                        <Link to="" className='text-amber-400 flex flex-nowrap items-center gap-1' >
                            View All <StepForward size={16} strokeWidth={3} />
                        </Link>
                    </div>
                    <div className='mt-8 flex gap-4 overflow-x-scroll'>
                        {
                            LatestMovies.map((movie) => { return <Card movie={movie} key={movie.imdbID} /> })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home