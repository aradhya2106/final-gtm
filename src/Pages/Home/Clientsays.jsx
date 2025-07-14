import { Container } from "../../Components/Continer/Continer";
import { Typography } from "../../Components/Typography/Typography";
import "./Clientsays.scss";



export const Clientsays = () => {
  return (
    <div>
      <div className="clientsay_conatiner">
        <div className="clientall_text">
          <Typography variant="h9" className="whatour_text">
            What Our
            <Typography variant="h9" className="Clientsay_text">
              Clients Say
            </Typography>
          </Typography>
          <Typography variant="h22" className="subtitle_client_text">
            Don't just take our word for it
          </Typography>
        </div>
      </div>

      <div className="client_say_all_container">
        <div>
          <Container className="Rodriguez_container">
            <Typography variant="h10" className="Rodriguez_text">
              <b>Rodriguez</b>
            </Typography>
            <Typography variant="h21" className="Techc_corp_text">
              CEO, TechCorp
            </Typography>
            <Typography variant="h6" className="Gtm_lab_Text">
              "GTM Labs transformed our go-to-market strategy and helped us
              achieve 300% growth in just 6 months."
            </Typography>
          </Container>
        </div>
        <div>
          <Container className="Mari_Garcia_container">
            <Typography variant="h10" className="Rodriguez_text">
              <b> Maria Garcia</b>
            </Typography>
            <Typography variant="h21" className="Techc_corp_text">
              Founder, StartupXYZ
            </Typography>
            <Typography variant="h6" className="maria_Text">
              "Their expertise in development and marketing is unmatched. Highly
              recommend their services."
            </Typography>
          </Container>
        </div>
        <div>
          <Container className="Rodriguez_container">
            <Typography variant="h10" className="Rodriguez_text">
              <b> David Kim </b>
            </Typography>
            <Typography variant="h21" className="Techc_corp_text">
              CTO, InnovateLab
            </Typography>
            <Typography variant="h6" className="Gtm_lab_Text">
              "Professional, reliable, and results-driven.GTM Labs exceeded all
              our expectations."
            </Typography>
          </Container>
        </div>
      </div>
    </div>
  );
};
