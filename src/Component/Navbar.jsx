import { Clapperboard, SunMoon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between items-center bg-[#050D18] py-4 px-2 border-b border-[#fdfdfd27]'>
                <ul className='font-semibold text-white'>
                    <li >
                        <Link to='/' className='flex items-center'>
                            <Clapperboard size={30} strokeWidth={3} absoluteStrokeWidth className='text-amber-400' /> VM <span className='text-[#DCB81F] pl-1'> Movies</span>
                        </Link>
                    </li>
                </ul>
                <ul className='flex gap-10 font-semibold text-white'>
                    <li className="flex transition-all duration-3   00 hover:text-amber-500 hover:underline focus:text-[#DCB81F] focus:underline"><Link to="/">Home</Link></li>
                    <li className="flex transition-all duration-300 hover:text-amber-500 hover:underline focus:text-[#DCB81F] focus:underline"><Link to="/watchlist">WatchList</Link></li>
                    <li className="flex transition-all duration-300 hover:text-amber-500 hover:underline focus:text-[#DCB81F] focus:underline"><Link to="/about">About</Link></li>
                </ul>
                <ul>
                    <li className='flex text-white'>
                        <button className='className="flex transition-all duration-400 hover:text-amber-500 hover:underline focus:text-[#DCB81F] focus:underline '>
                            <SunMoon size={30} strokeWidth={3} absoluteStrokeWidth />
                        </button>
                    </li></ul>


            </nav>
        </>
    )
}

export default Navbar