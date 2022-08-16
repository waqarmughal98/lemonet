import "./App.css";
import About from "./components/About";
import CreatorToC from "./components/CreatorToC";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Network from "./components/Network";
import PresaleWidget from "./components/PresaleWidget";

function App() {
  return (
    <main className="lemonet">
      <Nav />
      <Hero />
      <PresaleWidget />
      <About />
      <CreatorToC />
      <Network />
    </main>
  );
}

export default App;
