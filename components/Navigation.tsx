/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import Link from "next/link";
import { getStoryblokApi } from "@storyblok/react";
import NavLinks from "./NavLinks";
const Navigation = (props: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [menuLinks, setMenuLinks] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const navLinks = await getNavLinks();
      const paths = Object.values(navLinks.data.links).map((link: any) => ({
        path: link.path,
        pathName: link.name,
      }));
      setMenuLinks({ ...navLinks.data });
    };

    fetchData();
  }, []);

  return (
    <div className="relative bg-white border-b-2 border-gray-100">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Storyblok</span>
              <img
                className="h-20 w-auto sm:h-10 hidden sm:block"
                src="https://a.storyblok.com/f/88751/251x53/0d3909fe96/storyblok-primary.png"
                alt="Storyblok"
              />
              <img
                className="h-20 w-auto sm:h-10 sm:hidden"
                src="https://a.storyblok.com/f/88751/92x106/835caf912a/storyblok-logo.png"
                alt="Storyblok"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10">
            {menuLinks?.map((link) => (
              <Link
                key={link.pathName}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                href={link.path ?? ""}
              >
                {link.pathName}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {openMenu && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://a.storyblok.com/f/88751/92x106/835caf912a/storyblok-logo.png"
                    alt="Storyblok"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => setOpenMenu(false)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    href="/about"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      About
                    </span>
                  </Link>
                  <Link
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    href="/blog"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Blog
                    </span>
                  </Link>
                  <Link
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    href="/services"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Services
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )} */}

      <NavLinks data={menuLinks} />
    </div>
  );
};

export default Navigation;

async function getNavLinks() {
  const storyblokApi = getStoryblokApi();

  // read all links from Storyblok
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });

  return {
    data,
  };
}
