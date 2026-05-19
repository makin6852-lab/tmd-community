@'
'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-[#04113A] text-white min-h-screen overflow-x-hidden">

      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[160px] rounded-full" />
      </div>

      <section className="relative min-h-screen flex items-center px-6 md:px-20 py-20 overflow-hidden">
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
              className="bg-white text-[#04113A] rounded-2xl px-8 py-5 font-black inline-block hover:scale-105 transition-all duration-300"
            >
              APPLY NOW
            </a>
          </motion.div>

          <div className="relative flex items-center justify-center gap-6 flex-wrap">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute w-[260px] h-[260px] bg-gray-300/20 blur-[60px] rounded-full" />

              <img
                src="/photo2131.png"
                alt="White Wallet"
                className="relative z-10 w-[240px] md:w-[280px] drop-shadow-[0_20px_50px_rgba(255,255,255,0.18)]"
                draggable="false"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute w-[260px] h-[260px] bg-blue-500/15 blur-[70px] rounded-full" />

              <img
                src="/photo2121.png"
                alt="Blue Wallet"
                className="relative z-10 w-[240px] md:w-[280px] drop-shadow-[0_20px_60px_rgba(37,99,235,0.20)]"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#04113A] rounded-t-[60px] px-6 md:px-20 py-28 relative z-10">
        <h2 className="text-5xl font-black mb-14 text-center">
          PREMIUM LINE
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

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

      <section id="apply" className="px-6 md:px-20 py-28">
        <h2 className="text-5xl font-black text-center mb-12">
          APPLY TO COMMUNITY
        </h2>

        <form
          action="https://formsubmit.co/tmdsupport1@gmail.com"
          method="POST"
          className="max-w-2xl mx-auto grid gap-5"
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
            placeholder="@telegram"
            className="bg-white/10 p-5 rounded-2xl border border-white/10"
          />

          <textarea
            name="message"
            required
            placeholder="Почему хотите вступить?"
            className="bg-white/10 p-5 rounded-2xl border border-white/10 min-h-[180px]"
          />

          <button
            type="submit"
            className="bg-white text-[#04113A] rounded-2xl py-5 font-black"
          >
            SEND APPLICATION
          </button>
        </form>
      </section>

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
'@ | Set-Content app/page.tsx

npm run build
git add .
git commit -m "full fix"
git push