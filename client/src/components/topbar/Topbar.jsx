import { useState } from "react";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios for making API requests

import "./topbar.css";
import logo from "../../images/logo.png";

export default function Topbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = JSON.parse(localStorage.getItem("user")); // Retrieve user data from local storage

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/users/search?username=${searchQuery}`);
      setSearchResults(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="logo-image" src={logo} width={30} height={30} />
          <span className="logo">IntellectInn</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="searchButton" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          {/* Display search results */}
          {searchResults.map((user) => (
            <Link key={user._id} to={`/profile/${user.username}`}>
              <div className="searchResultItem">
                <img
                  src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"}
                  alt=""
                  className="topbarImg"
                />
                <span className="searchResultUsername">{user.username}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"}
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
