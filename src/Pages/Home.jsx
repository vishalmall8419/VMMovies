
import { GripVertical, StepForward } from 'lucide-react'
import Card from '../Component/Card'
import Hero from '../Component/Hero'
import GenreCard from '../Component/GenreCard'
import { Link } from 'react-router-dom'



const Home = () => {



    return (
        <>
            <div className='bg-[#050C17] p-10'>
                <button className='p-4 rounded-2xl bg-white'>get data </button>
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
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
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
                        <GenreCard />
                        <GenreCard />
                        <GenreCard />
                        <GenreCard />
                        <GenreCard />
                        <GenreCard />
                        <GenreCard />
                        <GenreCard />
                        <GenreCard />
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
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
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
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home