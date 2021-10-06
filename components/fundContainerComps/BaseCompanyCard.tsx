import Image from "next/image";

interface AppProps {
  companyName: string;
  companyOffer: string;
  companyAbout: string;
  companyImage: string;
}

function CompanyCard(company: AppProps) {
  return (
    <div className="bg-gray-100 rounded overflow-hidden shadow-lg">
      <Image
        src={company.companyImage}
        width="1000"
        height="600"
        alt="company image"
        className="w-full"
      />
      <div className="m-6">
        <div className="font-bold">{company.companyName}</div>
        <div className="text-sm">{company.companyOffer}</div>
        <div className="text-xs pt-3">{company.companyAbout}</div>
      </div>
    </div>
  );
}

export default CompanyCard;
