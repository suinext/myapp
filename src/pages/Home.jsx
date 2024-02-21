import Footer from "../components/Footer";
import Leftpane from "../components/Leftpane";
import './Home.css';
const Home = () => {
  return <div className="homepage">
    <h1>Home page</h1>
    <div className="bodysection flex">
      <div className="leftpane box">
        <Leftpane />
      </div>
      <div className="midpane box"></div>
      <div className="rightpane box"></div>

    </div>
    <Footer />

  </div>

};

export default Home;