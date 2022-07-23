import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import OutsideClickHandler from 'react-outside-click-handler';
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


const links = [
  {
   
      to: '/blog',
      name: 'Projects',
      colors: "#FF008C",
      id: 0
  },
  {
      
      to: '/',
      name: 'Posts',
      colors: "#D309E1",
      id: 1
  },
  {
    
      to: '/contact',
      name: 'Contact',
      colors: '#9C1AFF',
      id: 2
  },

  {
    
    to: '/service',
    name: 'Service',
    colors: '#9C14FF',
    id: 3
},
]




export const Navigation = () => (


  <motion.ul variants={variants}>
    {links.map((link, index) => (
      <MenuItem i={link} key={index} />
    ))}
  </motion.ul>

);

