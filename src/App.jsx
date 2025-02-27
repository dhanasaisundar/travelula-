import "./App.css";
import Hero from "./Components/Hero";
import TourItinerary from "./Components/Itinerary";
import NavBar from "./Components/NavBar";
import Overview from "./Components/Overview";
import PaymentPolicy from "./Components/Payment";
import Pricing from "./Components/Pricing";
import TermsConditions from "./Components/Terms";
import WhyBookNow from "./Components/Triggers";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Overview />
      <TourItinerary />
      <Pricing />
      <WhyBookNow />
      <TermsConditions />
      <PaymentPolicy />
    </>
  );
}

export default App;
