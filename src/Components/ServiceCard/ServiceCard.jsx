import React from "react";
import "./ServiceCard.scss";

export const ServiceCard = ({ title, subtitle, description, src, items }) => {
  return (
    <div className="service_card_container">
      <div className="service_card_content">
        <div className="service_card_left">
          <h2 className="service_card_title">{title}</h2>
          <p className="service_card_subtitle">{subtitle}</p>
          <p className="service_card_description">{description}</p>
        </div>

        <div className="service_card_center">
          <div className="service_card_icon_wrapper">
            <img src={src} alt="Service Icon" className="service_card_icon" />
          </div>
        </div>

        <div className="service_card_right">
          <div className="service_card_items">
            {items.map((item, idx) => (
              <div key={idx} className="service_card_item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
