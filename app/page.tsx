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

  const items = [
    ['Days', timeLeft.days],
    ['Hours', timeLeft.hours],
    ['Minutes', timeLeft.minutes],
    ['Seconds', timeLeft.seconds],
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
      {items.map(([label, value]) => (
        <div
          key={String(label)}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[36px] py-10"
        >
          <div className="text-5xl md:text-6xl font-black text-white">
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
    <div className="bg-[#04113A] text-white min-h-screen overflow-x-hidden">

      {/* PREMIUM BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[160px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-[0.35em] text-white/60 mb-5 text-sm">
              Exclusive P2P Community
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
              T.M.D <br />
              COMMUNITY
            </h1>

            <h2 className="text-2xl md:text-4xl text-white/80 mb-6 leading-tight">
              Картхолдер который будет
              <br />
              вас выделять
            </h2>

            <p className="text-white/70 text-lg max-w-xl mb-10">
              Premium CartHolders • Private Community • Luxury Support
            </p>

            <a
              href="#soon"
              className="bg-white text-[#04113A] rounded-2xl px-8 py-5 font-black inline-block hover:scale-105 transition-all duration-300"
            >
              SOON
            </a>
          </motion.div>

          {/* WALLETS */}
          <div className="relative flex items-center justify-center gap-6 flex-wrap">

            {/* WHITE WALLET */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gray-300/20 blur-[60px] rounded-full" />

              <img
                src="/photo2131.png"
                alt="White Wallet"
                className="relative z-10 w-[240px] md:w-[280px] drop-shadow-2xl"
              />
            </motion.div>

            {/* BLUE WALLET */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[70px] rounded-full" />

              <img
                src="/photo2121.png"
                alt="Blue Wallet"
                className="relative z-10 w-[240px] md:w-[280px] drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PREMIUM LINE */}
      <section className="bg-white text-[#04113A] rounded-t-[60px] px-6 md:px-20 py-28 relative z-10">
        <h2 className="text-5xl font-black mb-14 text-center">
          PREMIUM LINE
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* WHITE */}
          <div className="bg-[#07154A] rounded-[42px] p-8 text-white shadow-2xl">
            <img
              src="/photo2131.png"
              alt="White Wallet"
              className="rounded-[24px] mb-8 w-full"
            />

            <h3 className="text-4xl font-black mb-4">
              WHITE WALLET
            </h3>

            <p className="text-white/70">
              Luxury minimal premium edition.
            </p>
          </div>

          {/* BLUE */}
          <div className="bg-[#07154A] rounded-[42px] p-8 text-white shadow-2xl">
            <img
              src="/photo2121.png"
              alt="Blue Wallet"
              className="rounded-[24px] mb-8 w-full"
            />

            <h3 className="text-4xl font-black mb-4">
              BLUE WALLET
            </h3>

            <p className="text-white/70">
              Premium edition for active members.
            </p>
          </div>

        </div>
      </section>

      {/* SOON + COUNTDOWN */}
      <section
        id="soon"
        className="px-6 md:px-20 py-28"
      >
        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.4em] text-white/50 mb-4">
            Exclusive Access
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            SOON
          </h2>

          <p className="text-white/70 text-xl mb-12">
            Application system will open soon.
            <br />
            Summer 2026 Countdown
          </p>

          <Countdown />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 px-6 md:px-20 text-white/70">
        <div className="flex justify-between flex-col md:flex-row gap-8 max-w-7xl mx-auto">
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