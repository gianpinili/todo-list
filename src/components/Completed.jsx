import { Dot } from "lucide-react";

function Completed() {
  return (
    <>
      <div className="mx-5">
        <p className="text-white mx-24 md:mx-44 mt-12 border-b border-white pb-2 text-center">
          Completed Tasks
        </p>
        <div className="flex">
          <Dot className="text-white" />
          <p className="text-white line-through">test</p>
          <p className="text-white">Date</p>
        </div>
      </div>
    </>
  );
}

export default Completed;
