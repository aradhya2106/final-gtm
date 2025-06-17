import Topbar from "../../Components/TopBar";
import { About } from "./About";
import { HeroBanner } from "./HeroBannerSection";

export const Home = () => {
    return (
      <>
        <Topbar />
        <HeroBanner/>
        <About />
      </>
    );
}