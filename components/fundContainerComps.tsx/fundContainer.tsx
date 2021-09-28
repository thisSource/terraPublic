import styles from "../../styles/FundAndCampaign.module.css";
import Image from "next/image";
import LineGraph from './line'



function FundContainer() {
  let imageWidth = 800;
  let imageHeight = 500;
  let campaignPlaceholder = [
    {
      company: "Neste",
      offer: "Sustainable Aviation Fuel",
      image: (
        <Image
          src="/fundImages/neste.jpg"
          width={imageWidth}
          height={imageHeight}
        />
      ),
      campaingSlogan:
        "Neste Oyj is an oil refining and marketing company located in Espoo, Finland. It produces, refines and markets oil products, provides engineering services, and licenses production technologies. Neste has operations in 14 countries. Neste shares are listed on the NASDAQ OMX Helsinki Stock Exchange."
    },
    {
      company: "Sunpower Corp",
      offer: "Solar energy",
      image: (
        <Image
          src="/fundImages/sunpower.jpg"
          width={imageWidth}
          height={imageHeight}
        />
      ),
      campaingSlogan:
        "SunPower Corporation is an American company specializing in solar power generation and energy storage."
    },
    {
      company: "SeaTwirl",
      offer: "Wind energy",
      image: (
        <Image
          src="/fundImages/seatwirl.jpg"
          width={imageWidth}
          height={imageHeight}
        />
      ),
      campaingSlogan:
        "SeaTwirl is developing a floating wind turbine for the ocean. SeaTwirl's wind turbine is easier to build, install and maintain than traditional offshore wind."
    },
    {
      company: "FirstSolar",
      offer: "Solar energy",
      image: (
        <Image
          src="/fundImages/firstsolar.jpg"
          width={imageWidth}
          height={imageHeight}
        />
      ),
      campaingSlogan:
        "First Solar, Inc. is an American manufacturer of solar panels, and a provider of utility-scale PV power plants and supporting services that include finance, construction, maintenance and end-of-life panel recycling."
    }
  ];

  return (
    <div className={styles.campaignContainer}>
      <div>
        <div className={styles.campaignContainerHeading}>Our Fund</div>
        <div className={styles.funddev}><LineGraph/></div>
        <div className={styles.portfolioheading}>Portfolio</div>

        {campaignPlaceholder.map((camp) => {
          return (
            <div className={styles.portfolio}>
              <div className={styles.fundcompany}>{camp.company}</div>
              <div className={styles.fundimage}>{camp.image}</div>
              <div className={styles.fundoffer}>{camp.offer}</div>
              <div className={styles.fundslogan}>{camp.campaingSlogan}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FundContainer;
