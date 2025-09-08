import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
