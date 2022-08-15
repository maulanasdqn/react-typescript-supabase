import { ReactElement } from "react";
import { Link } from "react-router-dom";

export const Navbar = (): ReactElement => {
  const listMenu = [
    {
      menuName: "Home",
      link: "/",
    },
    {
      menuName: "List",
      link: "/list",
    },
    {
      menuName: "Assigment",
      link: "/assigment",
    },
  ];
  return (
    <header className="flex h-auto z-10 gap-x-4 p-6 bg-white w-full items-center sticky top-0">
      <figure className="navbar-figure">
        <figcaption className="font-bold text-md">TSKXU</figcaption>
      </figure>
      <nav className="flex justify-between w-full items-center">
        <div className="flex gap-x-4">
          {listMenu.map((x) => (
            <Link key={x.link} to={x.link}>
              {x.menuName}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
