import Account from "../components/myAccountContainerComps/Account";
import { useEffect, useState } from "react";
import SavingOptionSelect from "../components/myAccountContainerComps/SaveOptionSelect";
import RedeemContainer from "../components/myAccountContainerComps/RedeemContainer";

function MyAccount() {
  const [isAccount, setIsAccount] = useState("account");
  const [page, setPage] = useState(<Account />);

  const onStyle =
    "border-terra-purple-600 text-terra-purple-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium";
  const offStyle =
    "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium";

  const [accountStyle, setAccountStyle] = useState(onStyle);
  const [savingOptionsStyle, setSavingOptionsStyle] = useState(offStyle);
  const [transferStyle, setTransferStyle] = useState(offStyle);

  useEffect(() => {
    isAccount === "account"
      ? (setPage(<Account />),
        setAccountStyle(onStyle),
        setSavingOptionsStyle(offStyle),
        setTransferStyle(offStyle))
      : isAccount === "savingoptions"
      ? (setPage(<SavingOptionSelect />),
        setAccountStyle(offStyle),
        setSavingOptionsStyle(onStyle),
        setTransferStyle(offStyle))
      : (setPage(<RedeemContainer value={4390} />),
        setAccountStyle(offStyle),
        setSavingOptionsStyle(offStyle),
        setTransferStyle(onStyle));
  }, [isAccount]);

  return (
    <div className="lg:mx-72 md:mx-10 mx-4 mt-10">
      <div className="flex flex-row justify-between mb-10 border-b border-gray-300 text-lg">
        <button
          className={accountStyle}
          onClick={() => setIsAccount("account")}
        >
          Account
        </button>

        <button
          className={savingOptionsStyle}
          onClick={() => setIsAccount("savingoptions")}
        >
          Saving Options
        </button>

        <button
          className={transferStyle}
          onClick={() => setIsAccount("transfermoney")}
        >
          Transfer money
        </button>
      </div>
      {page}
    </div>
  );
}

export default MyAccount;
