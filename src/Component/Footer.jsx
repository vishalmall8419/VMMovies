import { Link } from "react-router-dom";

import {
  Clapperboard,
  Home,
  Heart,
  Info,
  Bookmark,
  ExternalLink,
  ArrowUp,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#050b14] text-slate-300">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}
          <div>
            <Link
              to="/"
              className="mb-5 inline-flex items-center gap-2 text-2xl font-bold text-white"
            >
              <Clapperboard
                size={32}
                strokeWidth={2.5}
                className="text-yellow-400"
              />

              <span>
                VM <span className="text-yellow-400">Movies</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Discover movies, explore ratings and details, and save your
              favorite movies to your personal watchlist.
            </p>

            <p className="mt-5 flex items-center text-sm text-slate-500">
              Made with
              <Heart
                size={15}
                fill="currentColor"
                className="mx-1 text-red-500"
              />
              by
              <Link
                to="https://vishalmall.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-yellow-400 transition hover:text-yellow-300"
              >
                Vishal Mall
              </Link>
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="group flex items-center gap-2 text-sm transition hover:text-yellow-400"
                >
                  <Home size={17} />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/watchlist"
                  className="group flex items-center gap-2 text-sm transition hover:text-yellow-400"
                >
                  <Bookmark size={17} />
                  Watchlist
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="group flex items-center gap-2 text-sm transition hover:text-yellow-400"
                >
                  <Info size={17} />
                  About
                </Link>
              </li>

            </ul>
          </div>

          {/* ================= RESOURCES ================= */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3">

              {/* External website → <Link> */}
              <li>
                <Link
                  to="https://www.omdbapi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm transition hover:text-yellow-400"
                >
                  <ExternalLink size={16} />
                  OMDb API
                </Link>
              </li>

              {/* Internal route → Link */}
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm transition hover:text-yellow-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-sm transition hover:text-yellow-400"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>
          </div>

          {/* ================= CONNECT WITH ME ================= */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect With Me
            </h3>

            <div className="flex items-center gap-3">

              {/* GitHub */}
              <Link
                to="https://github.com/vishalmall8419"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vishal Mall GitHub"
                title="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <FaGithub size={19} />
              </Link>

              {/* LinkedIn */}
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vishal Mall LinkedIn"
                title="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <FaLinkedinIn size={18} />
              </Link>

              {/* Portfolio */}
              <Link
                to="https://vishalmall.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vishal Mall Portfolio"
                title="Portfolio"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <ExternalLink size={18} />
              </Link>

              {/* Email */}
              <Link
                to="mailto:vishal.mall02@outlook.com"
                aria-label="Email Vishal Mall"
                title="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <MdEmail size={21} />
              </Link>

            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Have a question or want to connect?
              <br />
              Feel free to reach out.
            </p>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">

          {/* Copyright */}
          <p className="text-center text-sm text-slate-500 sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-300">
              VM Movies
            </span>
            . All rights reserved.
          </p>

          {/* Bottom Right */}
          <div className="flex items-center gap-5">

            <span className="flex items-center gap-1 text-xs text-slate-600">
              Built with
              <FaReact
                size={14}
                className="text-cyan-400"
              />
              React
            </span>

            {/* Scroll To Top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              title="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <ArrowUp size={17} />
            </button>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;