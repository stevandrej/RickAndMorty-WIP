import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeStyle = "text-sky-700 font-medium";

  return (
    <nav>
      <ul className="flex justify-end list-none bg-slate-300/80 py-4 px-10 gap-6 text-slate-800 backdrop-blur-2xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Dimension C-137
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/characters"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/episodes"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Episodes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/locations"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Location
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
