import { useState } from "react";

function App() {
  const [showOptions, setShowOptions] = useState(false);

  const handleLogoClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOpenDev = () => {
    const devLink = "maxaiworld://dev";
    window.location.href = devLink;
  };

  const handleOpenLive = () => {
    const liveLink = "maxaiworld://live";
    window.location.href = liveLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f2e] via-[#151a28] to-[#0d1117] flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-slate-900/30"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Top Header Bar */}
      <header className="relative z-20 w-full bg-gradient-to-r from-[#1a1f2e]/80 via-[#151a28]/80 to-[#0d1117]/80 backdrop-blur-md border-b border-blue-400/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <h2 className="text-lg font-semibold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              App Launcher
            </h2>
          </div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="relative z-10 text-center max-w-sm w-full">
          {/* Logo Section */}
          <div className="mb-4">
            <button
              onClick={handleLogoClick}
              className="group relative transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/30 rounded-[3rem]"
              aria-label="Open app options"
            >
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-[3rem] shadow-2xl flex items-center justify-center group-hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/20 relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600">
                <div
                  className="absolute inset-0 w-full h-full rounded-[3rem] bg-center bg-cover"
                  style={{ backgroundImage: "url(/app_icon.png)" }}
                  aria-label="App Icon"
                ></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>

          {/* App Title */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-1">
              MaxAI World
            </h1>
          </div>

          {/* Navigation Buttons - Only Dev and Live */}
          <div
            className={`transition-all duration-700 ${
              showOptions
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex justify-center gap-6">
              <button
                onClick={handleOpenDev}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/30 border border-emerald-400/20 min-w-[120px]"
              >
                <span className="relative z-10">Open Dev</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={handleOpenLive}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-400/30 border border-red-400/20 min-w-[120px]"
              >
                <span className="relative z-10">Open Live</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none"></div>
    </div>
  );
}

export default App;
