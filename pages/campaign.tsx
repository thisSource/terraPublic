import CampaignCard from "../components/campaignContainerComps/BaseCampaignCard";

const campaign = [
  {
    id: "1",
    company: "Razor",
    offer: "2% on all 2022 models",
    image: "/campaignImages/razorimg.jpg",
    link: "https://www.razer.com/"
  },
  {
    id: "2",
    company: "IKEA",
    offer: "1% on all products online",
    image: "/campaignImages/ikeaimg.jpg",
    link: "https://www.ikea.com"
  },
  {
    id: "3",
    company: "COOP",
    offer: "3 % on COOP inhouse soritment",
    image: "/campaignImages/coopimg.jpg",
    link: "https://www.coop.se"
  },
  {
    id: "4",
    company: "Ica",
    offer: "1% on all shopping for Ica members",
    image: "/campaignImages/icaimg.jpg",
    link: "https://www.ica.se"
  },
  {
    id: "5",
    company: "BP",
    offer: "1% on all bio-diesel all 2022",
    image: "/campaignImages/bpimg.jpg",
    link: "https://bp.com"
  },
  {
    id: "6",
    company: "Zara",
    offer: "1 % on all shopping",
    image: "/campaignImages/zaraimg.jpg",
    link: "https://zara.com"
  },
  {
    id: "7",
    company: "Inter Sport",
    offer: "3 % on all shopping online",
    image: "/campaignImages/intersportimg.jpg",
    link: "https://intersport.com"
  },
  {
    id: "8",
    company: "Åhlens",
    offer: "1 % on all shopping 2022",
    image: "/campaignImages/ahlensimg.jpg",
    link: "https://ahlens.se"
  },
  {
    id: "9",
    company: "H&M",
    offer: "2 % on all shopping online",
    image: "/campaignImages/hmimg.jpg",
    link: "https://hm.com"
  }
];

function Campaign() {
  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-1 rounded gap-10 lg:ml-20 lg:mr-20 mt-8">
          <div className="bg-gray-100 overflow-hidden shadow-lg p-5">
            <div className="text-xs text-black text-left pt-1 mb-1">
              <span className="font-bold">Lorem ipsum dolor sit amet,</span>{" "}
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 lg:ml-20 lg:mr-20 mt-10">
          {campaign.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              name={campaign.company}
              offer={campaign.offer}
              image={campaign.image}
              link={campaign.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Campaign;
