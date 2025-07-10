 import { div } from "framer-motion/client";
import react from "react";
import { Typography } from "../../Components/Typography/Typography";
import gtmlogonew from  "../../Assets/gtmlogonew.png"
import Emailicon from "../../Assets/Emailicon.png"
import Callicon from  "../../Assets/Callicon.png"
import Locationicon from "../../Assets/Locationicon.png"
import { Container } from "../../Components/Continer/Continer";
import { Button } from "../../Components/Button/Button";
import   "./Getintouch.scss"


 export const Getintouch = () => {
    return (
      <div className="Top_container">
        <div className="getintouch_container">
          <Typography variant="h4" className="touch_text">
            Get In Touch
          </Typography>
          <Typography>Ready to start your project? Let's talk.</Typography>
        </div>
        <div className="contactinfo_container">
          <div className="gtmlogo_container">
            <img src={gtmlogonew} alt="" />
          </div>
          <div className="shedul_call_comntainer">
            <div>
              <div className="">
                <Typography className="contactinfo_text" variant="h15">
                  Contact Information
                </Typography>
                <Typography className="contactinfo_text" variant="h10">
                  <img className="Emailicon_image" src={Emailicon} alt="" />{" "}
                  contact@gtmlabs.xyz
                </Typography>
                <Typography className="phone_no_text" variant="h12">
                  <img className="Callicon_image" src={Callicon} alt="" /> +91
                  7011844199
                </Typography>
                <Typography variant="h12">
                  <img
                    className="Locationicon_image"
                    src={Locationicon}
                    alt=""
                  />
                  location
                </Typography>
              </div>
            </div>
            <div>
              <div>
                <Typography>Schedule a Call</Typography>
              </div>
              <div>
                <Container className="schadule_Call">
                  <Typography className="how_text">
                    How long do you need
                  </Typography>
                  <div className="times_container">
                    <Container>
                      <Button className="timer_comtainer">
                        <Typography >30 mins</Typography>
                      </Button>
                    </Container>
                    <Container>
                      <Button className="timer_comtainer">
                        <Typography>30 mins</Typography>
                      </Button>
                    </Container>
                    <Container>
                      <Button className="timer_comtainer">
                      text={<Typography >30 mins</Typography>}
                        
                      </Button>
                    </Container>
                  </div>
                  <Typography className="whattime_text">
                    What time works best?
                  </Typography>
                  <Typography> Real month </Typography>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

 }


