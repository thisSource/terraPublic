import Image from "next/image";

interface Props {
  name: string;
  offer: string;
  image: string;
  link: string;
}

function CampaignCard(company: Props) {
  return (
    <div className="group bg-gray-100 overflow-hidden relative shadow-lg text-gray-700 hover:shadow-xl hover:-translate-y-2 hover:translate-x-1 transform transition">
      <a href={company.link} target="_blank" rel="noreferrer">
        <div>
          <p className="text-md italic mt-10 ml-9 font-bold absolute z-10 text-transparent group-hover:text-gray-700">
            "Visit partner"
          </p>

          <span>
            <Image
              src={company.image}
              width="500"
              height="300"
              alt="company image"
              className="w-full m-11 group-hover:opacity-30"
            />
          </span>
        </div>
        <div className="m-1">
          <p className="font-bold">{company.name}</p>
          <p className="text-sm">{company.offer}</p>
        </div>
      </a>
    </div>
  );
}

export default CampaignCard;
