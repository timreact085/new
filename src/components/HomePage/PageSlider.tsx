import React from "react";
import { useState, useRef } from "react";
import { wrap } from "@popmotion/popcorn";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";


const pages = [0, 1, 2, 3, 4];

const xOffset = 100;
const variants = {
  enter: (direction:any) => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 }
  },
  exit: (direction:any) => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0
  })
};

export function Slides({ currentPage, setPage, direction }:any) {
  const hasPaginated = useRef<boolean>(false);

  function detectPaginationGesture(e:any, { offset }:any) {
    if (hasPaginated.current) return;
    let newPage = currentPage;
    const threshold = xOffset / 2;

    if (offset.x < -threshold) {
      // If we're dragging left, go forward a page
      newPage = currentPage + 1;
    } else if (offset.x > threshold) {
      // If we're dragging right, go backwards a page
      newPage = currentPage - 1;
    }

    if (newPage !== currentPage) {
      hasPaginated.current = true;
      // Wrap the page index to within the permitted page range
      newPage = wrap(0, pages.length, newPage);
      setPage(newPage, offset.x < 0 ? 1 : -1);
    }
  }

  return (
    <div className="slider-container">
      <AnimatePresence
        // Disable entry animations when AnimatePresence mounts, but allow
        // them when new children enter.
        initial={false}
        // This will be used for components to resolve exit variants. It's neccessary
        // as removed components won't rerender with the latest state (as they've been removed)
        custom={direction}
      >
        <motion.div
          // Changing the key of the component remounts it - we are creating a new slide
          // per page. This is why we see multiple slides at once despite only rendering
          // one component at a time.
          key={currentPage}
          className="slide"
          data-page={currentPage}
          variants={variants}
          initial="enter"
          animate="active"
          exit="exit"
          drag="x"
          onDrag={detectPaginationGesture}
          onDragStart={() => (hasPaginated.current = false)}
          onDragEnd={() => (hasPaginated.current = true)}
          // Snap the component back to the center if it hasn't paginated
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          // This will be used for components to resolve all other variants, in
          // this case initial and animate.
          custom={direction}
        ></motion.div>
		
      </AnimatePresence>
    </div>
  );
}

export function Pagination({ currentPage, setPage }:any) {
  // Wrap all the pagination dots with AnimateSharedPresence so we can detect
  // when dots with a layoutId are removed/added
  return (
    <LayoutGroup>
      <div className="dots">
        {pages.map(page => (
          <Dot
            key={page}
            onClick={() => setPage(page)}
            isSelected={page === currentPage}
          />
			
        ))}
		
      </div>
    </LayoutGroup>
  );
}

function Dot({ isSelected, onClick }:any) {
  return (
    <div className="dot-container" onClick={onClick}>
      <div className="dot">
        {isSelected && (
          // By setting layoutId, when this component is removed and a new one
          // is added elsewhere, the new component will animate out from the old one.
          <motion.div className="dot-highlight" layoutId="highlight"/>
        )}
      </div>
    </div>
  );
}