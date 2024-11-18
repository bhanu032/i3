import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  RssFeed,
  Chat,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  ExitToApp,
} from "@material-ui/icons";
import "./sidebar.css";

export default function Sidebar() {
  const history = useHistory();
  const [selectedItem, setSelectedItem] = useState("Feed");

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    if (itemName === "Logout") {
      handleLogout(); // Redirect to logout page
    } 
  };

  const handleLogout = () => {
    // Remove user details from local storage
    localStorage.removeItem("user");
    // Redirect to logout page
    // history.push("/login");
    window.location.href = "/login";
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li
            className={`sidebarListItem ${
              selectedItem === "Feed" && "selected"
            }`}
            onClick={() => handleItemClick("Feed")}
          >
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li
            className={`sidebarListItem ${
              selectedItem === "Chats" && "selected"
            }`}
            onClick={() => handleItemClick("chat")}
          >
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li
            className={`sidebarListItem ${
              selectedItem === "Groups" && "selected"
            }`}
            onClick={() => handleItemClick("Groups")}
          >
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
           
          <li
            className={`sidebarListItem ${
              selectedItem === "Questions" && "selected"
            }`}
            onClick={() => handleItemClick("Questions")}
          >
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li
  className={`sidebarListItem ${selectedItem === "mySchool" && "selected"}`}
  onClick={() => window.location.href = "https://jklu.edu.in/"}
>
  <WorkOutline className="sidebarIcon" />
  <span className="sidebarListItemText">mySchool</span>
</li>


          <li
            className={`sidebarListItem ${
              selectedItem === "Events" && "selected"
            }`}
            onClick={() => handleItemClick("Events")}
          >
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li
  className={`sidebarListItem ${selectedItem === "Courses" && "selected"}`}
  onClick={() => window.location.href = "https://www.coursera.org/"}
>
  <School className="sidebarIcon" />
  <span className="sidebarListItemText">Courses</span>
</li>

          
          <li
            className={`sidebarListItem ${
              selectedItem === "Logout" && "selected"
            }`}
            onClick={() => handleItemClick("Logout")}
          >
            <ExitToApp className="sidebarIcon" />
            <span className="sidebarListItemText">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
