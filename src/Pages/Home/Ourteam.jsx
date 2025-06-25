import React from 'react';
import './Ourteam.scss';
import { Typography } from '../../Components/Typography/Typography';
import Linkedin from '../../Assets/Linkedin.png'
import x from '../../Assets/x.png'
export const Ourteam = () => {
    return (
      <div className="ourteam-container">
        <div>
          <div>
            <Typography className="Our_team_container" variant="h2">
              Our Team
            </Typography>
          </div>
          <div>
            <Typography className="Text_container">
              Meet the experts behind our success
            </Typography>
          </div>
        </div>

        <div className="Team_container">
          <div className="Team_member_container">
            <Typography className="Team_member_container" variant="h2">
              Himanshu
            </Typography>
            <Typography className="second_text_contaier">
              CEO & Founder
            </Typography>
            <div className="image_conainer">
              <img className="linkedin_container" src={Linkedin} alt="" />
              <img className="x_container" src={x} alt="" />
            </div>
          </div>
          <div>
            <div>
              <Typography className="Team_member_container" variant="h2">
                Neha
              </Typography>
              <Typography className="second_text_contaier">CTO</Typography>
              <div className="image_conainer">
                <img className="linkedin_container" src={Linkedin} alt="" />
                <img className="x_container" src={x} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <Typography className="Team_member_container" variant="h2">
                Mike Davis
              </Typography>
              <Typography className="second_text_contaier">
                Head of Marketing
              </Typography>
              <div className="image_conainer">
                <img className="linkedin_container" src={Linkedin} alt="" />
                <img className="x_container" src={x} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <Typography className="Team_member_container" variant="h2">
                Lisa Chen
              </Typography>
              <Typography className="second_text_contaier">
                Lead Developer
              </Typography>
              <div className="image_conainer">
                <img className="linkedin_container" src={Linkedin} alt="" />
                <img className="x_container" src={x} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}