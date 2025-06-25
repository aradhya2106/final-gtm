import { Container } from "../../Components/Continer/Continer";
import { Typography } from "../../Components/Typography/Typography";
import "./Ourpartners.scss"; 
export const Ourpartners = () => {
    return (
      <div className="ourpartners-container">
        <div>
          <Typography variant="h1" className="font-bold">
            Our Partners
          </Typography>
        </div>
        <div>
          <Typography variant="h3" className="text_container">
            Trusted by leading companies worldwide
          </Typography>
        </div>
        <div className="partners-container">
          <div>
            <Container className="partner1_container"> Partner 1</Container>
          </div>

          <div>
            <Container className="partner2_container"> Partner 2</Container>
          </div>
          <div>
            <Container className="partner3_container"> Partner 3</Container>
          </div>
          <div>
            <Container className="partner4_container"> Partner 4</Container>
          </div>
          <div>
            <Container className="partner5_container"> Partner 5</Container>
          </div>

          <div>
            <Container className="partner6_container"> Partner 6</Container>
          </div>
        </div>
      </div>
    );
}