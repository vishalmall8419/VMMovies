
import {
    Heart,
    Film,
} from "lucide-react";
import WatchlistCard from "../Component/WatchlistCard";

const WatchList = () => {
    return (
        <main className="min-h-screen bg-[#07111f] px-6 py-12 text-white md:px-10 lg:px-16">

            {/* ================= HEADER ================= */}
            <section className="mx-auto max-w-7xl">

                <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                    <div>
                        <div className="mb-3 flex items-center gap-2 text-yellow-400">
                            <Heart size={20} fill="currentColor" />

                            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                                Your Collection
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                            My Watchlist
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                            Movies you've saved to watch later. Keep your favorite movies
                            close and discover what to watch next.
                        </p>
                    </div>

                    {/* Movie Count */}
                    <div className="flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-5 py-3">
                        <Film size={20} className="text-yellow-400" />

                        <div>
                            <p className="text-xs text-gray-500">
                                Saved Movies
                            </p>

                            <p className="font-semibold">
                                6 Movies
                            </p>
                        </div>
                    </div>

                </div>


                {/* ================= WATCHLIST GRID ================= */}

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <WatchlistCard/>
                </div>

            </section>

        </main>
    );
};

export default WatchList;