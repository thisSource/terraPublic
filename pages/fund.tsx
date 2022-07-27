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
      <h3 className="mt-20 text-lg leading-6 font-medium text-gray-900">Portfolio</h3>
      <div className="grid lg:grid-cols-3 gap-10 mt-10">
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
