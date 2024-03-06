import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-24 px-4 md:px-10 xl:pt-24 xl:px-24 ">
    <div className="w-full flex flex-col items-center sm:flex-row sm:justify-between">
      <div>
        <h1 className="text-4xl md:text-5xl xl:text-6xl  font-bold leading-12 text-black/90 text-center sm:text-start">Games play best <br /> on Xbox one</h1>
        <h3 id="text"  className="my-10 text-black/70  font-medium text-center sm:text-start px-16 sm:px-0">Play 1300 games on the only console designed to play <br/>
        the best games of the past, present and future.
        </h3>
      </div>
      <div className="w-full sm:w-[50%] h-[18rem] md:h-[26rem]  relative overflow-hidden">
        <Image src="/images/game.jpg" fill={true} alt="game" className="object-cover"/>
      </div>
    </div>
    </main>
  );
}
