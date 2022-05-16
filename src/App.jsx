import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const Title = (
  <>
    <span>Make</span> remote work
  </>
);

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero
        title={Title}
        description="Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar."
      />
    </div>
  );
};

export default App;
