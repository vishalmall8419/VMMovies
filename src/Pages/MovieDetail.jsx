
import { Link} from "react-router-dom";

import {
  ArrowLeft,
  Star,
  CalendarDays,
  Clock3,
  Heart,
  Play,
  Download,
  StepForward,
  GripVertical,
} from "lucide-react";
import Card from "../Component/Card";

const MovieDetails = () => {
  // const { movieId } = useParams();
  return (
    <main className="min-h-screen bg-[#050b14] px-4 py-8 text-white sm:px-6 lg:px-8">

      {/* ================= BACK BUTTON ================= */}
      <div className="mx-auto mb-8 max-w-7xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400 transition hover:text-yellow-300"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[370px_1fr]">

          {/* ================= POSTER ================= */}
          <div className="flex items-start justify-center lg:justify-start">

            <div className="w-full max-w-92.5 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-xl">

              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg"
                alt="Movie poster"
                className="block h-auto w-full object-contain"
              />

            </div>

          </div>

          {/* ================= MOVIE DETAILS ================= */}
          <div className="flex flex-col">

            {/* ================= MOVIE TITLE ================= */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              The Dark Knight
            </h1>

            {/* ================= MOVIE META ================= */}
            <div className="mt-6 flex flex-wrap items-center gap-5">

              {/* Rating */}
              <div className="flex items-center gap-2">

                <Star
                  size={22}
                  fill="currentColor"
                  className="text-yellow-400"
                />

                <span className="font-semibold text-yellow-400">
                  9.0
                </span>

                <span className="text-slate-400">
                  /10
                </span>

              </div>

              {/* Year */}
              <div className="flex items-center gap-2 text-slate-300">

                <CalendarDays size={20} />

                <span>
                  2008
                </span>

              </div>

              {/* Runtime */}
              <div className="flex items-center gap-2 text-slate-300">

                <Clock3 size={20} />

                <span>
                  152 min
                </span>

              </div>

              {/* Rated */}
              <span className="rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-slate-300">
                PG-13
              </span>

            </div>

            {/* ================= GENRES ================= */}
            <div className="mt-6 flex flex-wrap gap-3">

              <span className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                Action
              </span>

              <span className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                Crime
              </span>

              <span className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                Drama
              </span>

              <span className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                Thriller
              </span>

            </div>

            {/* ================= OVERVIEW ================= */}
            <section className="mt-8">

              <h2 className="mb-3 text-xl font-semibold">
                Overview
              </h2>

              <p className="max-w-4xl text-base leading-7 text-slate-400">
                When the menace known as the Joker wreaks havoc and chaos
                on the people of Gotham, Batman must accept one of the
                greatest psychological and physical tests of his ability
                to fight injustice.
              </p>

            </section>

            {/* ================= DIVIDER ================= */}
            <div className="my-7 border-t border-slate-800" />

            {/* ================= INFO + ACTION ================= */}
            <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-[1fr_330px]">

              {/* ================= MOVIE INFORMATION ================= */}
              <div className="space-y-5">

                {/* Director */}
                <div className="grid grid-cols-[100px_1fr] gap-4">

                  <span className="text-slate-500">
                    Director
                  </span>

                  <span className="text-slate-200">
                    Christopher Nolan
                  </span>

                </div>

                {/* Writer */}
                <div className="grid grid-cols-[100px_1fr] gap-4">

                  <span className="text-slate-500">
                    Writer
                  </span>

                  <span className="text-slate-200">
                    Jonathan Nolan, Christopher Nolan
                  </span>

                </div>

                {/* Stars */}
                <div className="grid grid-cols-[100px_1fr] gap-4">

                  <span className="text-slate-500">
                    Stars
                  </span>

                  <span className="text-slate-200">
                    Christian Bale, Heath Ledger, Aaron Eckhart
                  </span>

                </div>

                {/* Language */}
                <div className="grid grid-cols-[100px_1fr] gap-4">

                  <span className="text-slate-500">
                    Language
                  </span>

                  <span className="text-slate-200">
                    English
                  </span>

                </div>

                {/* Country */}
                <div className="grid grid-cols-[100px_1fr] gap-4">

                  <span className="text-slate-500">
                    Country
                  </span>

                  <span className="text-slate-200">
                    USA
                  </span>

                </div>

              </div>

              {/* ================= ACTION CARD ================= */}
              <div className="h-fit rounded-xl border border-slate-700 bg-slate-900/80 p-5">

                {/* Watchlist Header */}
                <div className="mb-5 flex items-center justify-between">

                  <h3 className="text-lg font-semibold">
                    Add to Watchlist
                  </h3>

                  <Heart
                    size={24}
                    className="cursor-pointer text-slate-300 transition hover:text-yellow-400"
                  />

                </div>

                {/* Watch Trailer */}
                <Link
                  to="/"
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-black transition hover:bg-yellow-300"
                >

                  <Play
                    size={19}
                    fill="currentColor"
                  />

                  Watch Trailer

                </Link>

                {/* Download / Watch */}
                <Link
                  to="/"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-600 bg-transparent px-5 py-3 font-medium text-slate-200 transition hover:border-yellow-400 hover:text-yellow-400"
                >

                  <Download size={19} />

                  Download / Watch

                </Link>

                <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                  VM Movies does not host movie files. This button will
                  take you to legal sources.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= GALLERY ================= */}
        <section className="mt-10">

          <h2 className="mb-5 text-xl font-semibold">
            Gallery
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

            {/* Gallery Image 1 */}
            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900">

              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg"
                alt="Movie gallery"
                className="h-40 w-full object-cover transition duration-300 hover:scale-105"
              />

            </div>

            {/* Gallery Image 2 */}
            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900">

              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg"
                alt="Movie gallery"
                className="h-40 w-full object-cover transition duration-300 hover:scale-105"
              />

            </div>

            {/* Gallery Image 3 */}
            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900">

              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg"
                alt="Movie gallery"
                className="h-40 w-full object-cover transition duration-300 hover:scale-105"
              />

            </div>

            {/* Gallery Image 4 */}
            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900">

              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg"
                alt="Movie gallery"
                className="h-40 w-full object-cover transition duration-300 hover:scale-105"
              />

            </div>

            {/* Gallery Image 5 */}
            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900">

              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg"
                alt="Movie gallery"
                className="h-40 w-full object-cover transition duration-300 hover:scale-105"
              />

            </div>

          </div>

        </section>

      </div>

      <div className='mt-10 pt-10'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-white flex items-center font-bold text-2xl'
                            ><GripVertical className='text-amber-400 ' strokeWidth={3} absoluteStrokeWidth />
                                Related Movies</h1>
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

    </main>
  );
};

export default MovieDetails;