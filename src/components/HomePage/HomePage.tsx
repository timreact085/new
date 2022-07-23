import React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import "./home.scss";
import {Slides, Pagination} from './PageSlider'
import TextContainer from "./TextContainer";
import Button from '@material-ui/core/Button'
import img from '../../assets/imgs/Accenture-Announce.png'
/**
 * Using AnimatePresence and drag for a slideshow and AnimateSharedLayout
 * for a pagination indicator.
 *
 * Add and remove pages from the array to checkout how the gestures
 * and pagination animations are fully data and layout-driven.
 */




export default function HomePage() {

  var image = require('../../assets/imgs/Accenture-Announce.png')
  /*
   * We keep track of the pagination direction as well as current page, this way we
   * can dynamically generate different animations depending on the direction of travel
   */
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);

  function setPage(newPage:any, newDirection:any) {
    if (!newDirection) newDirection = newPage - currentPage;
    setCurrentPage([newPage, newDirection]);
  }

  return (
    <>
    <main>
    <section>
    <div style={{ marginLeft: '31%'}}>
      
    </div>
    <div style={{display: 'flex',  alignItems:'center', justifyContent: 'space-around', width: '100%'}}>
      
    <div >
    <Slides
        currentPage={currentPage}
        direction={direction}
        setPage={setPage}
      />
      <Pagination currentPage={currentPage} setPage={setPage} />
    </div>
      <div style={{marginLeft: '5px'}}><TextContainer /></div>
    </div>
   
      </section>

      <section>
        <div className="expertise">
        
          <h2 className='expertise__title'>Our Area of Expertise</h2>
          <div className="expertise__text">
          <p>Search Engine Optimization, Application Development and Internet Marketing are ultimately extensions of our primary service, web design. Web design is a collaborative process requiring two committed parties, the web designer and the client. From the outset of the design process, an account manager will work closely with you to determine the specific requirements of your organization's website and to see it through each development stage. We don't believe a client should be forced to accept an interface or design which isn't appropriate to the branding of their business. eLink Design stands aside from other website design companies by allowing our clients to have unlimited design iterations in the design stage.</p>
          </div>
          <button  className="expertise__btn">Contact us</button>
        </div>
      </section>

      <section>
          <div className="section3">
            <div style={{ width: '50%', height: '100%',display:'flex',  justifyContent: 'center'}}>
              <img style={{width: '600px', marginLeft: '40px'}} src="https://rsproje.com/assets/img/consulting.jpg" alt="" />
                
              </div>
            <div style={{ width: '50%', height: '100%', display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <div style={{width: '550px', marginTop: '20px', marginRight: '20px'}}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consequatur aut</h4>
              <h4 style={{marginLeft: '10px'}}> aspernatur earum, vitae quisquam exercitationem pariatur beatae maxime quaerat deleniti quia dolorum vel. Reprehenderit maiores incidunt commodi animi, nam doloremque. Est aspernatur temporibus harum, eveniet cupiditate libero, architecto maiores minus voluptates iste expedita sint omnis eos ratione, suscipit delectus corporis eaque! Esse doloremque ut modi possimus odio hic sunt numquam odit molestiae nostrum, a aperiam rem cupiditate explicabo est, nulla culpa inventore rerum omnis minima ullam unde placeat voluptas. Recusandae, facere voluptatibus corporis sunt incidunt.</h4>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consequatur aut</h4>
              <h4 style={{marginLeft: '10px'}}> aspernatur earum, vitae quisquam exercitationem pariatur beatae maxime quaerat deleniti quia dolorum vel. Reprehenderit maiores incidunt commodi animi, nam doloremque. Est aspernatur temporibus harum, eveniet cupiditate libero, architecto maiores minus voluptates iste expedita sint omnis eos ratione, suscipit delectus corporis eaque! Esse doloremque ut modi possimus odio hic sunt numquam odit molestiae nostrum, a aperiam rem cupiditate explicabo est, nulla culpa inventore rerum omnis minima ullam unde placeat voluptas. Recusandae, facere voluptatibus corporis sunt incidunt.</h4>
              </div>
            </div>
          </div>
      </section>
    <div className="border"></div>
      <section>
          <div className="section4">
            
            <div style={{ width: '50%', height: '100%', display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <div style={{width: '550px', marginTop: '20px', marginRight: '20px'}}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consequatur aut</h4>
              <h4 style={{marginLeft: '10px'}}> aspernatur earum, vitae quisquam exercitationem pariatur beatae maxime quaerat deleniti quia dolorum vel. Reprehenderit maiores incidunt commodi animi, nam doloremque. Est aspernatur temporibus harum, eveniet cupiditate libero, architecto maiores minus voluptates iste expedita sint omnis eos ratione, suscipit delectus corporis eaque! Esse doloremque ut modi possimus odio hic sunt numquam odit molestiae nostrum, a aperiam rem cupiditate explicabo est, nulla culpa inventore rerum omnis minima ullam unde placeat voluptas. Recusandae, facere voluptatibus corporis sunt incidunt.</h4>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consequatur aut</h4>
              <h4 style={{marginLeft: '10px'}}> aspernatur earum, vitae quisquam exercitationem pariatur beatae maxime quaerat deleniti quia dolorum vel. Reprehenderit maiores incidunt commodi animi, nam doloremque. Est aspernatur temporibus harum, eveniet cupiditate libero, architecto maiores minus voluptates iste expedita sint omnis eos ratione, suscipit delectus corporis eaque! Esse doloremque ut modi possimus odio hic sunt numquam odit molestiae nostrum, a aperiam rem cupiditate explicabo est, nulla culpa inventore rerum omnis minima ullam unde placeat voluptas. Recusandae, facere voluptatibus corporis sunt incidunt.</h4>
              </div>
            </div>

            <div style={{ width: '50%', height: '100%',display:'flex',  justifyContent: 'center'}}>
              <img style={{width: '600px', marginLeft: '40px'}} src="https://git.az/source/services/6/photo/original/finance.jpg" alt="" />
                
              </div>
          </div>
      </section>

      

      
      </main>

      

    </>
  );
}

/**
 * Variants define visual states that a motion component can be in at any given time.
 * These can be dynamic - here the enter and exit variants are functions that return
 * different values based on the current direction.
 */

