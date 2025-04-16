"use client";
import { usePathname , useRouter } from "next/navigation";
import React from "react";
import IsAuth from "../utils/IsAuth";

const NavBar = () => {
  const path = usePathname();

  console.log(path);

  const router = useRouter();

  const hiddenNav = ["/signin", "/signup"];
  const currunetPath = hiddenNav.includes(path.toString());
  
  const logout = () => {
    localStorage.removeItem("token")
    router.push('/signin')

    console.log("clicked")
  }
  
  return (
    <div>
      {!currunetPath && (
        //    <div className="navbar bg-zinc-950  shadow-sm">
        //    <div className="flex-1">
        //      <a className="btn btn-ghost  text-xl">Stream Site</a>
        //    </div>
        //    <div className="flex-none">
        //      <ul className="menu menu-horizontal px-1">
        //        <li>
        //          <a>{"Live".toUpperCase()}</a>
        //        </li>
        //        <li>
        //          <a>SCHEDULE</a>
        //        </li>
        //        <li>
        //          <a>ON DEMAND</a>
        //        </li>
        //        <li>
        //          <a>Contact</a>
        //        </li>
        //        <li>
        //          <a>About</a>
        //        </li>
        //        {!IsAuth() ? (
        //           <li>
        //           <a>SignIn / SignUp</a>
        //         </li>
        //         ) : (
        //           <li>
        //           <a>Your profile</a>
        //         </li>
        //         )}
        //      </ul>
        //    </div>
        //  </div>

        <div className="navbar relative z-0 bg-zinc-950 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Steam </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">
              {!IsAuth() ? (
                <li>
                  <a>SignIn / SignUp</a>
                </li>
              ) : (
                <li>
                  <details>
                    <summary>Profile</summary>
                    <ul className="p-2 right-3">
                      <button className="btn " onClick={logout} >Log out</button>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};



const LoginStatus = () => {
  const token = localStorage.getItem("token") || "";

  return (
    <>
      {token?.length < 10 ? (
        <li>
          <a>SignIn / SignUp</a>
        </li>
      ) : (
        <li>
          <a>Your profile</a>
        </li>
      )}
    </>
  );
};

export default NavBar;
