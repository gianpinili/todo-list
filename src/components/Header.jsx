import { AlignJustify, UserRound } from "lucide-react";

function Header() {
  return (
    <>
      <nav className="flex justify-between m-10">
        <div>
          <AlignJustify className="text-white" />
        </div>
        <div>
          <h1 className="text-3xl text-white">Tasks for Today</h1>
        </div>
        <div>
          <UserRound className="text-white" />
        </div>
      </nav>
    </>
  );
}

export default Header;
