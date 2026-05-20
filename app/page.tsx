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
          className="bg-white/[0.05] border border-white/10 backdrop-blur-[20px] rounded-[32px] py-10"
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
    <div className="relative min-h-screen overflow-hidden bg-[#030816] text-white">

      {/* LIQUID WAVES */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        {/* wave 1 */}
        <div
          className="absolute w-[120vw] h-[120vw] opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0) 70%)',
            top: '-35%',
            left: '-20%',
            filter: 'blur(90px)',
            animation: 'wave1 18s ease-in-out infinite',
          }}
        />

        {/* wave 2 */}
        <div
          className="absolute w-[120vw] h-[120vw] opacity-30"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 70%)',
            bottom: '-45%',
            right: '-20%',
            filter: 'blur(110px)',
            animation: 'wave2 22s ease-in-out infinite',
          }}
        />

        {/* wave 3 */}
        <div
          className="absolute w-[100vw] h-[100vw] opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(96,165,250,0.30) 0%, rgba(96,165,250,0) 70%)',
            top: '10%',
            left: '30%',
            filter: 'blur(120px)',
            animation: 'wave3 25s ease-in-out infinite',
          }}
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center px-6 md:px-20 py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-3 bg-white/[0.05] border border-white/10 backdrop-blur-[20px] rounded-full px-5 py-3 mb-8">

              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />

              <span className="uppercase tracking-[0.35em] text-xs text-white/70">
                Exclusive Private Community
              </span>
            </div>

            {/* LOGO */}

            <div className="mb-10">

              <div className="relative w-[120px] h-[120px] rounded-[36px] bg-white/[0.05] border border-white/10 backdrop-blur-[25px] flex items-center justify-center overflow-hidden">

                <div className="absolute w-[200px] h-[200px] bg-blue-500/20 blur-[70px]" />

                <span className="text-4xl font-black tracking-[0.08em] z-10">
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

            {/* GLASS */}

            <div className="absolute w-[620px] h-[460px] rounded-[60px] bg-white/[0.04] border border-white/10 backdrop-blur-[35px]" />

            {/* WHITE WALLET */}

            <div className="absolute left-[5%] md:left-[10%] top-[18%]">

              <div className="absolute inset-0 bg-white/20 blur-[100px] rounded-full scale-125" />

              <img
                src="/photo2131.png"
                alt="White Wallet"
                className="relative z-10 w-[220px] md:w-[330px] rotate-[-12deg]"
              />
            </div>

            {/* BLUE WALLET */}

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

      {/* PREMIUM LINE */}

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

      <section
        id="soon"
        className="px-6 md:px-20 py-28 relative"
      >

        <div className="max-w-5xl mx-auto text-center relative z-10">

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

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-12 px-6 md:px-20 text-white/70">

        <div className="max-w-7xl mx-auto flex justify-between flex-col md:flex-row gap-8">

          <div>

            <div className="font-black text-2xl text-white">
              T.M.D COMMUNITY
            </div>

            <p className="text-sm mt-1">
              Exclusive P2P CartHolders
            </p>
          </div>

          <div>

            <div className="font-semibold text-white mb-2">
              Support
            </div>

            <a
              href="https://t.me/managerTMD_p2p"
              className="block hover:text-white"
            >
              Telegram Support
            </a>

            <p>
              tmdsupport1@gmail.com
            </p>
          </div>
        </div>
      </footer>

      {/* ANIMATIONS */}

      <style jsx global>{`
        @keyframes wave1 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(80px, 40px) scale(1.15);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes wave2 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-100px, -60px) scale(1.2);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes wave3 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(50px, -40px) scale(1.1);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
}