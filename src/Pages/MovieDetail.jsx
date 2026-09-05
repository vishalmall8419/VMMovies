import { useContext, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
    ArrowLeft,
    Star,
    CalendarDays,
    Clock3,
    Heart,
    Play,
    ExternalLink,
    Award,
    Globe2,
    Clapperboard,
    Users,
    Languages,
    Building2,
    Film,
    CircleDollarSign,
    BarChart3,
    Hash,
    ChevronRight,
    GripVertical,
    Database,
    Trophy,
} from "lucide-react";

import Card from "../Component/Card";
import { MovieContext } from "../Context/APIContext";



const MovieDetails = () => {

    // =========================================================
    // CONTEXT
    // =========================================================

    const movies = useContext(MovieContext);

    const { movieId } = useParams();


    // =========================================================
    // CURRENT MOVIE
    // =========================================================

    const currentMovie = useMemo(() => {

        return movies?.find(
            (movie) => movie.imdbID === movieId
        );

    }, [movies, movieId]);


    // =========================================================
    // WATCHLIST
    // =========================================================

    const [isWatchlisted, setIsWatchlisted] = useState(false);



    // =========================================================
    // RELATED MOVIES
    // =========================================================

    const relatedMovies = useMemo(() => {

        if (!currentMovie || !movies?.length) {
            return [];
        }


        const currentGenres =
            currentMovie.Genre
                ?.split(",")
                .map((genre) =>
                    genre.trim().toLowerCase()
                )
                .filter(Boolean) || [];


        if (!currentGenres.length) {
            return [];
        }


        const scoredMovies = movies
            .filter(
                (movie) =>
                    movie.imdbID !== currentMovie.imdbID
            )
            .map((movie) => {

                let score = 0;


                const movieGenres =
                    movie.Genre
                        ?.split(",")
                        .map((genre) =>
                            genre.trim().toLowerCase()
                        )
                        .filter(Boolean) || [];


                const commonGenres =
                    movieGenres.filter((genre) =>
                        currentGenres.includes(genre)
                    );


                // Same genre = 5 points

                score += commonGenres.length * 5;


                // Same type = 1 point

                if (
                    movie.Type &&
                    currentMovie.Type &&
                    movie.Type.toLowerCase() ===
                        currentMovie.Type.toLowerCase()
                ) {
                    score += 1;
                }


                return {
                    ...movie,
                    score,
                };

            });


        return scoredMovies
            .filter((movie) => movie.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);


    }, [movies, currentMovie]);



    // =========================================================
    // MOVIE NOT FOUND
    // =========================================================

    if (!currentMovie) {

        return (

            <main className="min-h-screen bg-[#050C17] px-5 py-10 text-white">

                <div className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center">

                    <div className="text-center">

                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-slate-700 bg-slate-900">

                            <Film
                                size={38}
                                className="text-slate-500"
                            />

                        </div>


                        <h1 className="text-3xl font-bold">
                            Movie Not Found
                        </h1>


                        <p className="mt-3 text-slate-500">
                            This movie is not available in your movie collection.
                        </p>


                        <Link
                            to="/"
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black transition hover:bg-yellow-300"
                        >

                            <ArrowLeft size={18} />

                            Back to Home

                        </Link>

                    </div>

                </div>

            </main>

        );

    }



    return (

        <main className="min-h-screen bg-[#050C17] px-4 py-8 text-white sm:px-6 lg:px-10">

            <div className="mx-auto max-w-7xl">


                {/* =====================================================
                    BACK BUTTON
                ====================================================== */}

                <div className="mb-7">

                    <Link
                        to="/"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-yellow-400 transition hover:text-yellow-300"
                    >

                        <ArrowLeft
                            size={19}
                            className="transition group-hover:-translate-x-1"
                        />

                        Back to Home

                    </Link>

                </div>



                {/* =====================================================
                    MOVIE HERO
                ====================================================== */}

                <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#081321] shadow-2xl">


                    {/* Background Poster */}

                    <div className="pointer-events-none absolute inset-0">

                        {isValid(currentMovie.Poster) && (

                            <img
                                src={currentMovie.Poster}
                                alt=""
                                className="h-full w-full scale-110 object-cover opacity-[0.06] blur-3xl"
                            />

                        )}

                        <div className="absolute inset-0 bg-gradient-to-r from-[#081321] via-[#081321]/95 to-[#081321]/80" />

                    </div>



                    <div className="relative grid grid-cols-1 gap-10 p-5 sm:p-8 lg:grid-cols-[340px_1fr] lg:p-10">


                        {/* =================================================
                            POSTER
                        ================================================== */}

                        <div className="flex justify-center lg:justify-start">

                            {isValid(currentMovie.Poster) && (

                                <div className="group relative w-full max-w-[340px] overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">

                                    <img
                                        src={currentMovie.Poster}
                                        alt={currentMovie.Title}
                                        className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                    />


                                    {/* Rating Badge */}

                                    {isValid(currentMovie.imdbRating) && (

                                        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/75 px-4 py-2.5 backdrop-blur-md">

                                            <Star
                                                size={19}
                                                fill="currentColor"
                                                className="text-yellow-400"
                                            />

                                            <span className="font-bold text-yellow-400">
                                                {currentMovie.imdbRating}
                                            </span>

                                            <span className="text-xs text-slate-400">
                                                IMDb
                                            </span>

                                        </div>

                                    )}

                                </div>

                            )}

                        </div>



                        {/* =================================================
                            MAIN DETAILS
                        ================================================== */}

                        <div className="flex flex-col justify-center">


                            {/* Type */}

                            {isValid(currentMovie.Type) && (

                                <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-yellow-400">

                                    <Clapperboard size={17} />

                                    {currentMovie.Type}

                                </div>

                            )}



                            {/* Title */}

                            {isValid(currentMovie.Title) && (

                                <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">

                                    {currentMovie.Title}

                                </h1>

                            )}



                            {/* Meta Information */}

                            <div className="mt-6 flex flex-wrap items-center gap-3">


                                {/* IMDb */}

                                {isValid(currentMovie.imdbRating) && (

                                    <div className="flex items-center gap-2 rounded-xl bg-yellow-400/10 px-4 py-2.5">

                                        <Star
                                            size={18}
                                            fill="currentColor"
                                            className="text-yellow-400"
                                        />

                                        <span className="font-bold text-yellow-400">
                                            {currentMovie.imdbRating}
                                        </span>

                                        <span className="text-sm text-slate-500">
                                            / 10
                                        </span>

                                    </div>

                                )}



                                {/* Year */}

                                {isValid(currentMovie.Year) && (

                                    <div className="flex items-center gap-2 rounded-xl bg-slate-900/80 px-4 py-2.5 text-slate-300">

                                        <CalendarDays size={17} />

                                        {currentMovie.Year}

                                    </div>

                                )}



                                {/* Runtime */}

                                {isValid(currentMovie.Runtime) && (

                                    <div className="flex items-center gap-2 rounded-xl bg-slate-900/80 px-4 py-2.5 text-slate-300">

                                        <Clock3 size={17} />

                                        {currentMovie.Runtime}

                                    </div>

                                )}



                                {/* Rated */}

                                {isValid(currentMovie.Rated) && (

                                    <span className="rounded-xl bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-300">

                                        {currentMovie.Rated}

                                    </span>

                                )}

                            </div>



                            {/* =================================================
                                GENRES
                            ================================================== */}

                            {isValid(currentMovie.Genre) && (

                                <div className="mt-6 flex flex-wrap gap-2">

                                    {currentMovie.Genre
                                        .split(",")
                                        .map((genre) =>
                                            genre.trim()
                                        )
                                        .filter(Boolean)
                                        .map((genre) => (

                                            <span
                                                key={genre}
                                                className="rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-1.5 text-sm font-medium text-yellow-300"
                                            >

                                                {genre}

                                            </span>

                                        ))}

                                </div>

                            )}



                            {/* =================================================
                                PLOT
                            ================================================== */}

                            {isValid(currentMovie.Plot) && (

                                <div className="mt-8">

                                    <h2 className="mb-3 text-xl font-bold">
                                        Overview
                                    </h2>

                                    <p className="max-w-4xl text-[15px] leading-7 text-slate-400">

                                        {currentMovie.Plot}

                                    </p>

                                </div>

                            )}



                            {/* =================================================
                                ACTION BUTTONS
                            ================================================== */}

                            <div className="mt-8 flex flex-wrap gap-3">


                                {/* Watchlist */}

                                <button
                                    onClick={() =>
                                        setIsWatchlisted(
                                            !isWatchlisted
                                        )
                                    }
                                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition ${
                                        isWatchlisted
                                            ? "bg-yellow-400 text-black"
                                            : "border border-slate-700 bg-slate-900 text-white hover:border-yellow-400 hover:text-yellow-400"
                                    }`}
                                >

                                    <Heart
                                        size={19}
                                        fill={
                                            isWatchlisted
                                                ? "currentColor"
                                                : "none"
                                        }
                                    />

                                    {isWatchlisted
                                        ? "Added to Watchlist"
                                        : "Add to Watchlist"}

                                </button>



                                {/* Trailer */}

                                <button className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black transition hover:bg-yellow-300">

                                    <Play
                                        size={18}
                                        fill="currentColor"
                                    />

                                    Watch Trailer

                                </button>

                            </div>

                        </div>

                    </div>

                </section>



                {/* =====================================================
                    INFORMATION SECTION
                ====================================================== */}

                <section className="mt-10 grid grid-cols-1 gap-7 xl:grid-cols-[1fr_320px]">


                    {/* =================================================
                        MOVIE INFORMATION
                    ================================================== */}

                    <div className="rounded-2xl border border-slate-800 bg-[#081321] p-5 sm:p-7">


                        <div className="mb-7 flex items-center gap-3">

                            <div className="rounded-xl bg-yellow-400/10 p-2.5">

                                <Database
                                    size={21}
                                    className="text-yellow-400"
                                />

                            </div>


                            <div>

                                <h2 className="text-2xl font-bold">
                                    Movie Information
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Complete information about this movie
                                </p>

                            </div>

                        </div>



                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">


                            <InfoItem
                                icon={<Clapperboard size={18} />}
                                label="Director"
                                value={currentMovie.Director}
                            />


                            <InfoItem
                                icon={<Users size={18} />}
                                label="Writer"
                                value={currentMovie.Writer}
                            />


                            <InfoItem
                                icon={<Users size={18} />}
                                label="Cast"
                                value={currentMovie.Actors}
                                full
                            />


                            <InfoItem
                                icon={<CalendarDays size={18} />}
                                label="Released"
                                value={currentMovie.Released}
                            />


                            <InfoItem
                                icon={<Languages size={18} />}
                                label="Language"
                                value={currentMovie.Language}
                            />


                            <InfoItem
                                icon={<Globe2 size={18} />}
                                label="Country"
                                value={currentMovie.Country}
                            />


                            <InfoItem
                                icon={<Award size={18} />}
                                label="Awards"
                                value={currentMovie.Awards}
                                full
                            />


                            <InfoItem
                                icon={<CircleDollarSign size={18} />}
                                label="Box Office"
                                value={currentMovie.BoxOffice}
                            />


                            <InfoItem
                                icon={<BarChart3 size={18} />}
                                label="Metascore"
                                value={currentMovie.Metascore}
                            />


                            <InfoItem
                                icon={<Star size={18} />}
                                label="IMDb Votes"
                                value={currentMovie.imdbVotes}
                            />


                            <InfoItem
                                icon={<Hash size={18} />}
                                label="IMDb ID"
                                value={currentMovie.imdbID}
                            />


                            <InfoItem
                                icon={<Film size={18} />}
                                label="DVD"
                                value={currentMovie.DVD}
                            />


                            <InfoItem
                                icon={<Building2 size={18} />}
                                label="Production"
                                value={currentMovie.Production}
                            />


                            <InfoItem
                                icon={<Film size={18} />}
                                label="Type"
                                value={currentMovie.Type}
                            />


                            {/* Website */}

                            {isValid(currentMovie.Website) && (

                                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 md:col-span-2">

                                    <p className="mb-2 flex items-center gap-2 text-sm text-slate-500">

                                        <ExternalLink size={16} />

                                        Website

                                    </p>


                                    <a
                                        href={currentMovie.Website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="break-all text-yellow-400 transition hover:text-yellow-300"
                                    >

                                        {currentMovie.Website}

                                    </a>

                                </div>

                            )}

                        </div>

                    </div>



                    {/* =================================================
                        WATCH OPTIONS
                    ================================================== */}

                    <aside className="h-fit rounded-2xl border border-slate-800 bg-[#081321] p-6">


                        <div className="flex items-start justify-between">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                                    VM Movies
                                </p>

                                <h3 className="mt-2 text-xl font-bold">
                                    Watch Options
                                </h3>

                            </div>


                            <div className="rounded-xl bg-yellow-400/10 p-3">

                                <Play
                                    size={21}
                                    className="text-yellow-400"
                                />

                            </div>

                        </div>



                        <div className="mt-7 space-y-3">

                            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 font-bold text-black transition hover:bg-yellow-300">

                                <Play
                                    size={18}
                                    fill="currentColor"
                                />

                                Watch Trailer

                            </button>


                            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3.5 font-semibold text-slate-200 transition hover:border-yellow-400 hover:text-yellow-400">

                                <ExternalLink size={18} />

                                Find Where to Watch

                            </button>

                        </div>



                        <div className="mt-7 border-t border-slate-800 pt-5">

                            <p className="text-center text-xs leading-5 text-slate-500">

                                Watch movies through legal and
                                official streaming services.

                            </p>

                        </div>

                    </aside>

                </section>



                {/* =====================================================
                    RATINGS
                ====================================================== */}

                {currentMovie.Ratings?.some(
                    (rating) =>
                        isValid(rating.Value)
                ) && (

                    <section className="mt-10">


                        <div className="mb-6 flex items-center gap-3">

                            <div className="rounded-xl bg-yellow-400/10 p-2.5">

                                <Star
                                    size={21}
                                    className="text-yellow-400"
                                />

                            </div>


                            <div>

                                <h2 className="text-2xl font-bold">
                                    Ratings
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Ratings from different sources
                                </p>

                            </div>

                        </div>



                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                            {currentMovie.Ratings
                                .filter((rating) =>
                                    isValid(
                                        rating.Value
                                    )
                                )
                                .map((rating) => (

                                    <div
                                        key={rating.Source}
                                        className="rounded-2xl border border-slate-800 bg-[#081321] p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-700"
                                    >

                                        <p className="text-sm text-slate-500">
                                            {rating.Source}
                                        </p>

                                        <p className="mt-3 text-2xl font-black text-yellow-400">
                                            {rating.Value}
                                        </p>

                                    </div>

                                ))}

                        </div>

                    </section>

                )}



                {/* =====================================================
                    QUICK STATS
                ====================================================== */}

                <section className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">


                    <StatCard
                        icon={<CalendarDays size={21} />}
                        label="Release Date"
                        value={currentMovie.Released}
                    />


                    <StatCard
                        icon={<Clock3 size={21} />}
                        label="Runtime"
                        value={currentMovie.Runtime}
                    />


                    <StatCard
                        icon={<BarChart3 size={21} />}
                        label="Metascore"
                        value={currentMovie.Metascore}
                    />


                    <StatCard
                        icon={<Users size={21} />}
                        label="IMDb Votes"
                        value={currentMovie.imdbVotes}
                    />

                </section>



                {/* =====================================================
                    AWARDS
                ====================================================== */}

                {isValid(currentMovie.Awards) && (

                    <section className="mt-10 rounded-2xl border border-slate-800 bg-[#081321] p-6 sm:p-8">


                        <div className="flex items-start gap-4">

                            <div className="rounded-xl bg-yellow-400/10 p-3">

                                <Trophy
                                    size={25}
                                    className="text-yellow-400"
                                />

                            </div>


                            <div>

                                <h2 className="text-xl font-bold">
                                    Awards & Recognition
                                </h2>

                                <p className="mt-2 leading-7 text-slate-400">
                                    {currentMovie.Awards}
                                </p>

                            </div>

                        </div>

                    </section>

                )}



                {/* =====================================================
                    ADDITIONAL MOVIE DATA
                ====================================================== */}

                <section className="mt-10 rounded-2xl border border-slate-800 bg-[#081321] p-6 sm:p-8">


                    <div className="mb-6 flex items-center gap-3">

                        <div className="rounded-xl bg-yellow-400/10 p-2.5">

                            <Film
                                size={21}
                                className="text-yellow-400"
                            />

                        </div>


                        <div>

                            <h2 className="text-2xl font-bold">
                                More Details
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Additional information
                            </p>

                        </div>

                    </div>



                    <div className="flex flex-wrap gap-3">


                        {isValid(currentMovie.Year) && (
                            <Badge
                                label="Year"
                                value={currentMovie.Year}
                            />
                        )}


                        {isValid(currentMovie.Type) && (
                            <Badge
                                label="Type"
                                value={currentMovie.Type}
                            />
                        )}


                        {isValid(currentMovie.Rated) && (
                            <Badge
                                label="Rated"
                                value={currentMovie.Rated}
                            />
                        )}


                        {isValid(currentMovie.imdbID) && (
                            <Badge
                                label="IMDb ID"
                                value={currentMovie.imdbID}
                            />
                        )}


                        {isValid(currentMovie.Metascore) && (
                            <Badge
                                label="Metascore"
                                value={currentMovie.Metascore}
                            />
                        )}

                    </div>

                </section>



                {/* =====================================================
                    RELATED MOVIES
                ====================================================== */}

                <section className="mt-14 pb-12">


                    <div className="mb-7 flex items-end justify-between">


                        <div>

                            <h2 className="flex items-center gap-2 text-2xl font-bold">

                                <GripVertical
                                    className="text-yellow-400"
                                    strokeWidth={3}
                                />

                                Related Movies

                            </h2>


                            <p className="mt-2 text-sm text-slate-500">

                                Movies similar to{" "}

                                <span className="text-slate-300">
                                    {currentMovie.Title}
                                </span>

                            </p>

                        </div>


                        <Link
                            to="/"
                            className="hidden items-center gap-1 text-sm font-medium text-yellow-400 transition hover:text-yellow-300 sm:flex"
                        >

                            View All

                            <ChevronRight size={17} />

                        </Link>

                    </div>



                    {relatedMovies.length > 0 ? (

                        <div className="flex gap-5 overflow-x-auto pb-5">

                            {relatedMovies.map((movie) => (

                                <div
                                    key={movie.imdbID}
                                    className="w-[220px] min-w-[220px]"
                                >

                                    <Card
                                        movie={movie}
                                    />

                                </div>

                            ))}

                        </div>

                    ) : (

                        <div className="rounded-2xl border border-slate-800 bg-[#081321] p-10 text-center">

                            <Film
                                size={40}
                                className="mx-auto mb-4 text-slate-600"
                            />

                            <h3 className="font-semibold">
                                No Related Movies
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                No similar movies are available in your collection.
                            </p>

                        </div>

                    )}

                </section>

            </div>

        </main>

    );

};



// ================================================================
// CHECK VALID VALUE
// ================================================================

const isValid = (value) => {

    if (
        value === null ||
        value === undefined
    ) {
        return false;
    }

    if (
        typeof value === "string" &&
        (
            value.trim() === "" ||
            value.trim().toUpperCase() === "N/A" ||
            value.trim().toUpperCase() === "NA"
        )
    ) {
        return false;
    }

    return true;

};



// ================================================================
// INFO ITEM
// ================================================================

const InfoItem = ({
    icon,
    label,
    value,
    full = false,
}) => {

    if (!isValid(value)) {
        return null;
    }


    return (

        <div
            className={`rounded-xl border border-slate-800 bg-slate-900/40 p-4 ${
                full ? "md:col-span-2" : ""
            }`}
        >

            <p className="mb-2 flex items-center gap-2 text-sm text-slate-500">

                <span className="text-yellow-400">
                    {icon}
                </span>

                {label}

            </p>


            <p className="break-words leading-6 text-slate-200">

                {value}

            </p>

        </div>

    );

};



// ================================================================
// STAT CARD
// ================================================================

const StatCard = ({
    icon,
    label,
    value,
}) => {

    if (!isValid(value)) {
        return null;
    }


    return (

        <div className="rounded-2xl border border-slate-800 bg-[#081321] p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-700">

            <div className="mb-4 text-yellow-400">
                {icon}
            </div>


            <p className="text-sm text-slate-500">
                {label}
            </p>


            <p className="mt-1 truncate font-bold text-slate-200">
                {value}
            </p>

        </div>

    );

};



// ================================================================
// BADGE
// ================================================================

const Badge = ({
    label,
    value,
}) => {

    if (!isValid(value)) {
        return null;
    }


    return (

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3">

            <p className="text-xs text-slate-500">
                {label}
            </p>

            <p className="mt-1 font-semibold text-slate-200">
                {value}
            </p>

        </div>

    );

};


export default MovieDetails;