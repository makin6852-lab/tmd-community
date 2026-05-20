'use client';

import { useEffect, useState } from 'react';
import { Send, Mail } from 'lucide-react';

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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {[
        ['Days', timeLeft.days],
        ['Hours', timeLeft.hours],
        ['Minutes', timeLeft.minutes],
        ['Seconds', timeLeft.seconds],
      ].map(([label, value]) => (
        <div
          key={String(label)}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] py-8 md:py-10"
        >
          <div className="text-4xl md:text-6xl font-black">
            {value as number}
          </div>

          <div className="text-white/50 uppercase tracking-[0.25em] text-xs md:text-sm mt-3">
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
      <div className="main-bg overflow-x-hidden">

        {/* WAVES */}

        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>

        {/* HERO */}

        <section className="relative min-h-[100svh] flex items-center px-6 md:px-20 py-20">

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

                <div className="relative w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-[36px] bg-white/5 border border-white/10 backdrop-blur-2xl flex items-center justify-center overflow-hidden">

                  <div className="absolute w-[160px] h-[160px] bg-blue-500/20 blur-[60px]" />

                  <div className="absolute top-0 left-[-40px] w-[50px] h-[180px] bg-white/20 rotate-[20deg] blur-[16px]" />

                  <span className="text-3xl md:text-4xl font-black tracking-[0.12em] z-10">
                    TMD
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-6">
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

              <button
                onClick={() => {
                  const section = document.getElementById('soon');

                  if (section) {
                    section.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                className="bg-white text-[#04113A] rounded-[22px] px-8 py-5 font-black inline-flex items-center transition-all duration-300 active:scale-95"
              >
                SOON
              </button>
            </div>

            {/* RIGHT */}

            <div className="relative flex items-center justify-center min-h-[420px] md:min-h-[720px]">

              <div className="absolute w-[90%] md:w-[680px] h-[360px] md:h-[520px] rounded-[50px] bg-white/5 border border-white/10 backdrop-blur-xl" />

              <div className="absolute w-[260px] md:w-[450px] h-[260px] md:h-[450px] bg-blue-500/20 rounded-full blur-[80px]" />

              <div className="absolute w-[180px] md:w-[300px] h-[180px] md:h-[300px] bg-cyan-400/10 rounded-full blur-[60px]" />

              {/* WHITE WALLET */}

              <div className="absolute left-[0%] md:left-[4%] top-[10%]">

                <div className="absolute inset-0 bg-white/10 blur-[60px] rounded-full scale-150" />

                <img
                  src="/photo2131.png"
                  alt="White Wallet"
                  className="relative z-10 w-[180px] md:w-[380px] rotate-[-14deg] drop-shadow-[0_30px_80px_rgba(255,255,255,0.12)]"
                />
              </div>

              {/* BLUE WALLET */}

              <div className="absolute right-[0%] md:right-[4%] bottom-[8%]">

                <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full scale-150" />

                <img
                  src="/photo2121.png"
                  alt="Blue Wallet"
                  className="relative z-10 w-[180px] md:w-[380px] rotate-[14deg] drop-shadow-[0_30px_80px_rgba(37,99,235,0.3)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PREMIUM LINE */}

        <section className="relative px-6 md:px-20 py-24 md:py-32 z-10 overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#edf4ff] to-[#dfeeff]" />

          <div className="absolute top-[-200px] left-[-200px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-300/20 rounded-full blur-[80px]" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-300/10 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <p className="uppercase tracking-[0.4em] text-[#07154A]/50 mb-4">
                Luxury Collection
              </p>

              <h2 className="text-4xl md:text-7xl font-black text-[#04113A] mb-6">
                PREMIUM LINE
              </h2>

              <div className="w-[180px] h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">

              {/* WHITE */}

              <div className="relative overflow-hidden rounded-[40px] bg-white border border-white/60 p-8 md:p-10">

                <div className="absolute top-[-100px] left-[-100px] w-[220px] h-[220px] bg-white rounded-full blur-[60px]" />

                <div className="relative z-10 flex justify-center mb-10">

                  <img
                    src="/photo2131.png"
                    alt="White Wallet"
                    className="w-[220px] md:w-[280px] rotate-[-10deg]"
                  />
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-[#04113A] mb-4">
                  WHITE WALLET
                </h3>

                <p className="text-[#04113A]/70 text-base md:text-lg leading-relaxed">
                  Luxury minimal edition created for premium members.
                </p>
              </div>

              {/* BLUE */}

              <div className="relative overflow-hidden rounded-[40px] bg-[#07154A] border border-white/10 p-8 md:p-10">

                <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-blue-500/20 rounded-full blur-[80px]" />

                <div className="relative z-10 flex justify-center mb-10">

                  <img
                    src="/photo2121.png"
                    alt="Blue Wallet"
                    className="w-[220px] md:w-[280px] rotate-[10deg]"
                  />
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  BLUE WALLET
                </h3>

                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  Signature edition with exclusive premium access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOON */}

        <section
          id="soon"
          className="px-6 md:px-20 py-24 relative z-10"
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

            <div className="mt-20">

              <p className="text-3xl md:text-5xl font-black leading-tight">
                Именно ты
                <br />
                достоин этого
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="border-t border-white/10 py-12 px-6 md:px-20 text-white/70 relative z-10">

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

            <div>

              <div className="text-white font-black text-2xl mb-2">
                T.M.D COMMUNITY
              </div>

              <div className="text-white/60">
                Premium CartHolder Access
              </div>
            </div>

            <div>

              <div className="font-semibold text-white mb-4">
                Support
              </div>

              <div className="flex flex-col gap-4">

                <a
                  href="https://t.me/managerTMD_p2p"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Send size={16} />
                  @managerTMD_p2p
                </a>

                <a
                  href="mailto:tmdsupport1@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Mail size={16} />
                  tmdsupport1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: #020817;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
  }

  .main-bg {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    background: #020817;
    color: white;
  }

  .wave {
    position: absolute;
    border-radius: 9999px;
    filter: blur(140px);
    opacity: 0.65;
    mix-blend-mode: screen;
    pointer-events: none;
    z-index: 0;
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

  @media (max-width: 768px) {
    html,
    body {
      overflow-x: hidden;
      width: 100%;
    }

    .main-bg {
      overflow-x: hidden;
    }

    .wave {
      filter: blur(100px);
      opacity: 0.45;
    }

    .wave1 {
      width: 500px;
      height: 500px;
      top: -120px;
      left: -120px;
    }

    .wave2 {
      width: 650px;
      height: 650px;
      right: -250px;
      bottom: -250px;
    }

    .wave3 {
      width: 400px;
      height: 400px;
    }
  }
`}</style>