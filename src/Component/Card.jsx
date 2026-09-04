import { Star } from 'lucide-react'

import { Link } from 'react-router-dom'

const Card = () => {
    let a="21"
    return (
        <Link to={`/moviedetails/${a}`}>
            <div className='flex flex-col border-[1.5px] border-[#f1f1f138] rounded-2xl w-55 text-white bg-[#0205312b] '>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg" className='w-screen h-70 rounded-t-2xl' alt="" srcSet="" />
                <div className='flex flex-col py-2 px-4'>
                    <h2 className='font-bold'>Oppenheimer</h2>
                    <div className='flex flex-nowrap justify-between my-2 '>
                        <p className='text-gray-500 font-semibold'>2023</p>
                        <p className="flex flex-nowrap items-center gap-1" ><Star className='text-amber-300' size={16} absoluteStrokeWidth strokeWidth={3} />8.6</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card