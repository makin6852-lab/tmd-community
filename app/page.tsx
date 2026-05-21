'use client';
import { useEffect, useState } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function Countdown() {
  const targetDate = new Date('2026-06-20T00:00:00Z').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      if (updated.days === 0 && updated.hours === 0 && 
          updated.minutes === 0 && updated.seconds === 0) {
        setIsEnded(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (isEnded) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl md:text-7xl font-black text-emerald-400 mb-4">
          APPLICATIONS ARE NOW OPEN
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
      {items.map((item) => (
        <div key={item.label} className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[34px] py-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-white/20 transition-all">
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
    <>
      <main className="main-bg">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center px-6 md:px-20 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="uppercase tracking-[0.4em] text-xs text-white/70">EXCLUSIVE PRIVATE COMMUNITY</span>
              </div>

              <div className="mb-10">
                <div className="relative w-[150px] h-[150px] rounded-[42px] bg-white/5 border border-white/10 backdrop-blur-2xl flex items-center justify-center overflow-hidden shadow-[0_30px_100px_rgba(37,99,235,0.45)]">
                  <div className="absolute w-[260px] h-[260px] bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 blur-[85px] animate-pulse" />
                  <span className="text-6xl font-black tracking-[0.05em] z-10 text-white drop-shadow-[0_0_35px_rgba(147,197,253,0.6)]">
                    TMD
                  </span>
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-[0.82] mb-6 tracking-tighter">
                T.M.D<br />COMMUNITY
              </h1>

              <h2 className="text-3xl md:text-5xl font-bold text-white/90 mb-2 leading-tight">
                For the few.<br />Not for the many.
              </h2>
              <p className="text-white/50 text-sm mb-10">Эксклюзивное закрытое сообщество</p>

              <p className="text-white/60 text-lg max-w-xl mb-10">
                A highly curated private circle for founders, builders, and visionaries.
              </p>
            </div>

            {/* Wallets */}
            <div className="relative flex items-center justify-center min-h-[720px]">
              <div className="absolute w-[680px] h-[520px] rounded-[70px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_50px_140px_rgba(0,0,0,0.5)]" />
              <div className="absolute w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[140px] animate-pulse" />
              <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[120px]" />

              <div className="absolute left-0 md:left-[4%] top-[10%] group">
                <div className="absolute inset-0 bg-white/20 blur-[120px] rounded-full scale-150" />
                <img src="/photo2131.png" alt="White Wallet" className="relative z-10 w-[240px] md:w-[380px] rotate-[-14deg] transition-all duration-500 group-hover:scale-105" />
              </div>

              <div className="absolute right-0 md:right-[4%] bottom-[8%] group">
                <div className="absolute inset-0 bg-blue-500/35 blur-[140px] rounded-full scale-150" />
                <img src="/photo2121.png" alt="Blue Wallet" className="relative z-10 w-[240px] md:w-[380px] rotate-[14deg] transition-all duration-500 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        {/* WAITLIST SECTION */}
        <section id="soon" className="px-6 md:px-20 py-32 relative z-10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[180px]" />
            <div className="absolute bottom-[-250px] right-[-100px] w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[160px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <p className="uppercase tracking-[0.45em] text-white/40 mb-6 text-sm">Applications Open In</p>
            
            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
              JOIN THE<br />PRIVATE WAITLIST
            </h2>
            <p className="text-white/50 text-sm mb-16">Ограниченное количество мест</p>

            <Countdown />

            {/* 🔥 Улучшенная прозрачная кнопка */}
            <div className="mt-20">
              <button
                disabled
                className="group relative mx-auto flex items-center justify-center gap-3 px-14 py-6 text-lg font-black tracking-wider border border-red-500/40 bg-white/5 hover:bg-white/10 backdrop-blur-3xl rounded-3xl transition-all duration-300 cursor-not-allowed w-full max-w-[340px]"
              >
                {/* Красный индикатор */}
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </div>

                <span className="line-through decoration-red-500/60 decoration-2">
                  JOIN THE WAITLIST
                </span>
              </button>
            </div>

            <div className="mt-6 text-white/40 uppercase tracking-[0.35em] text-sm">
              Applications closed • Limited seats
            </div>
          </div>
        </section>
      </main>

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
          animation: waveColorShift 25s ease infinite;
        }

        .wave1 { width: 900px; height: 900px; background: #2563eb; top: -250px; left: -150px; animation: float1 18s ease-in-out infinite, waveColorShift 23s ease infinite; }
        .wave2 { width: 1100px; height: 1100px; background: #3b82f6; bottom: -400px; right: -250px; animation: float2 25s ease-in-out infinite, waveColorShift 28s ease infinite; }
        .wave3 { width: 700px; height: 700px; background: #60a5fa; top: 15%; left: 35%; opacity: 0.45; animation: float3 20s ease-in-out infinite, waveColorShift 19s ease infinite; }
        .wave4 { width: 500px; height: 500px; background: #1e40af; top: 40%; left: 10%; opacity: 0.3; animation: float4 22s ease-in-out infinite, waveColorShift 26s ease infinite; }

        @keyframes waveColorShift {
          0% { background: #2563eb; }
          25% { background: #3b82f6; }
          50% { background: #60a5fa; }
          75% { background: #1e88e5; }
          100% { background: #2563eb; }
        }

        @keyframes float1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(140px, 60px) scale(1.15); } }
        @keyframes float2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-160px, -90px) scale(1.2); } }
        @keyframes float3 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(80px, -70px) scale(1.1); } }
        @keyframes float4 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(60px, 40px) scale(1.15); } }
      `}</style>
    </>
  );
}
