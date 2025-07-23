import Carousel from "./ui/carousel";
export function HowToBuy() {
  const slideData = [
    {
      title: "CREATE WALLET",
      desc: "Download Phantom wallet and create a new wallet. or login to an existing wallet",
      src: "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3390_c4yupl.webp",
    },
    {
      title: "BUY SOL",
      desc: "Purchase Solana (SOL) on your wallet",
      src: "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3395_bywlhi.webp",
    },
    {
      title: "CONNECT WALLET",
      desc: "Connect your Phantom wallet to Bonk.fun",
      src: "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258280/IMG_3389_lnyiry.webp",
    },
    {
      title: "SWAP $AXY",
      desc: "Swap the SOL you have in your wallet for $AXY",
      src: "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753258281/IMG_3398_ehgq4q.webp",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full py-20 bg-gradient-to-b from-main via-black/5 to-subMain/30">
      <h1 className=" monoton text-4xl md:text-6xl mb-10 text-center">
        HOW TO <span className=" monoton underline">BUY</span>
      </h1>
      <Carousel slides={slideData} />
    </div>
  );
}
