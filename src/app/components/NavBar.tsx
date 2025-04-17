"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CustomJwtPayload } from "@/types/jwt";

import { jwtDecode } from "jwt-decode";
import Link from "next/link";

const NavBar = () => {
  const path = usePathname(); // Always call hooks at the top level
  const [decodedToken, setDecodedToken] = useState<string>("");
  const router = useRouter();

  const hiddenNav = ["/signin", "/signup"];
  const currunetPath = hiddenNav.includes(path.toString());

  useEffect(() => {
    try {
      const token = localStorage.getItem("token") || "";
      if (token) {
        const decoded = jwtDecode<CustomJwtPayload>(token);
        setDecodedToken(decoded.name || "");
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/signin");
  };

  return (
    <div>
      {!currunetPath && (
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="/live">LIVE</a>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
            <Link href="/" className="btn btn-ghost text-xl">
              Steam{" "}
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/live">LIVE</a>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">
              {decodedToken.length < 1 ? (
                <li>
                  <a>SignIn / SignUp</a>
                </li>
              ) : (
                <li>
                  <details>
                    <summary>{decodedToken}</summary>
                    <ul className="p-2 right-3 w-[200px]">
                      <li>
                        <a>Submenu 2</a>
                      </li>
                      <button className="btn" onClick={logout}>
                        Log out
                      </button>
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

export default NavBar;
