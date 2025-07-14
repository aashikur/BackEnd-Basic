import React from 'react';
import { motion } from "motion/react"

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-40 gap-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.img
          animate={{
            y: ["0px", "-20px", "0px"], // Float up and down
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          src="https://i.pinimg.com/736x/aa/9d/1a/aa9d1a31503a9d2c5019435b87f1413b.jpg"
          className="max-w-sm rounded-xl shadow-2xl"
        />
        <div className='text-left max-w-3xl '>
          <motion.h1
          
            animate={{ y: ["20px", "0px"] }}
            transition={{duration: 0.5,ease: "easeIn", }}

            className="text-5xl font-bold">Box Office News!</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        
      </div>
    </div >
  );
};

export default Banner;