/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import Image from "next/image";
import CoffeeList from "./components/CoffeeList";

function Page() {
  return (
    <main className="bg-[#F2EAD7]">

      <svg 
        className="top-0 left-0 w-full h-15" // rotate-180 переворачивает волну
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
      >
        <path 
          d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
          fill="#E2BFA1"
        />
      </svg>
      <section className="flex flex-row justify-between p-30 items-center bg-[#E2BFA1] h-130">
        
      <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-center font-light">
            FRESHLY ROASTED <br />
            <span className="text-[#F2EAD7] text-8xl font-bold">COFFEE</span>
          </h1>
          <button className="bg-[#492923] text-4xl text-white w-40 rounded-4xl px-5 py-2 cursor-pointer">
            SHOP
          </button>
        </div>
        <Image
          src="/coffee.png"
          alt="Coffee"
          width={736 / 2}
          height={736 / 2}
          className=""
        />
      
      </section>
      <svg 
        className="bottom-0 left-0 w-full rotate-180 h-15" // rotate-180 переворачивает волну
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
      >
        <path 
          d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
          fill="#E2BFA1"
        />
      </svg>

      <section className="min-h-screen flex flex-col items-center p-20 gap-15">
        <h1>TOP CATEGORIES</h1>
        <CoffeeList />
      </section>
    </main>

  );
}

export default Page;
