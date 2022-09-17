import { useState } from "react";
import AccountComponent from "../components/myAccountContainerComps/AccountComponent";
import SavingsComponent from "../components/myAccountContainerComps/SavingsComponent";
import TransferComponent from "../components/myAccountContainerComps/TransferComponent";

const sections = {
  account: AccountComponent,
  savings: SavingsComponent,
  transfer: TransferComponent,
} as const;

const styles = {
  default:
    "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium",
  active:
    "border-terra-purple-600 text-terra-purple-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium",
};
function MyAccount() {
  const sectionNames = Object.keys(sections);
  const [activeSection, setActiveSection] =
    useState<keyof typeof sections>("account");
  const SectionComponent = sections[activeSection] || sections.account;

  const defaultProps = {
    value: 1,
  };

  return (
    <div className="lg:mx-72 md:mx-10 mx-4 mt-10">
      <div className="flex flex-row justify-between mb-10 text-lg">
        {sectionNames.map((section) => (
          <button
            key={section}
            className={
              section === activeSection ? styles.active : styles.default
            }
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>

      <SectionComponent {...defaultProps} />
    </div>
  );
}

export default MyAccount;
