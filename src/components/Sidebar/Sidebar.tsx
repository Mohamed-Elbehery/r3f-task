import "./sidebar.css";
import SearchKeys from "../SearchKeys/SearchKeys";
import { useState } from "react";
import { SearchBar, XMark } from "../../assets";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const handleClick = (status: boolean) => {
    setToggleSideBar(status);
  };

  return (
    <aside>
      <SearchBar handleClick={handleClick} />
      <ul className={`search ${toggleSideBar ? "search-visible" : ""}`}>
        <li>
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="Search..."
          />
          <XMark classValue={"x-icon"} handleClick={handleClick} />
        </li>
        <SearchKeys query={query} />
      </ul>
    </aside>
  );
};

export default Sidebar;
