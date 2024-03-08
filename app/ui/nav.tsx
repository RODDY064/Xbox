import Image from "next/image";
import Link from "next/link";

const Links:string[] = [
    "Console",
    "Games",
    "Community",
    "Accessories"
]



export default function Nav() {
  return (
    <div className="w-full flex items-center justify-between p-6 ">
      <div className="flex md:gap-4 items-center">
        <div className="w-[2rem] h-[2rem] grid grid-cols-2 grid-rows-2 gap-[2px]">
          {[1,2,3,4].map((item)=>(
          <div key={item} className="w-full h-full rounded-sm bg-neutral-200"></div>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <Image src="/icons/logo.jpg" width={170} height={10} alt="logo"/>
          <div className="items-center sm:gap-4 xl:gap-10 hidden sm:flex">
            {Links.map((item)=>(
             <Link key={item} href="/" className="font-bold text-black/70 hover:text-lime-600">{item}</Link>
            ))
            }
          </div>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="w-[15rem]  h-10 bg-neutral-100/70 border border-lime-600 rounded-[25px] hidden xl:block">
            <input placeholder="searching..." className="w-[90%] h-full bg-transparent text-black/70  focus:outline-none p-2"/>
        </div>
        <div>
          <Image src="/icons/menu.svg" width={20} height={20} alt="menu"/>
        </div>
      </div>
    </div>
  );
}
