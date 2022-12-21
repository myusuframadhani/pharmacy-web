import { useState } from "react"; // import state
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Navbar(session) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const supabase = useSupabaseClient();

  return (
    <div className="flex items-center justify-between py-6 px-10 shadow-lg">
      <a href="/">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li>
                    <a href="/medicine" className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-red-500 md:p-0">Medicine</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-red-500 md:p-0">Delivery</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-red-500 md:p-0">Our Service</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-red-500 md:p-0">Contact</a>
                </li>
                <li className="lg:-mt-2 sm:mt-0">
                  <Dropdown
                    label="Profile"
                    dismissOnClick={false}
                  >
                    <Dropdown.Item>
                      <Link href="/account"><FontAwesomeIcon className="mr-2" icon={faUser} />Account</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                    <button type="button" className="text-red-500" onClick={() => supabase.auth.signOut()}><FontAwesomeIcon className="mr-2" icon={faRightFromBracket} />Logout</button>
                    </Dropdown.Item>
                  </Dropdown>
                </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li>
                <a href="/medicine" className="hover-underline-animation block py-2 pl-3 pr-4 text-gray-800 rounded md:p-0">Medicine</a>
            </li>
            <li>
                <a href="#" className="hover-underline-animation block py-2 pl-3 pr-4 text-gray-800 rounded md:p-0">Delivery</a>
            </li>
            <li>
                <a href="#" className="hover-underline-animation block py-2 pl-3 pr-4 text-gray-800 rounded md:p-0">Our Service</a>
            </li>
            <li>
                <a href="#" className="hover-underline-animation block py-2 pl-3 pr-4 text-gray-800 rounded md:p-0">Contact</a>
            </li>
            <li className="-mt-2">
              <Dropdown
                label="Profile"
                dismissOnClick={false}
              >
                <Dropdown.Item>
                  <Link href="/account"><FontAwesomeIcon className="mr-2" icon={faUser} />Account</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <button type="button" className="block py-2 pl-3 pr-4 text-red-500 rounded hover:bg-gray-400 md:hover:bg-transparent md:p-0" onClick={() => supabase.auth.signOut()}><FontAwesomeIcon className="mr-2" icon={faRightFromBracket} />Logout</button>
                </Dropdown.Item>
              </Dropdown>
            </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}