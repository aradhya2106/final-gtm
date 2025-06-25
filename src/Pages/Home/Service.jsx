import React from "react";
import "./Service.scss";
import { Typography } from "../../Components/Typography/Typography";
import { Button } from "../../Components/Button/Button";
import { Container } from "../../Components/Continer/Continer";
import greatarorless from "../../Assets/gretarorless.png";
import syran from "../../Assets/syrna.png";
import vector  from "../../Assets/Vector.png"
export const Service = () => {
  return (
    <div className="service-container">
      <div className="service_second_container">
        {" "}
        <Typography variant="h2">Our Services</Typography>
      </div>

      <div className="statement_continer">
        Comprehensive solutions for your business growth
      </div>
      <div className="service_list_container">
        <div className="core_services">Core Services</div>
        <div className="service_list">
          <div className="developer_container">
            <Container className="develoment_secondcontainer">
              <img src={greatarorless} alt="" />
            </Container>
            <Typography className="development_text" variant="h2">
              Development
            </Typography>
            <Typography variant="h3" className="development2_text">
              Full-stack development services for web and mobile applications.
            </Typography>
          </div>
          <div>
            <div className="marketing_container">
              <Container className="develoment_secondcontainer">
                <img src={syran} alt="" />
              </Container>
              <Typography className="development_text" variant="h2">
                Marketing
              </Typography>

              <Typography variant="h3" className="development2_text">
                Strategic marketing campaigns to reach your target audience.
              </Typography>
            </div>
          </div>
          <div>
            <div className="Consulting_container">
              <Container className="develoment_secondcontainer">
                <img src={vector} alt="" />
              </Container>
              <Typography className="development_text" variant="h2">
                Consulting
              </Typography>
              <Typography variant="h3" className="development2_text">
                Expert business consulting to optimize your operations.
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <div className="Core_container">
            <Typography> Service Packages</Typography>
          </div>
          <div className="service_package_list">
            <div className="Starter_package">
              <Typography className="Starer_text">Starter</Typography>
              <Typography className="price">$999</Typography>
              <Typography className="Starer_price">
                <Typography variant="h3"> Basic consultation</Typography>
                <Typography variant="h3"> Strategy planning</Typography>
                <Typography variant="h3"> Email support</Typography>
              </Typography>
              <Button className="button_continer" text={"Get Started"} />
            </div>
            <div className="Starter_package">
              <Button className="popular_container" text={"Popular"} />
              <Typography className="Starer_text">Professional</Typography>
              <Typography className="price">$2999</Typography>
              <Typography className="Starer_price">
                <Typography variant="h3">Full consultation</Typography>
                <Typography variant="h3"> Implementation</Typography>
                <Typography variant="h3"> Priority support</Typography>
              </Typography>
              <Button className="button_continer" text={"Get Started"} />
            </div>
            <div className="Starter_package">
              <Typography className="Starer_text">Enterprise</Typography>
              <Typography className="price">Custom</Typography>
              <Typography className="Starer_price">
                <Typography variant="h3">Custom solutions</Typography>
                <Typography variant="h3"> Dedicated team</Typography>
                <Typography variant="h3">24/7 support</Typography>
              </Typography>
              <Button className="contactus_continer" text={"Get Started"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
