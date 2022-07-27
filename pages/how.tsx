export default function Test() {
  return (
    <div className="flex flex-col snap-y mx-auto snap-mandatory h-screen w-screen overflow-scroll">
      <div className="snap-start bg-amber-200 w-screen flex-shrink-0 h-screen flex items-center justify-center text-8xl">
        1
      </div>
      <div className="snap-start bg-teal-200 w-screen flex-shrink-0  h-screen flex items-center justify-center text-8xl">
        2
      </div>
      <div className="snap-start bg-cyan-200 w-screen flex-shrink-0 h-screen flex items-center justify-center text-8xl">
        3
      </div>
      <div className="snap-start bg-fuchsia-200 w-screen flex-shrink-0 h-screen flex items-center justify-center text-8xl">
        4
      </div>
    </div>
  );
}
