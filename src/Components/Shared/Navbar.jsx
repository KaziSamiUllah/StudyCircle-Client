import { AiFillSlackCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import useUser from "../../Hooks/useUser";


const Navbar = () => {


  const { user, SignOut, savedUser} = useUser();
  console.log(savedUser?.role);
  const handleSingOut = () => {
    SignOut();
  };

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
            <div className="">
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
                  <li>{savedUser?.name || "undefined"}</li>
                  <li>{user.email}</li>
                  <li>Role: {savedUser && savedUser?.role} </li>
                  <li className="bg-accent font-bold rounded-lg ">
                    {savedUser ? (
                      <Link
                        to={
                          savedUser && savedUser?.role === "tutor"
                            ? "/dashboard/tutorSessions"
                            :  savedUser && savedUser?.role === "student"
                            ? "/dashboard/bookedSessions"
                            :   savedUser && savedUser?.role === "admin"
                            ? "/dashboard/admin/allUsers"
                            : "/"
                        }
                      >
                        Dashboard
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>

                  <li>
                    <button className="btn" onClick={handleSingOut}>
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
