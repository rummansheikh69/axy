import { FaXTwitter, FaArrowRight } from "react-icons/fa6";
import { RiUserCommunityLine } from "react-icons/ri";

function App() {
  return (
    <div className=" pt-1 bg-main text-white min-h-screen">
      {/* navbar  */}
      <div className=" z-50 fixed top-0 w-full px-5 md:px-20">
        <div className=" relative mt-6 py-2 px-3 md:px-6 flex items-center bg-subMain justify-between shadow-[0px_4px_0px_0px_#9c8193] rounded-xl">
          <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className=" w-24 h-24 rounded-full border-4 border-subMain overflow-hidden">
              <img
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3397_dy9hw7.webp"
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
          </div>

          <div className=" flex items-center gap-5">
            <a href="/" className=" heading  text-black/80">
              HOME
            </a>
            <a href="#about" className=" heading text-black/80">
              ABOUT
            </a>
            <a href="#howtobuy" className=" heading text-black/80">
              HOW TO BUY
            </a>
          </div>
          <div className=" flex items-center gap-5 ">
            <div>
              <a
                href="https://x.com/i/communities/1947855622659314020"
                target="_blank"
              >
                <RiUserCommunityLine className=" text-zinc-800 text-2xl" />
              </a>
            </div>
            <div>
              <a href="https://x.com/solanaaxy" target="_blank">
                <FaXTwitter className=" text-zinc-800 text-2xl" />
              </a>
            </div>
            <a
              href="https://letsbonk.fun/WAGAUZAcy1QQk6UctqVSNjC1vyoiLCJ4vGvPtjzbonk"
              target="_blank"
            >
              <button className=" px-10 bg-main py-1 rounded-lg border border-zinc-800">
                <p className=" heading text-[#45B9F6]">BUY $AXY</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* navbar end */}

      {/* hero  */}
      <div className="">
        <div className=" relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-main via-black/5 to-subMain/30">
          <div className=" absolute left-0 bottom-0">
            <div className=" w-96 ">
              <img
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753268044/hydra_ezo5uz.png"
                className=" w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className=" absolute right-0 top-1/2 -translate-y-1/2">
            <div className=" w-96 ">
              <img
                src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753268250/3dd17a48-fc09-4f53-ba70-5decdb1f8253_removalai_preview_nqp6d6.png"
                className=" w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className=" flex flex-col items-center">
            <h1 className=" text-7xl hero">WELCOME TO</h1>
            <h1 className=" text-7xl hero">
              THE{" "}
              <span className=" text-transparent text-stroke hero">
                COMMUNITY
              </span>
            </h1>
            <p className=" max-w-2xl mt-2 text-zinc-300 text-center">
              FASTFOODFELLAZ WERE INSPIRED BY THE DEADFELLAZ COLLECTION TO
              CREATE THE STRONGEST COMMUNITY POSSIBLE BY UNITING MORE TALENTED
              ARTISTS AND INFLUENCERS.
            </p>
            <div className=" max-w-xl w-full border-2 border-zinc-400 mt-5 pl-5 rounded-full h-12 flex items-center justify-between">
              <p className=" select-all heading">
                WAGAUZAcy1QQk6UctqVSNjC1vyoiLCJ4vGvPtjzbonk
              </p>
              <a
                href="https://letsbonk.fun/WAGAUZAcy1QQk6UctqVSNjC1vyoiLCJ4vGvPtjzbonk"
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
    </div>
  );
}

export default App;
