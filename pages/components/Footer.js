import Link from "next/link";
import Image from "next/image";
import { supabase } from "../supabase";

export default function Footer() {
  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <footer className="px-20 py-4 w-full bg-gray-200 shadow dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto px-12">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-8"
              alt="Flowbite Logo"
              height={26}
              width={26}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Chom Farma
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Medicine
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Our Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Chom Farma™️
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
