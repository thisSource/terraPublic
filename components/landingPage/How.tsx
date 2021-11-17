import HowCard from "./HowCard";

const steps = [
  {
    id: "1",
    step: "Connect your account",
    image: "/howImages/account.jpg",
    description: "Connect with your bank with a few clicks.",
  },
  {
    id: "2",
    step: "Save when shopping",
    image: "/howImages/shop.jpg",
    description: "Save 1-3 % on every transaction.",
  },
  {
    id: "3",
    step: "Transform the world",
    image: "/howImages/nature.jpg",
    description: "Your savings makes the world green.",
  },
  {
    id: "4",
    step: "Reward your self",
    image: "/howImages/reward.jpg",
    description: "Save for something you love.",
  },
];

function How() {
  return (
    <div className="mt-20 mb-20 border-t">
      <h1 className="mb-4 mt-4 text-xl font-semibold">Get started</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-2">
        {steps.map((step) => (
          <HowCard
            key={step.id}
            id={step.id}
            step={step.step}
            image={step.image}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}

export default How;
