import { motion } from "motion/react";
import { ThreeModel } from "./components/ThreeModel";
export const App = () => {
  return (
    <main className="h-screen bg-slate-900">
      <div className="container mx-auto">
        {/* header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{y:0}}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.5,
            stiffness: 130,
          }}
          className="flex justify-between
          items-center text-white h-16"
        >
          <span className="font-bold text-2xl">-Motion Website-</span>
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </motion.header>

        {/* hero */}

        <section className="py-16 md:py-24 lg:py-48">
          <div className="flex items-center justify-between">
            {/* left */}
            <div className="space-y-3">
              <motion.h2
                initial={{ y: -100 }}
                animate={{y:0}}
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.5,
                  stiffness: 130,
                }}
                className="text-white lg:text-9xl md:text-8xl font-bold lg:max-w-160">Motion 3D Website</motion.h2>
              <motion.p
                initial={{ y: -100 }}
                animate={{y:0}}
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.8,
                  stiffness: 130,
                }}
                className="text-white lg:max-w-160 lg:text-5xl font-semibold">
                The<span className="text-orange-500">next</span>generation
              </motion.p>
              <motion.div
                initial={{ y: -100 }}
                animate={{y:0}}
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.5,
                  stiffness: 130,
                }}
                className="flex gap-4">
                <button className="py-3 px-6 rounded-md border-2 my-4 text-white hover:translate-y-1 duration-150"><span className="font-bold">More Details</span></button>
                <button className="py-3 px-6 rounded-md border-2 my-4 text-orange-500 hover:translate-y-1 duration-150"><span className="font-bold">Sample</span></button>
              </motion.div>
            </div>
          
            {/* right */}
            <div>
              <ThreeModel />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
