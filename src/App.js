import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation";
import HeroSection from "./components/heroSection";
import Table from "./components/table";
import circleLight from "./assets/images/section/circle-light.png";
import circleDark from "./assets/images/section/circle-dark.png";

function App() {
  const [circleBg, setCircleBg] = useState();

  useEffect(() => {
    // Change background depends on theme mode
    document.body.classList.contains("theme-light")
      ? setCircleBg(circleLight)
      : setCircleBg(circleDark);
  }, []);
  return (
    <div className="App">
      <main style={{ backgroundImage: `url(${circleBg})` }}>
        <Navigation />
        <HeroSection />
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-cards">
              <div className="col-12">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
