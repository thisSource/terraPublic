import Account from "../components/myAccountContainerComps/Account";
import { useEffect, useState } from "react";
import SavingOptionSelect from "../components/myAccountContainerComps/SaveOptionSelect";

function MyAccount() {
  const [isAccount, setIsAccount] = useState(true);
  const [page, setPage] = useState(<Account />);

  useEffect(() => {
    isAccount ? setPage(<Account />) : setPage(<SavingOptionSelect />);
  },[isAccount]);

  return (
    <div className="lg:mx-72 md:mx-20 mt-10">
      <div className="mb-10 border-b border-gray-300 text-lg">
        <button
          className="border-terra-purple-600 text-terra-purple-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium"
          onClick={() => setIsAccount(true)}
        >
          Account
        </button>
        <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium" onClick={() => setIsAccount(false)}>
          Saving Options
        </button>
      </div>
      {page}
    </div>
  );
}

export default MyAccount;
