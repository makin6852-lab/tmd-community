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
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);

      if (updatedTime.days === 0 && 
          updatedTime.hours === 0 && 
          updatedTime.minutes === 0 && 
          updatedTime.seconds === 0) {
        setIsEnded(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'Дней', value: timeLeft.days },
    { label: 'Часов', value: timeLeft.hours },
    { label: 'Минут', value: timeLeft.minutes },
    { label: 'Секунд', value: timeLeft.seconds },
  ];

  if (isEnded) {
    return (
      <div className="text-center py-10">
        <div className="text-6xl md:text-7xl font-black text-emerald-400 mb-4">
          ЗАЯВКИ ОТКРЫТЫ
        </div>
        <p className="text-white/70 text-xl">Добро пожаловать в T.M.D Community</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
      {items.map((item) => (
        <div
          key={item.label}
          className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[34px] py-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-white/20 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="relative z-10 text-5xl md:text-6xl font-black tracking-tighter">
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
        {/* WAVES */}
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center px-6 md:px-20 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
            {/* LEFT SIDE */}
            <div>
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-5 py-3 mb-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="uppercase tracking-[0.35em] text-xs text-white/70"> Закрытое сообщество </span>
              </div>

              {/* LOGO */}
              <div className="mb-10">
                <div className="relative w-[130px] h-[130px] rounded-[42px] bg-white/5 border border-white/10 backdrop-blur-2xl flex items-center justify-center overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
                  <div className="absolute w-[220px] h-[220px] bg-blue-500/30 blur-[80px] animate-pulse" />
                  <span className="text-4xl font-black tracking-[0.12em] z-10">TMD</span>
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-[0.85] mb-6">
                T.M.D<br />COMMUNITY
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-white/90 mb-6 leading-tight">
                Приватное сообщество
              </h2>
              <p className="text-white/60 text-lg max-w-xl mb-10">
                Закрытое сообщество для основателей и ключевых участников T.M.D
              </p>

              <a
                href="#soon"
                className="bg-white text-[#04113A] rounded-[24px] px-10 py-6 font-black text-lg inline-flex items-center hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
              >
                ПОДАТЬ ЗАЯВКУ
              </a>
            </div>

            {/* RIGHT SIDE - WALLETS */}
            <div className="relative flex items-center justify-center min-h-[720px]">
              <div className="absolute w-[680px] h-[520px] rounded-[70px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_50px_140px_rgba(0,0,0,0.5)]" />
              <div className="absolute w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[140px] animate-pulse" />
              <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[120px]" />

              {/* White Wallet */}
              <div className="absolute left-0 md:left-[4%] top-[10%] group">
                <div className="absolute inset-0 bg-white/20 blur-[120px] rounded-full scale-150 opacity-80" />
                <img
                  src="/photo2131.png"
                  alt="White Wallet"
                  className="relative z-10 w-[240px] md:w-[380px] rotate-[-14deg] drop-shadow-[0_50px_140px_rgba(255,255,255,0.22)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-[-12deg]"
                />
              </div>

              {/* Blue Wallet */}
              <div className="absolute right-0 md:right-[4%] bottom-[8%] group">
                <div className="absolute inset-0 bg-blue-500/35 blur-[140px] rounded-full scale-150 opacity-90" />
                <img
                  src="/photo2121.png"
                  alt="Blue Wallet"
                  className="relative z-10 w-[240px] md:w-[380px] rotate-[14deg] drop-shadow-[0_50px_140px_rgba(37,99,235,0.45)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-[12deg]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS SECTION */}
        <section id="soon" className="px-6 md:px-20 py-32 relative z-10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[180px]" />
            <div className="absolute bottom-[-250px] right-[-100px] w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[160px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <p className="uppercase tracking-[0.45em] text-white/40 mb-6 text-sm">
              До открытия приёма заявок осталось
            </p>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
              JOIN THE<br />PRIVATE WAITLIST
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-16">
              Доступ в закрытое сообщество T.M.D откроется после окончания обратного отсчёта.
            </p>

            <Countdown />

            <div className="mt-16 flex flex-col items-center">
              <button
                disabled
                className="relative overflow-hidden bg-white/[0.04] border border-white/10 text-white/40 rounded-[28px] px-12 py-6 font-black tracking-[0.2em] backdrop-blur-2xl cursor-not-allowed shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              >
                <span className="relative z-10 flex items-center gap-4">
                  ЗАЯВКИ СКОРО ОТКРОЮТСЯ
                </span>
              </button>
              <div className="mt-6 text-white/30 uppercase tracking-[0.35em] text-xs">
                Waitlist • Applications Not Yet Available
              </div>
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
        }
        /* ... (оставляю твои анимации волн и частиц без изменений) ... */
        .wave1 { width: 900px; height: 900px; background: #2563eb; top: -250px; left: -150px; animation: float1 16s ease-in-out infinite; }
        .wave2 { width: 1100px; height: 1100px; background: #38bdf8; bottom: -400px; right: -250px; animation: float2 22s ease-in-out infinite; }
        .wave3 { width: 700px; height: 700px; background: #60a5fa; top: 15%; left: 35%; opacity: 0.35; animation: float3 18s ease-in-out infinite; }
        .wave4 { width: 500px; height: 500px; background: #1d4ed8; top: 40%; left: 10%; opacity: 0.2; animation: float4 20s ease-in-out infinite; }

        @keyframes float1 { 0% { transform: translate(0, 0) scale(1); } 50% { transform: translate(140px, 60px) scale(1.15); } 100% { transform: translate(0, 0) scale(1); } }
        @keyframes float2 { 0% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-160px, -90px) scale(1.2); } 100% { transform: translate(0, 0) scale(1); } }
        @keyframes float3 { 0% { transform: translate(0, 0) scale(1); } 50% { transform: translate(80px, -70px) scale(1.1); } 100% { transform: translate(0, 0) scale(1); } }
        @keyframes float4 { 0% { transform: translate(0, 0) scale(1); } 50% { transform: translate(60px, 40px) scale(1.15); } 100% { transform: translate(0, 0) scale(1); } }
      `}</style>
    </>
  );
}
