import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 z-0" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-20 z-0 bg-[linear-gradient(rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-cyan-500/20 blur-[60px] animate-float z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-purple-500/20 blur-[60px] animate-floatReverse z-0" />

      {/* Corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-500/30 z-10" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-purple-500/30 z-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-purple-500/30 z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyan-500/30 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-xl px-6">
        <h1 className="text-[8rem] md:text-[5rem] font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-glow">
          404
        </h1>

        <h2 className="text-2xl md:text-xl font-bold mb-4">
          Page Not Found
        </h2>

        <p className="text-zinc-400 mb-1">
          Looks like this level doesn't exist in our database.
        </p>
        <p className="text-zinc-500 mb-8 text-sm">
          The page you're looking for has been moved or deleted.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition shadow-lg shadow-cyan-500/30"
          >
            Return Home
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 hover:scale-105 transition"
          >
            Search Games
          </Link>
        </div>

        {/* Icon */}
        <svg
          className="w-12 h-12 mx-auto mt-12 text-cyan-400/30 animate-floatIcon"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z" />
        </svg>

        <p className="mt-10 text-xs text-zinc-600 font-mono">
          ERROR_CODE: 404_PAGE_NOT_FOUND_CYBERSPACE
        </p>
      </div>

      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 z-50 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(6,182,212,0.03)_2px,rgba(6,182,212,0.03)_4px)]" />
    </div>
  );
}
