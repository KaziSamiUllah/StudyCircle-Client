import { AiFillSlackCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import useUser from "../../Hooks/useUser";

const Navbar = () => {
  const { user, SignOut, savedUser, isPending } = useUser();
  // console.log(user, savedUser);
  const handleSingOut = () => {
    SignOut();
  };

  return (
    <div>
      <div className="navbar h-16">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-2xl gap-0">
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
                  <div className="w-10 mask mask-squircle h-10 flex justify-center items-center ">
                    <img
                      className="w-full"
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : savedUser?.imageURL
                          ? savedUser.imageURL
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="right-0 dropdown-content z-[10] menu bg-base-100 rounded-box w-fit space-y-5 p-5 shadow-md shadow-slate-500"
                >
                  {isPending ? (
                    <div className="skeleton h-4 w-full"></div>
                  ) : (
                    <li>{savedUser?.name || user?.displayName}</li>
                  )}

                  <li>{user.email}</li>

                  {isPending ? (
                    <div className="skeleton h-4 w-full"></div>
                  ) : (
                    <li>Role: {savedUser && savedUser?.role} </li>
                  )}
                  {isPending ? (
                    <div className="skeleton h-4 w-full"></div>
                  ) : (
                    <li className="bg-accent font-bold rounded-lg ">
                      {savedUser ? (
                        <Link
                          to={
                            savedUser && savedUser?.role === "tutor"
                              ? "/dashboard/tutorSessions"
                              : savedUser && savedUser?.role === "student"
                              ? "/dashboard/bookedSessions"
                              : savedUser && savedUser?.role === "admin"
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
                  )}
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
