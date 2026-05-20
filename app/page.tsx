'use client';

import { useEffect, useState } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function Countdown() {
  const calculateTimeLeft = (): TimeLeft => {
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

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
      {items.map((item) => (
        <div
          key={item.label}
          className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[34px] py-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

          <div className="relative z-10 text-5xl md:text-6xl font-black">
            {String(item.value).padStart(2, '0')}
          </div>

          <div className="relative z-10 text-white/50 uppercase tracking-[0.25em] text-sm mt-3">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-250px] left-[-150px] w-[900px] h-[900px] rounded-full bg-blue-600/40 blur-[140px]" />

        <div className="absolute bottom-[-400px] right-[-250px] w-[1100px] h-[1100px] rounded-full bg-cyan-400/20 blur-[140px]" />

      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">

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
              <div className="relative w-[130px] h-[130px] rounded-[42px] bg-white/5 border border-white/10 backdrop-blur-2xl flex items-center justify-center overflow-hidden">

                <div className="absolute w-[220px] h-[220px] bg-blue-500/30 blur-[80px] animate-pulse" />

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
              className="bg-white text-[#04113A] rounded-[24px] px-8 py-5 font-black inline-flex items-center hover:scale-105 transition-all duration-300"
            >
              APPLICATIONS
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center min-h-[720px]">

            <div className="absolute w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[140px]" />

            <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[120px]" />

            {/* WHITE WALLET */}
            <img
              src="/photo2131.png"
              alt="White Wallet"
              className="absolute left-[0%] md:left-[4%] top-[10%] w-[240px] md:w-[380px] rotate-[-14deg] drop-shadow-[0_50px_140px_rgba(255,255,255,0.22)]"
            />

            {/* BLUE WALLET */}
            <img
              src="/photo2121.png"
              alt="Blue Wallet"
              className="absolute right-[0%] md:right-[4%] bottom-[8%] w-[240px] md:w-[380px] rotate-[14deg] drop-shadow-[0_50px_140px_rgba(37,99,235,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section
        id="soon"
        className="px-6 md:px-20 py-32 relative z-10"
      >

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.45em] text-white/40 mb-6 text-sm">
            Applications Open In
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-6">
            JOIN THE
            <br />
            PRIVATE WAITLIST
          </h2>

          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed mb-16">
            Access to the T.M.D founders community will become available after the countdown ends.
          </p>

          {/* COUNTDOWN */}
          <Countdown />

          {/* BUTTON */}
          <div className="mt-16 flex flex-col items-center">

            <button
              disabled
              className="relative overflow-hidden bg-white/[0.04] border border-white/10 text-white/40 rounded-[28px] px-12 py-6 font-black tracking-[0.2em] backdrop-blur-2xl cursor-not-allowed shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            >
              <span className="flex items-center gap-4">

                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>

                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>

                JOIN WAITLIST
              </span>
            </button>

            <div className="mt-6 text-white/30 uppercase tracking-[0.35em] text-xs">
              Waitlist Locked • Applications Not Yet Available
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}