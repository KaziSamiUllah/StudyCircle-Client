import { AiFillSlackCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <div >
      <div className="navbar bg-base-100 h-16">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl gap-0">
            <span>
              <AiFillSlackCircle />
            </span>
            Study <span className="text-primary font-bold">Cycle</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Sign Up</a>
            </li>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
