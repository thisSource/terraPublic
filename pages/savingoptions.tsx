// import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
// import {
//   CursorClickIcon,
//   MailOpenIcon,
//   UsersIcon
// } from "@heroicons/react/outline";

// const stats = [
//   {
//     id: 1,
//     name: "1 % on transactions",
//     stat: "Relly good",
//     icon: UsersIcon,
//     change: "",
//     changeType: "increase"
//   },
//   {
//     id: 2,
//     name: "Plus 1 %",
//     stat: "event - compiled successfully in 227 ms (729 modules)",
//     icon: MailOpenIcon,
//     change: "event - compiled successfully in 227 ms (729 modules)",
//     changeType: "decrease"
//   },
//   {
//     id: 3,
//     name: "3 % on random",
//     stat: "compiled succe",
//     icon: CursorClickIcon,
//     change: "3.2%",
//     changeType: "increase"
//   }
// ];

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function ContainerDevelopmentCard() {
//   return (
//     <div className="mx-8 mt-10">
//       <div>
//         <h3 className="text-lg leading-6 font-medium text-gray-900">
//           Ways of saving
//         </h3>

//         <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {stats.map((item) => (
//             <div
//               key={item.id}
//               className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
//             >
//               <dt>
//                 <div className="absolute bg-terra-purple rounded-md p-3">
//                   <item.icon
//                     className="h-6 w-6 text-terra_green"
//                     aria-hidden="true"
//                   />
//                 </div>
//                 <p className="ml-16 text-2xl text-terra-purple-600 truncate">
//                   {item.name}
//                 </p>
//               </dt>
//               <dd className="mt-4 ml-16 pb-6 flex items-baseline sm:pb-7">
//                 <p className="text-base text-gray-900">
//                   {item.stat}
//                 </p>

//                 <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
//                   <div className="text-sm">
//                     <a
//                       href="#"
//                       className="font-medium text-indigo-600 hover:text-indigo-500"
//                     >
//                       {" "}
//                       View all
//                       <span className="sr-only"> {item.name} stats</span>
//                     </a>
//                   </div>
//                 </div>
//               </dd>
//             </div>
//           ))}
//         </dl>
//       </div>
//     </div>
//   );
// }

export default function Services() {
  return (
    <div className="lg:mx-20">
      <div className="p-10 m-10 grid lg:grid-cols-2 grid-cols-1 bg-gray-100 border-b-2 border-terra-green rounded-xl text-terra-purple-700 shadow-lg">
        <div className="content">
          <p className="text-3xl ">1 % on transactions</p>
          <p className="my-4 text-xl">Base service</p>
        </div>
        <div className="content">
          <p className="my-4">
            Every time you make a purchase below 5000kr we will move 1 % of the
            value to your fund savings.
          </p>
          <p className="mt-10 lg:mr-40 text-xs">
            An investor may get back less than the amount invested. Information
            on past performance, where given, is not necessarily a guide to
            future performance.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-evenly">
        <div className="p-10 m-10 lg:w-full border-b-2 border-b-terra-purple rounded-xl text-terra-purple-700 shadow-lg">
          <p className="text-3xl ">Plus 1 %</p>
          <p className="my-4 text-xl">Optional service</p>
          <p className="my-4">
            Now 2 % on every transaction below 5000kr will be added to your fund
            savings.
          </p>
        </div>
        <div className="p-10 m-10 lg:w-full border-b-2 border-terra-purple rounded-xl text-terra-purple-700 shadow-lg">
          <p className="text-3xl ">3 % on random transaction</p>
          <p className="my-4 text-xl">Optional service</p>
          <p className="my-4">
            Every week, we move 3 % to your fund savings on a random transaction
            below 5000 kr.
          </p>
        </div>
      </div>
    </div>
  );
}
