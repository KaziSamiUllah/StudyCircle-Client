import { AiFillSlackCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import useUser from "../../../Hooks/useUser";

const Navbar = () => {
  const [user, SignOut] = useUser();
  const handleSingOut=()=>{
    SignOut()
  }


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
        {user ? (
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" m-1">
                <div className="w-10 mask mask-squircle">
                  <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6QbAPJOG3NsnkipeqR5pmTu12X7WU8F4g_WHDTcmBw&s"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="right-0 dropdown-content z-[10] menu bg-base-100 rounded-box w-fit space-y-5 p-5 shadow-md shadow-slate-500"
              >
                <li>{user.displayName || 'undefined'}</li>
                <li>{user.email}</li>
                <li>Role:  </li>
                <li>
                  <button className="btn" onClick={handleSingOut}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            
            <ul className="menu menu-horizontal px-1 gap-1 flex justify-center">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
          </ul>
          )}









          {/* <ul className="menu menu-horizontal px-1 gap-1 flex justify-center">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
