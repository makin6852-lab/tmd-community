'use client';

import { motion } from 'framer-motion';
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
          className="bg-white/[0.05] backdrop-blur-[25px] border border-white/10 rounded-[34px] py-10"
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
    <div className="bg-[#04113A] text-white min-h-screen overflow-hidden relative">

      {/* YANDEX MUSIC STYLE WAVES */}
      <div className="absolute inset-0 overflow-hidden -z-10">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[-150px] left-[-100px] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[-180px] right-[-120px] w-[700px] h-[700px] bg-cyan-400/10 rounded-full blur-[170px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[25%] left-[35%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[130px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* BADGE */}
            <div className="inline-flex items-center gap-3 bg-white/[0.05] border border-white/10 backdrop-blur-[25px] rounded-full px-5 py-3 mb-8">

              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />

              <span className="uppercase tracking-[0.35em] text-xs text-white/70">
                Exclusive Private Community
              </span>
            </div>

            {/* LOGO */}
            <div className="mb-10">
              <div className="relative w-[120px] h-[120px] rounded-[36px] bg-white/[0.05] border border-white/10 backdrop-blur-[30px] flex items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden">

                <motion.div
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute w-[160px] h-[160px] bg-blue-400/20 blur-[60px]"
                />

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
          </motion.div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center min-h-[650px]">

            {/* glass background */}
            <div className="absolute w-[580px] h-[420px] rounded-[55px] bg-white/[0.04] border border-white/10 backdrop-blur-[35px]" />

            {/* white wallet */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 1 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="absolute left-[5%] md:left-[10%] top-[18%]"
            >
              <div className="absolute inset-0 bg-white/20 blur-[90px] rounded-full scale-125" />

              <img
                src="/photo2131.png"
                alt="White Wallet"
                className="relative z-10 w-[220px] md:w-[320px] rotate-[-12deg] drop-shadow-[0_35px_80px_rgba(255,255,255,0.18)]"
              />
            </motion.div>

            {/* blue wallet */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: [0, 10, 0],
              }}
              transition={{
                opacity: { duration: 1.2 },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="absolute right-[5%] md:right-[10%] bottom-[12%]"
            >
              <div className="absolute inset-0 bg-blue-500/25 blur-[100px] rounded-full scale-125" />

              <img
                src="/photo2121.png"
                alt="Blue Wallet"
                className="relative z-10 w-[220px] md:w-[320px] rotate-[12deg] drop-shadow-[0_35px_80px_rgba(37,99,235,0.30)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PREMIUM LINE */}
      <section className="bg-white text-[#04113A] rounded-t-[60px] px-6 md:px-20 py-28 relative z-10">

        <h2 className="text-5xl font-black text-center mb-14">
          PREMIUM LINE
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <div className="bg-[#07154A] rounded-[42px] p-8 text-white shadow-2xl">
            <img
              src="/photo2131.png"
              className="rounded-[24px] mb-8 w-full"
            />

            <h3 className="text-4xl font-black">
              WHITE WALLET
            </h3>
          </div>

          <div className="bg-[#07154A] rounded-[42px] p-8 text-white shadow-2xl">
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
      <section id="soon" className="px-6 md:px-20 py-28">

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
    </div>
  );
}