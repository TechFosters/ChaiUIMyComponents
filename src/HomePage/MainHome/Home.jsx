import React from "react";
import Button from "../../Components/Button/Button";
import { motion } from "motion/react";
import BouncingBall from "../../MuksidRandom/BouncingBall";

const Home = () => {
  return (
    <div className="bg-chai-soft w-full h-screen flex align-middle items-center justify-center ">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 4, ease: "easeIn" }}
        className=" flex flex-col items-center">
        <h1 className="text-semiHero tracking-widest">
          Sweet, Minimalistic & Snacky
        </h1>
        <h1 className="relative text-hero tracking-wide font-bold drop-shadow-[3px_3px_1px_#b07a42]">
          Chai
          <span className=" text-chai drop-shadow-[3px_3px_1px_#b07a42]">
            UI{" "}
            <motion.div
              animate={{ y: ["100%", "-100%"] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse", // Like yoyo
                ease: "easeOut",
              }}
              className="absolute top-0 right-5 w-[30px] h-[30px] rounded-full bg-chai"
            />
          </span>
        </h1>
        {/* random testing  */}

        {/* random testing  */}
        <h1 className="text-semiHero tracking-widest">
          take a sip of our componenet’s
        </h1>

        <div>
          {/* get the button component  */}
          <Button />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
