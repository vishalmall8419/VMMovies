import {
  
    Trash2,
    Play,
    Star,
    Clock3,
    Calendar,
} from "lucide-react";

const WatchlistCard = () => {
    return (

        <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1829] transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30">

            {/* Poster */}
            <div className="relative aspect-[2/3] overflow-hidden bg-[#101f33]">

                <img
                    src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
                    alt="Wonder Woman 1984"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Rating */}
                <div className="absolute left-3 top-3 flex items-center gap-1 rounded-lg bg-black/70 px-3 py-1.5 text-sm">

                    <Star
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                    />

                    <span>
                        6.3
                    </span>

                </div>

                {/* Remove */}
                <button
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-gray-300 transition hover:bg-red-500 hover:text-white"
                    title="Remove from watchlist"
                >
                    <Trash2 size={17} />
                </button>

                {/* Play */}
                <button
                    className="absolute bottom-4 left-1/2 flex h-12 w-12 -translate-x-1/2 translate-y-3 items-center justify-center rounded-full bg-yellow-400 text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                    <Play size={20} fill="currentColor" />
                </button>

            </div>


            {/* Content */}
            <div className="p-5">

                <h2 className="truncate text-lg font-semibold">
                    Wonder Woman 1984
                </h2>

                <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">

                    <span className="flex items-center gap-1">
                        <Calendar size={15} />
                        2020
                    </span>

                    <span className="flex items-center gap-1">
                        <Clock3 size={15} />
                        151 min
                    </span>

                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">
                    Diana Prince lives quietly among mortals while secretly
                    protecting the world from dangerous threats.
                </p>

            </div>

        </div>
    )
}

export default WatchlistCard