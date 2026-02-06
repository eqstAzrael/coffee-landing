/** about-us/page.js */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <main className="bg-[#F2EAD7] min-h-screen">
 
      <svg
        className="top-0 left-0 w-full h-15"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
          fill="#E2BFA1"
        />
      </svg>


      <section className="relative flex flex-col lg:flex-row justify-between p-8 lg:p-20 items-center bg-[#E2BFA1] min-h-[70vh]">
        
        <div className="mt-10 lg:mt-0">
          <Image
            src="/Equipment.jpg" 
            alt="Coffee beans and equipment"
            width={800/2}
            height={800/2}
            className="rounded-2xl shadow-2xl"
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start gap-8 max-w-2xl">
          <h1 className="text-center lg:text-left font-light text-3xl lg:text-4xl">
            OUR STORY <br />
            <span className="text-[#ffffff] text-5xl lg:text-8xl font-bold">
              BEAN TO CUP
            </span>
          </h1>
          <p className="text-[#452812] text-lg lg:text-xl text-center lg:text-left leading-relaxed">
            Since 2010, we've been passionate about bringing the finest coffee 
            experience to every cup. From sourcing ethical beans to perfecting 
            each roast, our journey is about more than coffee - it's about community.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/menu" 
              className="bg-[#492923] text-white text-lg lg:text-xl rounded-full px-8 py-3 hover:opacity-90 transition-opacity"
            >
              OUR MENU
            </Link>
            <Link 
              href="/contacts" 
              className="border-2 border-[#492923] text-[#492923] text-lg lg:text-xl rounded-full px-8 py-3 hover:bg-[#492923] hover:text-white transition-all"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

    
      <svg
        className="bottom-0 left-0 w-full rotate-180 h-15"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
          fill="#E2BFA1"
        />
      </svg>

     
      <section className="relative min-h-screen flex flex-col items-center p-8 lg:p-20 gap-15">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#452812] text-center">
          OUR VALUES
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center gap-4">
            
            <Image src="/green.jpg" width={1024/4} height={1024/4} alt="coffee tree" className="rounded-full"/>
            
            <h3 className="text-2xl font-bold text-[#452812]">Ethical Sourcing</h3>
            <p className="text-[#473932]">
              We work directly with farmers who practice sustainable agriculture, 
              ensuring fair wages and environmental responsibility.
            </p>
          </div>

 
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center gap-4">
            <Image src="/roast.jpg" width={1024/4} height={1024/4} alt="coffee tree" className="rounded-full"/>

            <h3 className="text-2xl font-bold text-[#452812]">Artisan Roasting</h3>
            <p className="text-[#473932]">
              Each batch is small-roasted by our master roasters to highlight 
              unique flavor profiles and ensure freshness.
            </p>
          </div>


          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center gap-4">
            <Image src="/community.jpg" width={1024/4} height={1024/4} alt="coffee tree" className="rounded-full"/>

            <h3 className="text-2xl font-bold text-[#452812]">Community First</h3>
            <p className="text-[#473932]">
              We believe coffee brings people together. Our cafes are spaces 
              for connection, creativity, and conversation.
            </p>
          </div>
        </div>


        
      </section>

   <svg
          className="bottom-0 left-0 w-full h-15"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C300,0 400,40 600,20 C800,0 900,40 1200,20 L1200,40 L0,40 Z"
            fill="#E2BFA1"
          />
        </svg>
      <section className="min-h-screen flex flex-col gap-15 bg-[#E2BFA1] items-center p-8 lg:p-20 text-white">
        <h1 className="font-bold text-4xl lg:text-5xl text-center">MEET OUR TEAM</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
  
          <div className="bg-[#F2EAD7] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg">
            <div className="w-40 h-40 bg-[#452812] rounded-full overflow-hidden">

              <div className="w-full h-full bg-[#492923] flex items-center justify-center">
                <span className="text-6xl text-white">👨‍🍳</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#452812]">Alex Morgan</h3>
            <p className="text-[#473932] text-center">Head Roaster</p>
            <p className="text-[#473932] text-center text-sm">
              10+ years of experience in artisan coffee roasting
            </p>
          </div>

  
          <div className="bg-[#F2EAD7] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg">
            <div className="w-40 h-40 bg-[#452812] rounded-full overflow-hidden">
              <div className="w-full h-full bg-[#492923] flex items-center justify-center">
                <span className="text-6xl text-white">👩‍💼</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#452812]">Maria Silva</h3>
            <p className="text-[#473932] text-center">Coffee Sourcer</p>
            <p className="text-[#473932] text-center text-sm">
              Direct relationships with farmers across 3 continents
            </p>
          </div>

         
          <div className="bg-[#F2EAD7] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg">
            <div className="w-40 h-40 bg-[#452812] rounded-full overflow-hidden">
              <div className="w-full h-full bg-[#492923] flex items-center justify-center">
                <span className="text-6xl text-white">👨‍💻</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#452812]">David Chen</h3>
            <p className="text-[#473932] text-center">Barista Trainer</p>
            <p className="text-[#473932] text-center text-sm">
              National latte art champion & brewing expert
            </p>
          </div>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#F2EAD7]">500+</div>
            <div className="text-[#452812]">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#F2EAD7]">12</div>
            <div className="text-[#452812]">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#F2EAD7]">30+</div>
            <div className="text-[#452812]">Coffee Varieties</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#F2EAD7]">3</div>
            <div className="text-[#452812]">Awards Won</div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link 
            href="/contacts" 
            className="bg-[#492923] text-white text-xl rounded-full px-10 py-4 hover:opacity-90 transition-opacity inline-block"
          >
            VISIT OUR CAFE
          </Link>
        </div>
      </section>
      
    </main>
  );
}

export default AboutUs;