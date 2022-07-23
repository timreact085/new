import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import './home.scss'

export default function TextContainer() {
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Framer Motion" },
    {
      type: "heading2",
      text: "Animating responsive text!"
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.035
      }
    }
  };

  return (
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={"visible"}
      variants={container}
    >
      <div className="container1">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}