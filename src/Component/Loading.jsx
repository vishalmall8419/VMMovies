

const Loading = () => {
    return (
        <div className='flex h-dvh justify-center items-center bg-[#050C17] text-white relative'>
            <div className='h-12 w-12 bg-transparent border-[#8080806d] border-t-amber-400 border-6 rounded-full animate-spin  '></div>
            <div className='bg-transparent border-[#8080806d] border-6 rounded-full animate-ping absolute'>
            </div>
        </div>
    )
}

export default Loading