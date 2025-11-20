import { useGSAP } from "@gsap/react";
import { GoArrowDown } from "react-icons/go";
import gsap from "gsap";

function Title() {
  useGSAP (() => {
    
    gsap.fromTo('#scroll',{      
      x: 100,
      opacity: 0,
      
    },{
      x: 0,
      opacity: 50,
      duration: 1,
      delay: 2,
    })
    
    
    gsap.to('#scroll',{
      duration: 0.8, 
      y: -10,
      repeat: -1,
      yoyo: true,
      delay: 3,

    })

  }, [])
  
  
  return (
    <>
      <main>
        {/* Gradient image */}

        <img
          className="absolute top-0 right-0 opacity-60 -z-10"
          src="/gradient.png"
          alt="Gradient-img"
        />

        {/* Blur Effect */}

        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#60ad2d] -rotate-[30deg]"></div>

        <div className="z-2000 flex flex-col transition-transform duration-100 ease-out w-screen h-screen bg-neutral-900">
          <h1 className="title-text flex w-full h-full text-white items-center justify-center text-6xl font-bold">
            Kyle Morgan
          </h1>
          <div id="scroll" className="text-white flex items-center justify-end h-4 pb-10 pr-15 ">
            <div className="text-xl">
              scroll
            </div>
            <div id="d_arrow" className="text-2xl">
              <GoArrowDown />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Title;
