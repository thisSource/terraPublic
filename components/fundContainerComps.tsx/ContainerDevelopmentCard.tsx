function ContainerDevelopmentCard() {
  return (
    <div className=" grid lg:grid-cols-2 gap-10 lg:ml-20 lg:mr-20">
      <div className="bg-gray-100 rounded overflow-hidden shadow-lg p-10">
      <div className="text-md text-black text-center pt-1 mb-1">
          Development 12 month
        </div>
        <div className="text-6xl font-bold text-blue-500 text-center ">
          + 4,2 %
        </div>
        
        <div className="text-md text-black text-center pt-3">
          <span className="text-xs p-4">3 months<span className="text-green-800"> +1,2%</span></span>
          <span className="text-xs ">6 months<span className="text-green-800"> +1,2%</span></span>
        </div>
      </div>
      <div className="bg-gray-100 rounded overflow-hidden shadow-lg p-10">
      <div className="text-md text-black text-center pt-1">
          Per 100 € invested.
        </div>
        <div className="text-6xl font-bold text-green-500 text-center ">
          - 5,3
        </div>
        <div className="text-4xl font-bold text-green-500 text-center ">
          kg CO2
        </div>
       
      </div>
    </div>
  );
}
export default ContainerDevelopmentCard;
