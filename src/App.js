import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Tour } from "./components/Tour";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tour />
      <Footer />
    </>
  );
}

export default App;
