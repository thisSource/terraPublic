import Image from "next/image";

interface Props {
  id: string;
  step: string;
  image: string;
  description: string;
}

function HowCard(step: Props) {
  return (
    <div className="bg-gray-700 overflow-hidden shadow-lg">
      <span className="absolute z-10 font-bold text-5xl text-yellow-300 ml-2 mt-2">
        {step.id}
      </span>
      <Image
        src={step.image}
        width={500}
        height={300}
        alt="image"
        className="w-full grayscale hover:grayscale-0"
      />
      <div className="my-2 mx-2">
        <span className="lg:text-xl md:text-base text-xs text-yellow-300 font-semibold">
          {step.step}
        </span>
      </div>
      <div className="my-2 m-2">
        <span className="text-sm text-gray-100 font-semibold">
          {step.description}
        </span>
      </div>
    </div>
  );
}

export default HowCard;
