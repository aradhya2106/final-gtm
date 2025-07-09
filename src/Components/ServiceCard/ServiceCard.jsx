import React from "react";
import "./ServiceCard.scss";

export const ServiceCard = ({
  title,
  subtitle,
  description,
  src,
  items,
  Rectangular,
}) => {
  return (
    <div className="service_card_container">
      <div className="service_card_left">
        <h2 className="service_card_title">{title}</h2>
        <p className="service_card_subtitle">{subtitle}</p>
        <p className="service_card_description">{description}</p>
      </div>

      <img className="rectungular_img" src={Rectangular} alt="" />

      <div className="service_card_middle">
        <img src={src} alt="Service Icon" className="service_card_icon" />
      </div>
      <div className="service_card_right">
        {items.map((item, idx) => (
          <div key={idx} className="service_card_item">
            {item.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};
