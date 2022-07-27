import Image from "next/image";

interface Props {
  name: string;
  offer: string;
  about: string;
  image: string;
}

function CompanyCard(company: Props) {
  return (
    <div className="bg-gray-100 rounded overflow-hidden shadow-md">
      <Image
        src={company.image}
        width="1000"
        height="600"
        alt="company image"
        className="w-full"
        priority={true}
      />
      <div className="m-6">
        <p className="font-medium">{company.name}</p>
        <p className="text-sm">{company.offer}</p>
        <p className="text-xs pt-3">{company.about}</p>
      </div>
    </div>
  );
}

export default CompanyCard;
