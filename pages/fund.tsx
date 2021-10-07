import CompanyCard from "../components/fundContainerComps/BaseCompanyCard";
import ContainerDevelopmentCard from "../components/fundContainerComps/ContainerDevelopmentCard";

const portfolio = [
  {
    id: "1",
    company: "Neste",
    offer: "Sustainable Aviation Fuel",
    image: "/fundImages/neste.jpg",
    about:
      "Neste Oyj is an oil refining and marketing company located in Espoo, Finland. It produces, refines and markets oil products, provides engineering services, and licenses production technologies. Neste has operations in 14 countries. Neste shares are listed on the NASDAQ OMX Helsinki Stock Exchange.",
  },
  {
    id: "2",
    company: "Sunpower Corp",
    offer: "Solar energy",
    image: "/fundImages/sunpower.jpg",
    about:
      "SunPower Corporation is an American company specializing in solar power generation and energy storage.",
  },
  {
    id: "3",
    company: "SeaTwirl",
    offer: "Wind energy",
    image: "/fundImages/seatwirl.jpg",
    about:
      "SeaTwirl is developing a floating wind turbine for the ocean. SeaTwirl's wind turbine is easier to build, install and maintain than traditional offshore wind.",
  },
  {
    id: "4",
    company: "FirstSolar",
    offer: "Solar energy",
    image: "/fundImages/firstsolar.jpg",
    about:
      "First Solar, Inc. is an American manufacturer of solar panels, and a provider of utility-scale PV power plants and supporting services that include finance, construction, maintenance and end-of-life panel recycling.",
  },
];

function Fund() {
  return (
    <div>
      <ContainerDevelopmentCard />

      <div className="grid lg:grid-cols-1 gap-10 lg:ml-20 lg:mr-20 mt-8">
        <div className="bg-gray-100 rounded overflow-hidden shadow-lg p-5">
          <div className="text-xs text-black text-left pt-1 mb-1">
            <span className="font-bold">Lorem ipsum dolor sit amet,</span>{" "}
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10 lg:ml-20 lg:mr-20 mt-10">
        {portfolio.map((company) => (
          <CompanyCard
            key={company.id}
            name={company.company}
            offer={company.offer}
            about={company.about}
            image={company.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Fund;
