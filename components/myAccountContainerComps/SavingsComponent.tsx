import { UsersIcon } from "@heroicons/react/solid";

const services = [
  {
    id: 1,
    title: "1 % on transactions",
    type: "Active",
    location: "Remote",
    department: "Base selection",
    closeDate: "2020-01-07",
    closeDateFull: "1 % on all transactions of no higher value than 5000 SEK",
    style: "mt-4 block rounded-md shadow bg-terra-purple-200 cursor-default",
    styleActiveButton:
      "px-6 py-4 inline-flex text-sm leading-5 font-normal rounded-full bg-terra-green-300 text-green-800",
    activeText: "Active",
  },
  {
    id: 2,
    title: "+1 %",
    type: "Total 2 %",
    location: "Remote",
    department: "Optional selection",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
    style: "mt-4 block rounded-md shadow bg-gray-200 hover:bg-terra-green-200",
    styleActiveButton:
      "px-6 py-4 inline-flex text-sm leading-5 font-normal rounded-full bg-terra-purple-100 text-gray-800",
    activeText: "Inactive",
  },
  {
    id: 3,
    title: "3 % on a random transaction",
    type: "Full-time",
    location: "Remote",
    department: "Optional selection",
    closeDate: "2020-01-14",
    closeDateFull: "January 14, 2020",
    style: "mt-4 block rounded-md shadow bg-gray-200 hover:bg-terra-green-200",
    styleActiveButton:
      "px-6 py-4 inline-flex text-sm leading-5 font-normal rounded-full bg-terra-purple-100 text-gray-800",
    activeText: "Inactive",
  },
];

export default function SavingsComponent() {
  return (
    <div className="">
      <h1 className="text-xl font-semibold text-gray-900"> Saving options</h1>
      <ul role="list" className="">
        {services.map((position) => (
          <li key={position.id}>
            <a href="#" className={position.style}>
              <div className="px-4 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-normal text-terra-purple-600 truncate">
                    {position.title}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className={position.styleActiveButton}>
                      {position.activeText}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <UsersIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.department}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
