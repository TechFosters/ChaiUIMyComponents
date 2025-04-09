import { div } from "motion/react-client";
import React from "react";

const PortfolioHero = () => {
  return (
    <div className="w-full h-screen mt-20">
      <div className="flex items-center justify-between pl-18 pr-18">
        <div className="flex flex-col items-center align-middle w-[50%] h-full">
          <div>
            <h1 className="text-[70px] font-semibold  leading-20">
              Let's Work Together to Create Wonders with Us
            </h1>
            <h2 className=" text-[20px] w-[80%] mt-8 text-gray-400">
              A visionary creative, crafting captivating wonders through art and
              design. Adept at turning imagination into extraordinary reality
            </h2>
            <div className="flex gap-4 items-center justify-start mt-4">
              <button className="w-[150px] text-white p-3 rounded-3xl border-none cursor-pointer drop-shadow-gray-500 bg-violet-500">
                let's talk
              </button>
              <button className="w-[150px] text-black p-3 rounded-3xl cursor-pointer drop-shadow-gray-500 border-1 border-gray-500">
                Start Project
              </button>
            </div>
            <div>
              <div>
                <div>15+</div>
                <div>
                  <p>years of experience</p>
                </div>
              </div>
              <div>
                <div>15+</div>
                <div>
                  <p>years of experience</p>
                </div>
              </div>
              <div>
                <div>15+</div>
                <div>
                  <p>years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>image</div>
      </div>
    </div>
  );
};

export default PortfolioHero;
