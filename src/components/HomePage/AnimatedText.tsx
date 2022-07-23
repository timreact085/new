import React from "react";
import { motion } from "framer-motion";

// Word wrapper






const Wrapper = (props:any):any => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
interface PaintOptions {
    [key: string]: string | any;
    paragraph?: string | any;
    heading1?: string | any;
    heading2?: string | any;
    
    
  }

const tagMap:PaintOptions = {
    paragraph: "pc",
    heading1: "h1",
    heading2: "h2",
   
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props:any) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      color: "#0055FF",
      fontSize: '40px',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      color: "#FF0088",
      fontSize: '40px',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words:any = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word:any) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];
  
  return (
      <div>
    <Tag>
      {words.map((word:any, index:number) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element:any, index:number) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block"
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
    </div>
  );
};

export default AnimatedCharacters;