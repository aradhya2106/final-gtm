import React from "react";
import { Typography } from "../../Components/Typography/Typography";
import "./Clientsays.scss";

export const Clientsays = () => {
  return (
    <div className="clientsays_section">
      {/* Header Section */}
      <div className="clientsays_header">
        <Typography variant="h4" className="main_title">
          What Our <span className="gradient_text">Clients Say</span>
        </Typography>
        <Typography variant="body" className="subtitle">
          Don't just take our word for it
        </Typography>
      </div>

      {/* Testimonials Grid */}
      <div className="testimonials_container">
        {/* Rodriguez Testimonial */}
        <div className="testimonial_card">
          <div className="client_info">
            <Typography variant="h6" className="client_name">
              Rodriguez
            </Typography>
            <Typography variant="caption" className="client_position">
              CEO, TechCorp
            </Typography>
          </div>
          <Typography variant="body" className="testimonial_text">
            "GTM Labs transformed our go-to-market strategy and helped us
            achieve 300% growth in just 6 months."
          </Typography>
        </div>

        {/* Maria Garcia Testimonial */}
        <div className="testimonial_card">
          <div className="client_info">
            <Typography variant="h6" className="client_name">
              Maria Garcia
            </Typography>
            <Typography variant="caption" className="client_position">
              Founder, StartupXYZ
            </Typography>
          </div>
          <Typography variant="body" className="testimonial_text">
            "Their expertise in development and marketing is unmatched. Highly
            recommend their services."
          </Typography>
        </div>

        {/* David Kim Testimonial */}
        <div className="testimonial_card">
          <div className="client_info">
            <Typography variant="h6" className="client_name">
              David Kim
            </Typography>
            <Typography variant="caption" className="client_position">
              CTO, InnovateLab
            </Typography>
          </div>
          <Typography variant="body" className="testimonial_text">
            "Professional, reliable, and results-driven. GTM Labs exceeded all
            our expectations."
          </Typography>
        </div>
      </div>
    </div>
  );
};
