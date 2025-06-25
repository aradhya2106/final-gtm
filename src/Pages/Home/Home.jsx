import Topbar from "../../Components/TopBar";
import { About } from "./About";
import { HeroBanner } from "./HeroBannerSection";
import { Service } from "./Service";
import { Ourteam } from "./Ourteam";
import { Ourpartners } from "./Ourpartners"
export const Home = () => {
    return (
      <>
        <Topbar />
        <HeroBanner/>
        <About />
        <Service/>
        <Ourteam />
        <Ourpartners /> 
      </>
    );
}