import CompanyCard from "./BaseCompanyCard";
import Image from "next/image";
import portfolio from "./portfolio";

function ContainerFund() {
  return portfolio.map((company) => (
    <div>
      <CompanyCard
        key={company.id}
        companyName={company.company}
        companyOffer={company.offer}
        companyAbout={company.about}
        companyImage={company.image}
      />
    </div>
  ));
}

export default ContainerFund;
