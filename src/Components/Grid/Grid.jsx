import React from "react";
import "./Grid.scss";

// Grid Container
export const Grid = ({ children, className = "", gap = "16px" }) => {
  return (
    <div className={`grid-container ${className}`} style={{ gap }}>
      {children}
    </div>
  );
};

// Grid Item
export const GridItem = ({
  children,
  colMobile = 12,
  colTab = 6,
  colLaptop = 4,
  className = "",
}) => {
  return (
    <div
      className={`grid-item col-mobile-${colMobile} col-tab-${colTab} col-laptop-${colLaptop} ${className}`}
    >
      {children}
    </div>
  );
};

export default Grid;
