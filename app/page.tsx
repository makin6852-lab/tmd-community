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
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] py-10"
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

        {/* HERO */}

        <section className="relative min-h-screen flex items-center px-6 md:px-20 py-20 overflow-hidden">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-5 py-3 mb-8">

                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />

                <span className="uppercase tracking-[0.35em] text-xs text-white/70">
                  Exclusive Private Community
                </span>
              </div>

              {/* LOGO */}

              <div className="mb-10">

                <div className="relative w-[120px] h-[120px] rounded-[36px] bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden">

                  <div className="absolute w-[180px] h-[180px] bg-blue-500/20 blur-[60px]" />

                  <span className="text-4xl font-black tracking-[0.1em] z-10">
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
                className="bg-white text-[#04113A] rounded-[24px] px-8 py-5 font-black inline-flex items-center hover:scale-105 transition-all duration-300"
              >
                SOON
              </a>
            </div>

            {/* RIGHT */}

            <div className="relative flex items-center justify-center min-h-[650px]">

              <div className="absolute w-[620px] h-[460px] rounded-[60px] bg-white/5 border border-white/10 backdrop-blur-2xl" />

              {/* WHITE */}

              <div className="absolute left-[5%] md:left-[10%] top-[18%]">

                <div className="absolute inset-0 bg-white/20 blur-[100px] rounded-full scale-125" />

                <img
                  src="/photo2131.png"
                  alt="White Wallet"
                  className="relative z-10 w-[220px] md:w-[330px] rotate-[-12deg]"
                />
              </div>

              {/* BLUE */}

              <div className="absolute right-[5%] md:right-[10%] bottom-[12%]">

                <div className="absolute inset-0 bg-blue-500/30 blur-[120px] rounded-full scale-125" />

                <img
                  src="/photo2121.png"
                  alt="Blue Wallet"
                  className="relative z-10 w-[220px] md:w-[330px] rotate-[12deg]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PREMIUM */}

        <section className="bg-white text-[#04113A] rounded-t-[60px] px-6 md:px-20 py-28 relative z-10">

          <h2 className="text-5xl font-black text-center mb-14">
            PREMIUM LINE
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

            <div className="bg-[#07154A] rounded-[42px] p-8 text-white">

              <img
                src="/photo2131.png"
                className="rounded-[24px] mb-8 w-full"
              />

              <h3 className="text-4xl font-black">
                WHITE WALLET
              </h3>
            </div>

            <div className="bg-[#07154A] rounded-[42px] p-8 text-white">

              <img
                src="/photo2121.png"
                className="rounded-[24px] mb-8 w-full"
              />

              <h3 className="text-4xl font-black">
                BLUE WALLET
              </h3>
            </div>
          </div>
        </section>

        {/* SOON */}

        <section id="soon" className="px-6 md:px-20 py-28 relative z-10">

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
          background: #030816;
          color: white;
        }

        .wave {
          position: absolute;
          border-radius: 9999px;
          filter: blur(120px);
          opacity: 0.7;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          mix-blend-mode: screen;
        }

        .wave1 {
          width: 900px;
          height: 900px;
          background: #2563eb;
          top: -250px;
          left: -150px;
          animation: float1 16s infinite;
        }

        .wave2 {
          width: 1000px;
          height: 1000px;
          background: #38bdf8;
          bottom: -350px;
          right: -250px;
          animation: float2 20s infinite;
        }

        .wave3 {
          width: 700px;
          height: 700px;
          background: #60a5fa;
          top: 20%;
          left: 30%;
          opacity: 0.4;
          animation: float3 18s infinite;
        }

        @keyframes float1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(120px, 60px) scale(1.15);
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
            transform: translate(-140px, -80px) scale(1.2);
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
            transform: translate(70px, -60px) scale(1.1);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
      `}</style>
    </>
  );
}