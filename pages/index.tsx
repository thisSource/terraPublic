import LoginSignup from "../components/landingPage/LoginSignup";
import LandingHero from "../components/landingPage/LandingHero";

function LandingPage() {
  return (
    <div className="mx-8 my-4">
      <LandingHero />
      <LoginSignup />
    </div>
  );
}

export default LandingPage;
