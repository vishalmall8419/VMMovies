import {
  Search,
  Heart,
  Code2,
  User,
  Sparkles,
  Star,
  Clapperboard,
  MonitorPlay,
} from "lucide-react";

import { SiThemoviedatabase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const About = () => {
  const reactConcepts = [
    "useState",
    "useEffect",
    "useContext",
    "useReducer",
    "useMemo",
    "useCallback",
    "useRef",
    "useId",
  ];

  const technologies = [
    {
      icon: <Code2 size={28} />,
      title: "React",
      description: "Component-based UI development",
    },
    {
      icon: <SiThemoviedatabase size={28} />,
      title: "Movie API",
      description: "Movie data and information",
    },
    {
      icon: <Search size={28} />,
      title: "Axios",
      description: "Fetching data from APIs",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Tailwind CSS",
      description: "Responsive and modern styling",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative px-6 py-16 md:px-12 lg:px-20 lg:py-24">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* ================= LEFT CONTENT ================= */}

            <div>

              {/* Brand Badge */}
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400">

                <SiThemoviedatabase size={19} />

                <span>
                  About VM Movies
                </span>

              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">

                Discover Movies.

                <span className="mt-2 block text-yellow-400">
                  Find Your Favorites.
                </span>

              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg">

                VM Movies is a modern movie discovery web application where
                users can search for movies, explore detailed information,
                check ratings and save their favorite movies to a personal
                watchlist.

              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">

                This project is built with React to practice real-world
                frontend development concepts while creating a simple and
                enjoyable movie browsing experience.

              </p>

              {/* Small Stats */}
              <div className="mt-8 flex flex-wrap gap-3">

                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3">

                  <p className="text-xs text-gray-500">
                    Project
                  </p>

                  <p className="mt-1 font-semibold">
                    VM Movies
                  </p>

                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3">

                  <p className="text-xs text-gray-500">
                    Built With
                  </p>

                  <p className="mt-1 font-semibold">
                    React
                  </p>

                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3">

                  <p className="text-xs text-gray-500">
                    Purpose
                  </p>

                  <p className="mt-1 font-semibold">
                    Learning
                  </p>

                </div>

              </div>

            </div>

            {/* ================= RIGHT VISUAL ================= */}

            <div className="flex justify-center">

              <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">

                {/* Outer Circle */}
                <div className="absolute inset-0 rounded-full border border-yellow-400/10" />

                {/* Middle Circle */}
                <div className="absolute inset-8 rounded-full border border-yellow-400/10" />

                {/* Inner Circle */}
                <div className="absolute inset-16 rounded-full border border-white/10 bg-gradient-to-br from-yellow-400/10 to-transparent" />

                {/* Main Brand Icon */}
                <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-3xl border border-yellow-400/20 bg-yellow-400/10 shadow-2xl shadow-yellow-400/10">

                  <SiThemoviedatabase
                    size={78}
                    className="text-yellow-400"
                  />

                </div>

                {/* Search Icon */}
                <div className="absolute right-0 top-16 rounded-2xl border border-white/10 bg-[#0d1a2b] p-4 shadow-xl">

                  <Search
                    size={26}
                    className="text-yellow-400"
                  />

                </div>

                {/* Heart Icon */}
                <div className="absolute bottom-12 left-0 rounded-2xl border border-white/10 bg-[#0d1a2b] p-4 shadow-xl">

                  <Heart
                    size={26}
                    className="text-yellow-400"
                  />

                </div>

                {/* Star Icon */}
                <div className="absolute bottom-0 right-16 rounded-2xl border border-white/10 bg-[#0d1a2b] p-4 shadow-xl">

                  <Star
                    size={26}
                    className="text-yellow-400"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT INTRODUCTION
      ====================================================== */}

      <section className="border-y border-white/5 bg-[#091525] px-6 py-16 md:px-12 lg:px-20 lg:py-20">

        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              The Project
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              What is VM Movies?
            </h2>

            <p className="mt-5 leading-7 text-gray-400">

              VM Movies is a simple React-based movie discovery application
              created to combine practical frontend development with an
              enjoyable movie browsing experience.

            </p>

          </div>


          {/* Feature Cards */}
          <div className="grid gap-6 md:grid-cols-3">

            {/* Search Movies */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">

                <Search size={27} />

              </div>

              <h3 className="text-xl font-semibold">
                Search Movies
              </h3>

              <p className="mt-3 leading-7 text-gray-400">

                Search for movies by title and quickly find the movie you
                are looking for.

              </p>

            </div>


            {/* Movie Details */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">

                <Clapperboard size={27} />

              </div>

              <h3 className="text-xl font-semibold">
                Movie Details
              </h3>

              <p className="mt-3 leading-7 text-gray-400">

                Explore useful movie information including title, year,
                genre, runtime, ratings, plot and more.

              </p>

            </div>


            {/* Watchlist */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">

                <Heart size={27} />

              </div>

              <h3 className="text-xl font-semibold">
                Personal Watchlist
              </h3>

              <p className="mt-3 leading-7 text-gray-400">

                Keep track of movies you want to watch later by adding them
                to your personal watchlist.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DEVELOPER SECTION
      ====================================================== */}

      <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-20">

        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">


            {/* ================= DEVELOPER CARD ================= */}

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-400/10 to-transparent p-8">

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-400/5 blur-2xl" />

              <div className="relative">

                {/* Profile Icon */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-lg shadow-yellow-400/10">

                  <User size={42} />

                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                  Developer
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Vishal Mall
                </h2>

                <p className="mt-2 text-gray-400">
                  React Frontend Developer
                </p>


                {/* Developer Details */}
                <div className="mt-7 space-y-4">


                  {/* Focus */}
                  <div className="flex items-start gap-3">

                    <MonitorPlay
                      size={19}
                      className="mt-1 shrink-0 text-yellow-400"
                    />

                    <div>

                      <p className="text-sm text-gray-500">
                        Primary Focus
                      </p>

                      <p className="mt-1 text-sm text-gray-300">
                        React & Frontend Development
                      </p>

                    </div>

                  </div>


                  {/* Project Type */}
                  <div className="flex items-start gap-3">

                    <Code2
                      size={19}
                      className="mt-1 shrink-0 text-yellow-400"
                    />

                    <div>

                      <p className="text-sm text-gray-500">
                        Project Type
                      </p>

                      <p className="mt-1 text-sm text-gray-300">
                        Practical React Project
                      </p>

                    </div>

                  </div>


                  {/* Project */}
                  <div className="flex items-start gap-3">

                    <Clapperboard
                      size={19}
                      className="mt-1 shrink-0 text-yellow-400"
                    />

                    <div>

                      <p className="text-sm text-gray-500">
                        Project
                      </p>

                      <p className="mt-1 text-sm text-gray-300">
                        VM Movies
                      </p>

                    </div>

                  </div>

                </div>


                {/* GitHub */}
                <a
                  href="https://github.com/vishalmall8419"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium transition hover:border-yellow-400/30 hover:bg-white/10"
                >

                  <FaGithub size={18} />

                  GitHub Profile

                </a>

              </div>

            </div>


            {/* ================= ABOUT DEVELOPER ================= */}

            <div>

              <div className="mb-4 flex items-center gap-2 text-yellow-400">

                <Sparkles size={19} />

                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  About Me
                </span>

              </div>


              <h2 className="text-3xl font-bold leading-tight md:text-4xl">

                Learning by building

                <span className="block text-yellow-400">
                  real projects.
                </span>

              </h2>


              <p className="mt-6 leading-8 text-gray-400">

                I am Vishal Mall, a developer focused on building modern,
                responsive and user-friendly web applications. My current
                focus is React and frontend development.

              </p>


              <p className="mt-4 leading-8 text-gray-400">

                VM Movies is a practical project where I am applying React
                concepts while building an actual application instead of
                learning everything only through theory.

              </p>


              <p className="mt-4 leading-8 text-gray-400">

                Through this project, I am strengthening my understanding of
                reusable components, state management, API integration,
                routing, hooks and responsive UI development.

              </p>


              {/* Developer Stats */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-2xl font-bold text-yellow-400">
                    React
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Frontend Focus
                  </p>

                </div>


                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">

                  <p className="text-2xl font-bold text-yellow-400">
                    8+
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    React Hooks Practiced
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          REACT CONCEPTS
      ====================================================== */}

      <section className="border-y border-white/5 bg-[#091525] px-6 py-16 md:px-12 lg:px-20 lg:py-20">

        <div className="mx-auto max-w-6xl">


          {/* Heading */}
          <div className="mb-10 text-center">

            <div className="mb-4 flex justify-center">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">

                <Code2 size={27} />

              </div>

            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              React Learning
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              React Concepts Used
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">

              VM Movies is also designed as a practical environment for
              understanding and applying important React concepts.

            </p>

          </div>


          {/* Hooks */}
          <div className="flex flex-wrap justify-center gap-3">

            {reactConcepts.map((concept) => (

              <span
                key={concept}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-gray-300 transition hover:border-yellow-400/40 hover:bg-yellow-400/5 hover:text-yellow-400"
              >
                {concept}
              </span>

            ))}

          </div>


          {/* Explanation */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-yellow-400/10 bg-yellow-400/5 p-6 text-center">

            <p className="leading-7 text-gray-400">

              Each concept is used with a practical purpose—for example,

              <span className="text-gray-200">
                {" "}useEffect{" "}
              </span>

              for API-related side effects,

              <span className="text-gray-200">
                {" "}useContext{" "}
              </span>

              for shared movie state,

              <span className="text-gray-200">
                {" "}useReducer{" "}
              </span>

              for watchlist actions and

              <span className="text-gray-200">
                {" "}useMemo{" "}
              </span>

              for derived movie data.

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY STACK
      ====================================================== */}

      <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-20">

        <div className="mx-auto max-w-6xl">


          {/* Heading */}
          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Technology
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built With
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-400">

              Technologies and tools used to create the VM Movies experience.

            </p>

          </div>


          {/* Technology Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {technologies.map((technology) => (

              <div
                key={technology.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30"
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">

                  {technology.icon}

                </div>

                <h3 className="text-lg font-semibold">
                  {technology.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {technology.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PURPOSE / MISSION
      ====================================================== */}

      <section className="px-6 pb-20 md:px-12 lg:px-20">

        <div className="mx-auto max-w-5xl">

          <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-yellow-400/5 to-transparent p-8 text-center md:p-12">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="relative">

              {/* Icon */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">

                <Sparkles size={30} />

              </div>


              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Why I Built VM Movies
              </p>


              <h2 className="mt-3 text-3xl font-bold md:text-4xl">

                Learn React by building something real.

              </h2>


              <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-400">

                The goal of VM Movies is simple: turn React concepts into
                practical development experience. Building this application
                helps strengthen my understanding of components, hooks,
                state management, API integration, routing and responsive
                frontend development.

              </p>


              {/* Tags */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">

                <span className="rounded-full border border-white/10 bg-black/10 px-5 py-2.5 text-sm text-gray-300">
                  Build
                </span>

                <span className="rounded-full border border-white/10 bg-black/10 px-5 py-2.5 text-sm text-gray-300">
                  Practice
                </span>

                <span className="rounded-full border border-white/10 bg-black/10 px-5 py-2.5 text-sm text-gray-300">
                  Learn
                </span>

                <span className="rounded-full border border-white/10 bg-black/10 px-5 py-2.5 text-sm text-gray-300">
                  Improve
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;