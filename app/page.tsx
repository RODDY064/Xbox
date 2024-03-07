import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-24 px-4 md:px-8 xl:pt-4 xl:px-24 ">
    <div className="w-full flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="flex flex-col  items-center md:items-start">
        <h1 className="text-4xl md:text-4xl xl:text-6xl  font-bold leading-12 text-black/90 text-center sm:text-start">Games play best <br /> on Xbox one</h1>
        <h3 id="text"  className="my-10 text-black/70  font-medium text-center sm:text-start px-16 sm:px-0">Play 1300 games on the only console designed to play <br/>
        the best games of the past, present and future.
        </h3>
        <div className="w-[10rem] h-12 bg-lime-800 p-2 flex items-center justify-center text-white cursor-pointer rounded-[15px]">
          Learn More
        </div>
      </div>
      <div className="w-full sm:w-[55%] h-[20rem] md:h-[28rem]  relative ">
        <Image src="/images/game.jpg" fill={true} alt="game" className="object-contain"/>
      </div>
    </div>
    </main>
  );
}
