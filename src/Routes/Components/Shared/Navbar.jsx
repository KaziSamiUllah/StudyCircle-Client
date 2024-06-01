import { AiFillSlackCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar h-16">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl gap-0">
            <span>
              <AiFillSlackCircle />
            </span>
            Study <span className="text-primary font-bold">Cycle</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-1 flex justify-center">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
          </ul>
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
