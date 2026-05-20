'use client';

import { useEffect, useState } from 'react';

function Countdown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-08-31T23:59:59').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

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
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[34px] py-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <div className="text-5xl md:text-6xl font-black">
            {value as number}
          </div>

          <div className="text-white/50 uppercase tracking-[0.25em] text-sm mt-3">
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
                T.M.D <br />
                COMMUNITY
              </h1>

              <h2 className="text-2xl md:text-4xl text-white/80 mb-6 leading-tight">
                Картхолдер который будет
                <br />
                вас выделять
              </h2>

              <p className="text-white/60 text-lg max-w-xl mb-10">
                Premium CartHolders • Private Community • Luxury Access
              </p>

              <a
                href="#soon"
                className="bg-white text-[#04113A] rounded-[24px] px-8 py-5 font-black inline-flex items-center hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(255,255,255,0.12)]"
              >
                SOON
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

        {/* PREMIUM LINE */}

        <section className="relative px-6 md:px-20 py-32 z-10 overflow-hidden">

          {/* BACKGROUND */}

          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#edf4ff] to-[#dfeeff]" />

          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[140px]" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-[140px]" />

          <div className="relative z-10 max-w-7xl mx-auto">

            {/* TITLE */}

            <div className="text-center mb-20">

              <p className="uppercase tracking-[0.4em] text-[#07154A]/50 mb-4">
                Luxury Collection
              </p>

              <h2 className="text-5xl md:text-7xl font-black text-[#04113A] mb-6">
                PREMIUM LINE
              </h2>

              <div className="w-[180px] h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
            </div>

            {/* CARDS */}

            <div className="grid lg:grid-cols-2 gap-10">

              {/* WHITE CARD */}

              <div className="relative group overflow-hidden rounded-[50px] bg-white border border-white/60 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.12)] p-10 transition-all duration-500 hover:scale-[1.02]">

                {/* BACK GLOW */}

                <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white rounded-full blur-[100px] opacity-80" />

                <div className="absolute bottom-[-120px] right-[-120px] w-[260px] h-[260px] bg-blue-200/40 rounded-full blur-[120px]" />

                {/* REFLECTION */}

                <div className="absolute top-0 left-[-120px] w-[120px] h-full bg-white/40 rotate-[18deg] blur-[25px] group-hover:left-[120%] transition-all duration-1000" />

                {/* NUMBER */}

                <div className="relative z-10 text-[#04113A]/20 text-8xl font-black mb-6">
                  01
                </div>

                {/* IMAGE */}

                <div className="relative z-10 flex justify-center mb-10">

                  <div className="absolute w-[240px] h-[240px] bg-white blur-[100px]" />

                  <img
                    src="/photo2131.png"
                    alt="White Wallet"
                    className="relative z-10 w-[280px] rotate-[-10deg] drop-shadow-[0_40px_100px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                  />
                </div>

                {/* CONTENT */}

                <div className="relative z-10">

                  <h3 className="text-4xl font-black text-[#04113A] mb-4">
                    WHITE WALLET
                  </h3>

                  <p className="text-[#04113A]/70 text-lg leading-relaxed mb-8">
                    Luxury minimal edition created for premium members with private access and elite identity.
                  </p>

                  {/* FEATURES */}

                  <div className="space-y-4">

                    <div className="flex items-center gap-3 text-[#04113A]">

                      <div className="w-2 h-2 rounded-full bg-blue-500" />

                      Premium Material
                    </div>

                    <div className="flex items-center gap-3 text-[#04113A]">

                      <div className="w-2 h-2 rounded-full bg-blue-500" />

                      Exclusive Access
                    </div>

                    <div className="flex items-center gap-3 text-[#04113A]">

                      <div className="w-2 h-2 rounded-full bg-blue-500" />

                      Private Community
                    </div>
                  </div>
                </div>
              </div>

              {/* BLUE CARD */}

              <div className="relative group overflow-hidden rounded-[50px] bg-[#07154A] border border-white/10 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.35)] p-10 transition-all duration-500 hover:scale-[1.02]">

                {/* BACK GLOW */}

                <div className="absolute top-[-100px] right-[-100px] w-[320px] h-[320px] bg-blue-500/30 rounded-full blur-[120px]" />

                <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-cyan-400/20 rounded-full blur-[120px]" />

                {/* REFLECTION */}

                <div className="absolute top-0 left-[-120px] w-[120px] h-full bg-white/10 rotate-[18deg] blur-[25px] group-hover:left-[120%] transition-all duration-1000" />

                {/* NUMBER */}

                <div className="relative z-10 text-white/10 text-8xl font-black mb-6">
                  02
                </div>

                {/* IMAGE */}

                <div className="relative z-10 flex justify-center mb-10">

                  <div className="absolute w-[240px] h-[240px] bg-blue-500/30 blur-[120px]" />

                  <img
                    src="/photo2121.png"
                    alt="Blue Wallet"
                    className="relative z-10 w-[280px] rotate-[10deg] drop-shadow-[0_40px_120px_rgba(37,99,235,0.5)] transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                  />
                </div>

                {/* CONTENT */}

                <div className="relative z-10">

                  <h3 className="text-4xl font-black text-white mb-4">
                    BLUE WALLET
                  </h3>

                  <p className="text-white/70 text-lg leading-relaxed mb-8">
                    Signature edition with deep premium aesthetics and exclusive community privileges.
                  </p>

                  {/* FEATURES */}

                  <div className="space-y-4">

                    <div className="flex items-center gap-3 text-white">

                      <div className="w-2 h-2 rounded-full bg-cyan-400" />

                      Signature Design
                    </div>

                    <div className="flex items-center gap-3 text-white">

                      <div className="w-2 h-2 rounded-full bg-cyan-400" />

                      Elite Status
                    </div>

                    <div className="flex items-center gap-3 text-white">

                      <div className="w-2 h-2 rounded-full bg-cyan-400" />

                      Premium Identity
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOON */}

        <section
          id="soon"
          className="px-6 md:px-20 py-28 relative z-10"
        >

          <div className="max-w-5xl mx-auto text-center">

            <p className="uppercase tracking-[0.4em] text-white/50 mb-4">
              Exclusive Access
            </p>

            <h2 className="text-5xl md:text-7xl font-black mb-6">
              SOON
            </h2>

            <p className="text-white/70 text-xl mb-12">
              Summer 2026 Countdown
            </p>

            <Countdown />
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
      `}</style>
    </>
  );
}
