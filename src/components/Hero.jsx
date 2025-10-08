import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


// const AnimatedText = () => {
//   const text = '“Hello there!”';

//   const container = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//     exit: {
//       transition: {
//         staggerChildren: 0.15,
//         staggerDirection: -1,
//       },
//     },
//   };

//   const child = {
//     hidden: { x: 50, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 60,
//         damping: 10,
//       },
//     },
//     exit: {
//       x: 50,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const [showText, setShowText] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowText((prev) => !prev);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);
 

//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate={showText ? "visible" : "exit"}
//       className="fontCav"
//       style={{
//         display: "flex",
//         gap: "0.1em",
//         color: "#FFFFFF",
//         // fontFamily:"Caveat", cursive,
//         fontSize: "67.77px",
//         justifyContent: "flex-end",
//       }}
//     >
//       {text.split("").map((char, index) => (
//         <motion.span key={index} variants={child}>
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

const AnimatedText = () => {
  const text = "“Hello there!”";

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const child = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
    exit: {
      x: -30,
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 5000); // smoother timing (5 seconds per loop)
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={showText ? "visible" : "exit"}
      className="fontCav"
      style={{
        display: "flex",
        gap: "0.1px",
        color: "#FFFFFF",
        fontSize: "67.77px",
        width: "100%",
        // justifyContent: "flex-end",
        transition: "all 1s ease-in-out",
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};


const Hero = () => {
  return (
    <React.Fragment>
      <div className="cdcdcd" style={{ width: "110%" }}>
        <div className="col-ms-12 col-md-12 col-lg-10">
          <div id="home" className="hero-section">
            <div className="hero-image">
              <img style={{ width: "110%", marginTop: "100px" }} src="/Profile.png" alt="" />
            </div>

            {/* <div
              style={{ justifyContent: "start", alignItems: "start" }}
              className="light-bulb"
            >
            </div> */}

            <div style={{marginTop: "6rem"}} className="hero-text">
              {/* ANIMATED TEXT GOES HERE */}
              <AnimatedText />

              <h1
                style={{
                  width: "600px",
                  fontSize: "95px",
                }}
              >
                <span style={{ color: "#FFFFFF" }}>I am</span>{" "}
                <span className="top-text">Yusuf Adebayo</span>
              </h1>

              <p
                style={{
                  textAlign: "end",
                  color: "#FFFFFF",
                  fontSize: "17.8px",
                }}
              >
                I'm a wizard when it comes to designing user-friendly websites,
                online applications, and mobile apps <br /> that appeal to their
                intended audience. My approach entails conducting extensive user
                research, <br /> creating wireframes and sketches, prototyping,
                user testing, and making data-driven decisions to <br /> ensure
                that the final product is both functional and aesthetically
                pleasing.
              </p>

              <div className="icons">
                <div>
                  <img src="/resume.png" alt="" />
                </div>
                <div style={{ marginTop: "10.5px" }}>
                  <img src="/instagram.png" alt="" />
                </div>
                <div style={{ marginTop: "10.5px" }}>
                  <img src="/linkedin.png" alt="" />
                </div>
                <div style={{ marginTop: "10.5px" }}>
                  <img src="/github.png" alt="" />
                </div>
                <div style={{ marginTop: "10.5px" }}>
                  <img src="/mail.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
