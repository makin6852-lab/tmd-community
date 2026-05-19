'use client';

import { motion } from 'framer-motion';

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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
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
              href="#apply"
              className="bg-white text-[#04113A] rounded-2xl px-8 py-5 font-black inline-block hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
            >
              APPLY NOW
            </a>
          </motion.div>

          {/* PREMIUM WALLETS */}
<div className="relative flex items-center justify-center gap-6 flex-wrap">

  {/* WHITE WALLET */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="relative flex items-center justify-center"
  >
    {/* premium glow */}
    <div className="absolute w-[260px] h-[260px] bg-gray-300/20 blur-[60px] rounded-full" />

    <img
      src="/photo2131.png"
      alt="White Wallet"
      className="relative z-10 w-[240px] md:w-[280px] drop-shadow-[0_20px_50px_rgba(255,255,255,0.18)] select-none"
      draggable="false"
    />
  </motion.div>

  {/* BLUE WALLET */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.15 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="relative flex items-center justify-center"
  >
    {/* blue glow */}
    <div className="absolute w-[260px] h-[260px] bg-blue-500/15 blur-[70px] rounded-full" />

    <img
      src="/photo2121.png"
      alt="Blue Wallet"
      className="relative z-10 w-[240px] md:w-[280px] drop-shadow-[0_20px_60px_rgba(37,99,235,0.20)] select-none"
      draggable="false"
    />
  </motion.div>
</div>
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
              className="block hover:text-white transition"
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

  
