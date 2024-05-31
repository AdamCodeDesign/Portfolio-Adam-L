import "./app.scss";
import BgdAnimations from "./components/bgdAnimations/BgdAnimations";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="bgd">
      <BgdAnimations />
      <Navbar />
      <div className="container">
        <section id="Hero">
          <Hero />
        </section>
        <Sidebar />
        <section id="Profile">
          <Profile />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Portfolio">
          <Portfolio />
        </section>
        {/* <section id="Certificates">Certificates</section>
      <section id="Experience">Experience</section>
      <section id="Contact">Contact</section> */}
      </div>
    </div>
  );
}

export default App;
