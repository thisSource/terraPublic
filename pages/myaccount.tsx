import { useState } from "react";
import AccountComponent from "../components/myAccountContainerComps/AccountComponent";
import SavingsComponent from "../components/myAccountContainerComps/SavingsComponent";
import TransferComponent from "../components/myAccountContainerComps/TransferComponent";

interface Comps {
  account: React.ElementType;
  savings: React.ElementType;
  transfer: React.ElementType;
}

interface Style {
  default: string;
}

function MyAccount() {
  const sections: Comps = {
    account: AccountComponent,
    savings: SavingsComponent,
    transfer: TransferComponent,
  };

  const sectionNames = Object.keys(sections);
  const [activeSection, setActiveSection] = useState("account");
  const SectionComponent =
    sections[activeSection as keyof Comps] || sections.account;

  const styles: Style = {
    default:
      "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium",
  };

  styles[activeSection as keyof Style] =
    "border-terra-purple-600 text-terra-purple-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium";

  return (
    <div className="lg:mx-72 md:mx-10 mx-4 mt-10">
      <div className="flex flex-row justify-between mb-10 text-lg">
        {sectionNames.map((section) => (
          <button
            key={section}
            className={styles[section as keyof Style] || styles.default}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>

      <SectionComponent />
    </div>
  );
}

export default MyAccount;
