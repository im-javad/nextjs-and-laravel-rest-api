import Link from "next/link";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mb-14">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="#">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
