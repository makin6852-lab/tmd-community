'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-[#04113A] text-white min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
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

            <h2 className="text-2xl md:text-4xl text-white/80 mb-6">
              Картхолдер который будет
              <br />
              вас выделять
            </h2>

            <p className="text-white/70 text-lg max-w-xl mb-10">
              Premium CartHolders • Private Community • Luxury Support
            </p>

            <a
              href="#apply"
              className="bg-white text-[#04113A] rounded-2xl px-8 py-4 font-bold inline-block hover:scale-105 transition-transform"
            >
              APPLY NOW
            </a>
          </motion.div>

          {/* КАРТХОЛДЕРЫ БЕЗ ЛАГАЮЩИХ АНИМАЦИЙ */}
          <div className="flex gap-8 justify-center flex-wrap">
            {/* Белый */}
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
                className="relative z-10 w-[280px] drop-shadow-2xl"
              />
            </motion.div>

            {/* Синий */}
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
                className="relative z-10 w-[280px] drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PREMIUM LINE */}
      <section className="bg-white text-[#04113A] rounded-t-[50px] px-6 md:px-20 py-28 -mt-10 relative z-10">
        <h2 className="text-5xl font-black mb-12 text-center">
          PREMIUM LINE
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#07154A] rounded-[42px] p-8 text-white">
            <img
              src="/photo2131.png"
              alt="White Wallet"
              className="rounded-[24px] mb-8 w-full"
            />
            <h3 className="text-4xl font-black mb-4">
              WHITE WALLET
            </h3>
            <p className="text-white/70">
              Luxury minimal edition.
            </p>
          </div>

          <div className="bg-[#07154A] rounded-[42px] p-8 text-white">
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

      {/* FORM */}
      <section id="apply" className="px-6 md:px-20 py-24 bg-[#04113A]">
        <h2 className="text-5xl font-black text-center mb-12">
          APPLY TO COMMUNITY
        </h2>

        <form
          action="https://formsubmit.co/tmdsupport1@gmail.com"
          method="POST"
          className="max-w-2xl mx-auto grid gap-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://tmd-community.vercel.app"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="bg-white/10 p-5 rounded-2xl border border-white/10"
          />

          <input
            name="telegram"
            required
            placeholder="@username Telegram"
            className="bg-white/10 p-5 rounded-2xl border border-white/10"
          />

          <textarea
            name="message"
            required
            placeholder="Почему хотите присоединиться?"
            className="bg-white/10 p-5 rounded-2xl border border-white/10 min-h-[160px]"
          />

          <button
            type="submit"
            className="bg-white text-[#04113A] rounded-2xl py-5 font-black"
          >
            SEND APPLICATION
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 px-6 md:px-20 text-white/70">
        <div className="flex justify-between flex-col md:flex-row gap-8 max-w-7xl mx-auto">
          <div>
            <div className="font-black text-2xl text-white">
              T.M.D COMMUNITY
            </div>
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

            <p>tmdsupport1@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}