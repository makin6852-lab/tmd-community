'use client';

import { useEffect, useState } from 'react';

function Countdown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
      {[
        ['Days', timeLeft.days],
        ['Hours', timeLeft.hours],
        ['Minutes', timeLeft.minutes],
        ['Seconds', timeLeft.seconds],
      ].map(([label, value]) => (
        <div
          key={String(label)}
          className="
            relative
            overflow-hidden
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-[34px]
            py-10
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

          <div className="relative z-10 text-5xl md:text-6xl font-black">
            {String(value).padStart(2, '0')}
          </div>

          <div className="relative z-10 text-white/50 uppercase tracking-[0.25em] text-sm mt-3">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="main-bg">

        {/* WAVES */}
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center px-6 md:px-20 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-5 py-3 mb-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="uppercase tracking-[0.35em] text-xs text-white/70">
                  Exclusive Private Community
                </span>
              </div>

              {/* LOGO */}
              <div className="mb-10">
                <div className="relative w-[130px] h-[130px] rounded-[42px] bg-white/5 border border-white/10 backdrop-blur-2xl flex items-center justify-center overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.45)]">

                  <div className="absolute w-[220px] h-[220px] bg-blue-500/30 blur-[80px] animate-pulse" />

                  <div className="absolute top-0 left-[-40px] w-[70px] h-[220px] bg-white/20 rotate-[20deg] blur-[20px]" />

                  <span className="text-4xl font-black tracking-[0.12em] z-10">
                    TMD
                  </span>
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
                T.M.D
                <br />
                COMMUNITY
              </h1>

              <h2 className="text-2xl md:text-4xl text-white/80 mb-6 leading-tight">
                Картхолдер который будет
                <br />
                вас выделять
              </h2>

              <p className="text-white/60 text-lg max-w-xl mb-10">
                Founders Series • Private Community • Luxury Access
              </p>

              <a
                href="#soon"
                className="bg-white text-[#04113A] rounded-[24px] px-8 py-5 font-black inline-flex items-center hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(255,255,255,0.12)]"
              >
                APPLICATIONS
              </a>
            </div>

            {/* RIGHT */}
            <div className="relative flex items-center justify-center min-h-[720px]">

              <div className="absolute w-[680px] h-[520px] rounded-[70px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_50px_140px_rgba(0,0,0,0.5)]" />

              <div className="absolute w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[140px] animate-pulse" />

              <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[120px]" />

              <div className="absolute w-[540px] h-[2px] bg-gradient-to-r from-transparent via-blue-300/70 to-transparent blur-sm top-[46%]" />

              {/* WHITE WALLET */}
              <div className="absolute left-[0%] md:left-[4%] top-[10%] group">

                <div className="absolute inset-0 bg-white/20 blur-[120px] rounded-full scale-150 opacity-80" />

                <div className="absolute left-[20%] top-[5%] w-[70px] h-[240px] bg-white/30 blur-[25px] rotate-[20deg] z-20 opacity-80" />

                <div className="absolute -left-8 top-8 w-[140px] h-[260px] bg-white/20 blur-[60px] rotate-[-20deg]" />

                <img
                  src="/photo2131.png"
                  alt="White Wallet"
                  className="relative z-10 w-[240px] md:w-[380px] rotate-[-14deg] drop-shadow-[0_50px_140px_rgba(255,255,255,0.22)] transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* BLUE WALLET */}
              <div className="absolute right-[0%] md:right-[4%] bottom-[8%] group">

                <div className="absolute inset-0 bg-blue-500/35 blur-[140px] rounded-full scale-150 opacity-90" />

                <div className="absolute right-[18%] top-[8%] w-[70px] h-[240px] bg-cyan-200/30 blur-[25px] rotate-[18deg] z-20 opacity-80" />

                <div className="absolute right-[-20px] bottom-0 w-[160px] h-[280px] bg-cyan-400/20 blur-[70px] rotate-[20deg]" />

                <img
                  src="/photo2121.png"
                  alt="Blue Wallet"
                  className="relative z-10 w-[240px] md:w-[380px] rotate-[14deg] drop-shadow-[0_50px_140px_rgba(37,99,235,0.45)] transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* PARTICLES */}
              <div className="particle p1"></div>
              <div className="particle p2"></div>
              <div className="particle p3"></div>
              <div className="particle p4"></div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section
          id="soon"
          className="px-6 md:px-20 py-32 relative z-10 overflow-hidden"
        >

          {/* BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none">

            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[180px]" />

            <div className="absolute bottom-[-250px] right-[-100px] w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[160px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">

            <div className="mb-14">

              <p className="uppercase tracking-[0.45em] text-white/40 mb-6 text-sm">
                Applications Open In
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-6">
                JOIN THE
                <br />
                PRIVATE WAITLIST
              </h2>

              <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
                Access to the T.M.D founders community will become available after the countdown ends.
              </p>
            </div>

            {/* COUNTDOWN */}
            <Countdown />

            {/* LOCKED BUTTON */}
            <div className="mt-16 flex flex-col items-center">

              <button
                disabled
                className="
                  relative
                  overflow-hidden
                  group
                  bg-white/[0.04]
                  border
                  border-white/10
                  text-white/40
                  rounded-[28px]
                  px-12
                  py-6
                  font-black
                  tracking-[0.2em]
                  backdrop-blur-2xl
                  cursor-not-allowed
                  shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                "
              >
                {/* SHINE */}
                <div className="absolute top-0 left-[-120px] w-[90px] h-full bg-white/10 rotate-[18deg] blur-[18px] animate-[shine_4s_linear_infinite]" />

                {/* INNER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent" />

                <span className="relative z-10 flex items-center gap-4">

                  {/* RED DOT */}
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>

                  JOIN WAITLIST

                  {/* LOCK */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 opacity-60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V7a5 5 0 00-10 0v4H6a2 2 0 00-2 2v6a2 2 0 002 2zm3-10V7a3 3 0 016 0v4H9z"
                    />
                  </svg>
                </span>
              </button>

              <div className="mt-6 text-white/30 uppercase tracking-[0.35em] text-xs">
                Waitlist Locked • Applications Not Yet Available
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .main-bg {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #020817;
          color: white;
        }

        .wave {
          position: absolute;
          border-radius: 9999px;
          filter: blur(140px);
          opacity: 0.65;
          mix-blend-mode: screen;
        }

        .wave1 {
          width: 900px;
          height: 900px;
          background: #2563eb;
          top: -250px;
          left: -150px;
          animation: float1 16s ease-in-out infinite;
        }

        .wave2 {
          width: 1100px;
          height: 1100px;
          background: #38bdf8;
          bottom: -400px;
          right: -250px;
          animation: float2 22s ease-in-out infinite;
        }

        .wave3 {
          width: 700px;
          height: 700px;
          background: #60a5fa;
          top: 15%;
          left: 35%;
          opacity: 0.35;
          animation: float3 18s ease-in-out infinite;
        }

        .wave4 {
          width: 500px;
          height: 500px;
          background: #1d4ed8;
          top: 40%;
          left: 10%;
          opacity: 0.2;
          animation: float4 20s ease-in-out infinite;
        }

        .particle {
          position: absolute;
          border-radius: 999px;
          background: white;
          filter: blur(3px);
          opacity: 0.8;
        }

        .p1 {
          width: 8px;
          height: 8px;
          top: 20%;
          left: 45%;
          animation: particle1 5s infinite ease-in-out;
        }

        .p2 {
          width: 12px;
          height: 12px;
          top: 60%;
          left: 55%;
          animation: particle2 6s infinite ease-in-out;
        }

        .p3 {
          width: 6px;
          height: 6px;
          top: 35%;
          right: 25%;
          animation: particle3 7s infinite ease-in-out;
        }

        .p4 {
          width: 10px;
          height: 10px;
          bottom: 20%;
          left: 35%;
          animation: particle4 8s infinite ease-in-out;
        }

        @keyframes float1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(140px, 60px) scale(1.15);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes float2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-160px, -90px) scale(1.2);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes float3 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(80px, -70px) scale(1.1);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes float4 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(60px, 40px) scale(1.15);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes particle1 {
          0% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
        }

        @keyframes particle2 {
          0% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-25px);
            opacity: 1;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
        }

        @keyframes particle3 {
          0% {
            transform: translateY(0px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-18px);
            opacity: 1;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.5;
          }
        }

        @keyframes particle4 {
          0% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-22px);
            opacity: 1;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
        }

        @keyframes shine {
          0% {
            left: -120px;
          }
          100% {
            left: 140%;
          }
        }
      `}</style>
    </>
  );
}
