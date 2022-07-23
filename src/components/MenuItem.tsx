import * as React from "react";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom'
import {
  
 
  Route,
  Routes,
  useLocation

} from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};











export const MenuItem = ({ i }:any) => {
const location = useLocation()
 
  const styles = {
    borderMain: {
      border: `2px solid ${i.colors}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '-10px',
      padding: '15px'
      
    },
    circle: {
     
      
    }
  }
 

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      
    >
     
      <div className="icon-placeholder"  style={styles.borderMain}><p style={{padding: '5px'}}>ggg</p></div>
      <NavLink to={`${i.to}`}> <div className="text-placeholder" style={styles.borderMain}><p style={{padding: '10px'}}>{i.name}</p></div></NavLink>
     
      
      
    </motion.li>
  );
};
