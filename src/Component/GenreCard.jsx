import { Rocket} from 'lucide-react'

const GenreCard = () => {
    return (
        <div className='flex flex-nowrap border-[1.5px] border-[#f1f1f138] rounded-2xl text-white bg-[#030631c3] py-3 px-8 gap-4 '>
            <Rocket className='text-[aqua] ' strokeWidth={3} absoluteStrokeWidth />
            <p className='whitespace-nowrap '>Sci-Fi</p>
        </div>
    )
}

export default GenreCard