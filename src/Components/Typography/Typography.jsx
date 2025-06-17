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
      case "subtitle":
        return "h4";
      case "caption":
        return "span";
      case "body":
      default:
        return "p";
    }
  };

  const Tag = getTag();

  return (
    <Tag className={`typography ${variant} ${className}`} style={style}>
      {children}
    </Tag>
  );
};
