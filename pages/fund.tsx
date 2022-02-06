import CompanyCard from "../components/fundContainerComps/BaseCompanyCard";
import ContainerDevelopmentCard from "../components/fundContainerComps/ContainerDevelopmentCard";

const portfolio = [
  {
    id: "1",
    company: "Clearway Energy Inc",
    offer: "Wind energy",
    image: "/fundImages/cwen.jpg",
    about:
      "Built for the 21st century, Clearway is focused on providing customers with low cost, clean power generated by solar and wind across the U.S.",
  },
  {
    id: "2",
    company: "Brookfield Renewable Partners",
    offer: "Solar energy",
    image: "/fundImages/bep.jpg",
    about:
      "SunPower Corporation is an American company specializing in solar power generation and energy storage.",
  },
  {
    id: "3",
    company: "Next Era Energy",
    offer: "Wind, Solar, Hydro energy",
    image: "/fundImages/nee.jpg",
    about:
      "As one of America's largest capital investors in infrastructure, with between $50 and $55 billion in new infrastructure investments planned through 2022, we're helping ensure that the next energy to power our dreams will be American energy.      ",
  },
  {
    id: "4",
    company: "Azure Power",
    offer: "Solar energy",
    image: "/fundImages/azre.jpg",
    about: "A leading independent renewable power producer in India.",
  },
  {
    id: "5",
    company: "Banco Latinoamericano de Comercio Exterior",
    offer: "Mix",
    image: "/fundImages/blx.jpg",
    about: "A leading independent renewable power producer in Latin America.",
  },
];

function Fund() {
  return (
    <div className="mt-8">
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
