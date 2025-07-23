import { FaXTwitter, FaArrowRight } from "react-icons/fa6";
import { RiUserCommunityLine } from "react-icons/ri";
import { Marquee } from "./components/Marquee";
import { HowToBuy } from "./components/HowToBuy";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" pt-1 bg-main text-white min-h-screen">
      {/* navbar  */}
      <div className="z-50 fixed top-0 w-full px-5 md:px-20">
        <div className="relative mt-6 py-2 px-3 md:px-6 flex items-center bg-subMain justify-between shadow-[0px_4px_0px_0px_#9c8193] rounded-xl">
          {/* Mobile left icons + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="https://x.com/i/communities/1947855622659314020"
              target="_blank"
            >
              <RiUserCommunityLine className="text-zinc-800 text-2xl" />
            </a>
            <a href="https://x.com/solanaaxy" target="_blank">
              <FaXTwitter className="text-zinc-800 text-2xl" />
            </a>
            <button onClick={() => setIsOpen(true)}>
              <IoMenu className="text-zinc-800 text-2xl" />
            </button>
          </div>

          {/* Center Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-subMain overflow-hidden">
              <img
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3397_dy9hw7.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            <a href="/" className="heading text-black/80">
              HOME
            </a>
            <a href="#about" className="heading text-black/80">
              ABOUT
            </a>
            <a href="#howtobuy" className="heading text-black/80">
              HOW TO BUY
            </a>
          </div>

          {/* Desktop right side buttons */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://x.com/i/communities/1947855622659314020"
              target="_blank"
            >
              <RiUserCommunityLine className="text-zinc-800 text-2xl" />
            </a>
            <a href="https://x.com/solanaaxy" target="_blank">
              <FaXTwitter className="text-zinc-800 text-2xl" />
            </a>
            <a
              href="https://letsbonk.fun/2CqTmKmejm6FoYZgKTgiX1gyJQ73u9bTdXTBmq9xbonk"
              target="_blank"
            >
              <button className="px-6 md:px-10 bg-main py-1 rounded-lg border border-zinc-800">
                <p className="heading text-[#45B9F6]">BUY $AXY</p>
              </button>
            </a>
          </div>

          {/* Mobile BUY button */}
          <div className="md:hidden">
            <a
              href="https://letsbonk.fun/2CqTmKmejm6FoYZgKTgiX1gyJQ73u9bTdXTBmq9xbonk"
              target="_blank"
            >
              <button className="px-6 bg-main py-1 rounded-lg border border-zinc-800">
                <p className="heading text-[#45B9F6]">BUY $AXY</p>
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
            <div className="fixed top-0 right-0 w-64 h-full bg-subMain p-5 shadow-xl z-50 flex flex-col gap-5">
              <div className="flex justify-between items-center mb-5">
                <p className="text-xl font-semibold text-black/80">Menu</p>
                <button onClick={() => setIsOpen(false)}>
                  <IoClose className="text-2xl text-zinc-800" />
                </button>
              </div>
              <a
                href="/"
                className="heading text-black/80"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </a>
              <a
                href="#about"
                className="heading text-black/80"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </a>
              <a
                href="#howtobuy"
                className="heading text-black/80"
                onClick={() => setIsOpen(false)}
              >
                HOW TO BUY
              </a>
            </div>
          </div>
        )}
      </div>
      {/* navbar end */}

      {/* hero  */}
      <div className="">
        <div className=" relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-main via-black/5 to-subMain/30">
          <div className=" absolute left-0 bottom-0">
            <div className=" w-52 md:w-96 ">
              <img
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753268044/hydra_ezo5uz.png"
                className=" w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className=" absolute right-0 top-40 md:top-1/2 -translate-y-1/2">
            <div className="w-44 md:w-96 ">
              <img
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753268250/3dd17a48-fc09-4f53-ba70-5decdb1f8253_removalai_preview_nqp6d6.png"
                className=" w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className=" flex flex-col items-center">
            <h1 className=" text-4xl md:text-7xl hero">WELCOME TO</h1>
            <h1 className=" text-4xl md:text-7xl  hero">
              THE{" "}
              <span className=" text-transparent text-stroke hero">
                COMMUNITY
              </span>
            </h1>
            <p className=" w-80 md:w-[670px] mt-2 text-zinc-300 text-center md:text-base text-xs">
              AXY WERE INSPIRED BY THE OCEAN TO
              CREATE THE STRONGEST COMMUNITY POSSIBLE BY UNITING MORE TALENTED
              ARTISTS AND INFLUENCERS.
            </p>
            <div className="  w-80 md:w-[575px]  border-2 border-zinc-400 mt-5 pl-5 rounded-full h-12 flex items-center justify-between">
              <p className=" select-all heading text-sm truncate">
                2CqTmKmejm6FoYZgKTgiX1gyJQ73u9bTdXTBmq9xbonk
              </p>
              <a
                href="https://letsbonk.fun/2CqTmKmejm6FoYZgKTgiX1gyJQ73u9bTdXTBmq9xbonk"
                target="_blank"
                className=" px-5 rounded-r-full bg-[#45B9F6] hover:bg-[#3b9ed3] duration-200 h-full flex items-center justify-center"
              >
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* marquee  */}
      <Marquee />

      {/* marquee end */}

      {/* about  */}
      <div id="about" className=" px-5 md:px-20 min-h-screen">
        <h1 className=" monoton text-4xl md:text-6xl mt-10 md:mt-20 text-center">
          MEET <span className=" monoton underline">AXY</span>
        </h1>
        <div className=" mt-10 flex gap-5 flex-col-reverse md:flex-row items-center md:gap-10">
          <div className=" w-full h-96">
            <img
              src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753280980/83db236c-c400-4b96-9778-bad37404fdc4_removalai_preview_f3lnz6.png"
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className=" w-full">
            <p className=" heading leading-7 tracking-wide">
              Axy began as a wide-eyed sea meme drifting through the internet's
              weirdest currents — cute, clueless, and deeply unbothered. But
              beneath that bubbly exterior lies a cold-blooded crypto killer. By
              day, it’s the face of meme culture, but by night, Axy glides
              through the Solana network like a ghost — flipping tokens,
              draining pools, and vanishing without a ripple. Misjudged for its
              charm, Axy isn’t just a meme — it’s a deep-sea degenerate with
              instincts sharper than any shark. Welcome to Axy: the silent
              assassin of Solana.
            </p>
            <div className=" flex items-center gap-3 mt-5">
              <a
                href="https://letsbonk.fun/2CqTmKmejm6FoYZgKTgiX1gyJQ73u9bTdXTBmq9xbonk"
                target="_blank"
              >
                <button className=" px-10 bg-[#e3bdd6] shadow-[0px_4px_0px_0px_#9c8193] py-2 rounded-lg ">
                  <p className=" heading text-black/70">BUY $AXY</p>
                </button>
              </a>
              <a
                href="https://x.com/i/communities/1947855622659314020"
                target="_blank"
              >
                <button className=" px-10 bg-subMain py-2 rounded-lg shadow-[0px_4px_0px_0px_#9c8193]">
                  <p className=" heading text-black/70">JOIN COMMUNITY</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}
      {/* ow to buy  */}
      <HowToBuy />
      {/* ow to buy end */}
      {/* footer  */}
      <div className=" relative bg-gradient-to-t from-main  to-subMain/30">
        <div className=" w-full flex gap-5 flex-col items-center justify-center px-5 md:px-24 py-10">
          <div className=" flex flex-col items-center">
            <div className=" w-14 h-14 rounded-full overflow-hidden border border-zinc-300">
              <img
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3401_g280zg.webp"
                alt=""
                className=" w-full h-full"
              />
            </div>
            <h1 className=" heading text-lg mt-2">Join The Community</h1>
            <a
              href="https://x.com/i/communities/1947855622659314020"
              target="_blank"
              className=" mt-2 flex items-center gap-2"
            >
              <FaXTwitter /> <span className=" text-zinc-300">Twitter</span>
            </a>
          </div>
          <p className=" text-2xl monoton">
            © {new Date().getFullYear()} Axysolana
          </p>
        </div>
      </div>
      {/* footer end */}
    </div>
  );
}

export default App;
