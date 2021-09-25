import styles from "../../styles/FundAndCampaign.module.css";
import Image from "next/image";
import image from "next/image";

function CampaignContainer() {
  let imageWidth = 800;
  let imageHeight = 400;

  let campaignPlaceholder = [
    {
      company: "Coop",
      offer: "1 % on all your shopping all 2022",
      image: (
        <Image
          src="/campaignimages/coop.jpg"
          width={imageWidth}
          height={imageHeight}
        />
      ),
      campaingSlogan:
        "Everytime you shop at Coop we will co-invest togeterh with you 1 %. We belive this will help transform the world."
    },
    {
      company: "EON",
      offer: "Together we crete clean energy, 2 %",
      image: (
        <Image
          src="/campaignimages/eon.jpg"
          width={imageWidth}
          height={imageHeight}
        />
      ),
      campaingSlogan: "Wind, Solor, Hydro, the future is sutainable"
    },
    {
      company: "Clas Ohlson",
      offer: "1 % on all shopping",
      image: (
        <Image
          src="/campaignimages/clasohlson.jpg"
          width={imageWidth}
          height={imageHeight}
        />
      ),
      campaingSlogan: "Save the world"
    },
    {
      company: "Akademibokhandeln",
      offer: "1 % on all course litterature",
      image: (
        <Image
          src="/campaignimages/ab.jpg"
          width={imageWidth}
          height={imageHeight}
        />
      ),
      campaingSlogan: "Read more"
    }
  ];

  return (
    <div className={styles.campaignContainer}>
      <div>
        <div className={styles.campaignContainerHeading}>Campaigns</div>
        {campaignPlaceholder.map((camp) => {
          return (
            <div className={styles.campaigns}>
              <div className={styles.campaigncompany}>{camp.company}</div>
              <div className={styles.campaignimage}>{camp.image}</div>
              <div className={styles.campaignoffer}>{camp.offer}</div>
              <div className={styles.campaignslogan}>{camp.campaingSlogan}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CampaignContainer;
