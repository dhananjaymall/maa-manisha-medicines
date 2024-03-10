
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Services from "./Components/Services/Services";
import Social from "./Components/Social/Social";
import Shop from "./Components/Shop/Shop";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Slider from "./Components/Slider/Slider";
import Testmonial from "./Components/Testmonial/Testmonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <Slider />
      <Shop />
      <Social />
      <About/>
      <Testmonial />
      <Footer />
    </div>
  );
}

export default App;