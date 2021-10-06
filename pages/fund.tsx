import portfolio from "../components/fundContainerComps.tsx/portfolio";
import CompanyCard from "../components/fundContainerComps.tsx/BaseCompanyCard";
import ContainerDevelopmentCard from "../components/fundContainerComps.tsx/ContainerDevelopmentCard";

function Fund() {
  return (
    <div>
      <ContainerDevelopmentCard />
      <div className="grid lg:grid-cols-3 gap-10 lg:ml-20 lg:mr-20 mt-10">
        {portfolio.map((company) => (
          <CompanyCard
            key={company.id}
            companyName={company.company}
            companyOffer={company.offer}
            companyAbout={company.about}
            companyImage={company.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Fund;
