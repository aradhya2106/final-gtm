import React from "react";
import "./Typography.scss";

export const Typography = ({
  variant = "body", // 'h1', 'h2', 'subtitle', 'caption', etc.
  children,
  className = "",
  style = {},
}) => {
  const getTag = () => {
    switch (variant) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h5":
        return "h5";
      case "subtitle":
        return "h4";
      case "h6":
        return "h6";
      case "h7":
        return "h7";
      case "h8":
        return "h8";
      case "h9":
        return "h9";
      case "h10":
        return "h10";
      case "h11":
        return "h11";
      case "h12":
        return "h12";
      case "h13":
        return "h13";
      case "h14":
        return "h14";
      case "h15":
        return "h15";
      case "caption":
        return "h15";
      case "caption":
        return "h16";
      case "caption":
        return "h17";
      case "caption":
        return "h18";
      case "caption":
        return "h19";
      case "caption":
        return "h20";
      case "caption":
        return "h21";
      case "caption":
        return "span";
      case "body":
      default:
        return "p";
    }
  };

  const Tag = getTag();

  return (
    <Tag className={`typography ${variant} ${className} `} style={style}>
      {children}
    </Tag>
  );
};
