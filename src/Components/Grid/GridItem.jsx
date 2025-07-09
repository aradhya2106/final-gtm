import React from "react";
import classNames from "classnames";
import styles from "./grid.module.scss";

export const GridItem = ({
  children,
  colMobile = 12,
  colTab = 6,
  colLaptop = 4,
  className,
}) => {
  const classList = classNames(
    styles[`col-mobile-${colMobile}`],
    styles[`col-tab-${colTab}`],
    styles[`col-laptop-${colLaptop}`],
    className
  );

  return <div className={classList}>{children}</div>;
};
