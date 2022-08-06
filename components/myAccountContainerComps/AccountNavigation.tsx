const tabs = [
  { name: "Account", href: "/myaccount", current: true },
  { name: "Saving options", href: "/savingoptions", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AccountNavigation() {
  return (
    <div className="block mb-10">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current
                  ? "border-terra-purple-600 text-terra-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                "w-1/4 py-4 px-1 mx-4 text-center border-b-2 font-medium text-sm"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
