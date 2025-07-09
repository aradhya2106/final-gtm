import { Container } from "../../Components/Continer/Continer";
import { Typography } from "../../Components/Typography/Typography";
import "./Clientsays.scss";



export const Clientsays = () => {
  return (
    <div>
      <div className="clientsay_conatiner">
        <Typography className="whatour_text">
          What Our
          <Typography className="Clientsay_text"> Clients Say</Typography>
        </Typography>
        <Typography>Don't just take our word for it</Typography>
      </div>

      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
