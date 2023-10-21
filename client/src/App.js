import Layout from "./components/layout/layout";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Education from "./pages/education/education";
import Project from "./pages/project/project";
import TechStack from "./pages/techStack/techStack";
import WorkExp from "./pages/workExp/workExp";
import ScrollToTop from "react-scroll-to-top";
import Tada from 'react-reveal/Tada';

import MobileNAv from "./components/mobileNav/mobileNAv";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <ToastContainer />
      <MobileNAv />
     <Layout/>
      <div className="container">
        <About/>
        <Education/>
        <TechStack/>
        <Project />
        <WorkExp/>
        <Contact/>
      </div>
     <div className="footer mb-3 ms-3">
      <Tada>
      <h4 className="text-center">
        Made With 💝 Nimra &copy; 2023 
      </h4>
      </Tada>
     </div>
     <ScrollToTop smooth color="black" style={{ backgroundColor: "#f29f67", borderRdius: "80px"}} />
    </>
  );
}

export default App;
