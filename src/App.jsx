import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="container">
      <section id="Home">
        <Hero />
      </section>
      <Sidebar />
      <section id="Profile">
        <Profile />
      </section>
      <section id="Skills">Skills</section>
      <section id="Certificates">Certificates</section>
      <section id="Experience">Experience</section>
      <section id="Portfolio">Portfolio</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
