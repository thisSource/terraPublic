function BaseTextComponent() {
  return (
    <div className="grid lg:grid-cols-1 gap-10 lg:ml-20 lg:mr-20 mt-8">
      <div className="bg-gray-100 rounded overflow-hidden shadow-lg p-5">
        <div className="text-xs text-black text-left pt-1 mb-1">
          <span className="font-bold">Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
}

export default BaseTextComponent;
