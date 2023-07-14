import { FC } from "react";
import Link from "next/link";
import { useState } from "react";

interface LinkData {
  id: number;
  slug: string;
  name: string;
  is_folder: boolean;
  parent_id: number | null;
  published: boolean;
  position: number;
  uuid: string;
  is_startpage: boolean;
  real_path: string;
}

interface Data {
  links: { [key: string]: LinkData };
}

interface Props {
  data: Data;
}

const NavLinks: FC<Props> = ({ data }) => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  if (!data) return null;

  const links = Object.values(data.links);

  const mainLinks = links.filter((link) => link.parent_id === null);

  const subLinks = links.filter((link) => link.parent_id !== null);

  return (
    <nav className="flex items-center gap-4 p-4">
      {mainLinks.map((link) => (
        <div key={link.uuid} className="relative">
          <button onClick={() => setActiveLink(link.uuid)}>{link.name}</button>
          {activeLink === link.uuid && (
            <div className="absolute left-0 mt-2 space-y-2 bg-white border border-gray-200 rounded shadow-lg">
              {subLinks
                .filter((subLink) => subLink.parent_id === link.id)
                .map((subLink) => (
                  <Link
                    className="block px-4 py-2 hover:bg-gray-200"
                    key={subLink.uuid}
                    href={subLink.real_path}
                  >
                    {subLink.name}
                  </Link>
                ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavLinks;
