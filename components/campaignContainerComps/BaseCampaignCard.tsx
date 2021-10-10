import Image from "next/image";
import { useState } from "react";

interface Props {
  name: string;
  offer: string;
  image: string;
  link: string;
}

function CampaignCard(company: Props) {
  useState;
  let [isMouseOver, setIsMouseOver] = useState(false);
  const visit = "Visit partner";

  return (
    <div
      className="bg-gray-100 overflow-hidden relative shadow-lg text-gray-700 hover:shadow-xl hover:-translate-y-2 hover:translate-x-1 transform transition"
      onMouseEnter={() => setIsMouseOver(!isMouseOver)}
      onMouseLeave={() => setIsMouseOver(!isMouseOver)}
    >
      <a href={company.link} target="_blank" rel="noreferrer">
        <div>
          {isMouseOver && (
            <p className="text-md italic text-black mt-10 ml-10 font-bold absolute z-10rounded">
              {visit}
            </p>
          )}
          <span>
            <Image
              src={company.image}
              width="500"
              height="300"
              alt="company image"
              className="w-full m-11 hover:opacity-30"
              priority={true}
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
