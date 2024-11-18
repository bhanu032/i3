import { useState } from "react";
import axios from "axios";

import "./rightbar.css";

export default function Rightbar() {
  const [classAnnouncements, setClassAnnouncements] = useState([]);
  const [schoolAnnouncements, setSchoolAnnouncements] = useState([]);
  const [newClassAnnouncement, setNewClassAnnouncement] = useState("");
  const [newSchoolAnnouncement, setNewSchoolAnnouncement] = useState("");

  const addClassAnnouncement = () => {
    if (newClassAnnouncement.trim() !== "") {
      setClassAnnouncements([...classAnnouncements, newClassAnnouncement]);
      setNewClassAnnouncement("");
    }
  };

  const addSchoolAnnouncement = () => {
    if (newSchoolAnnouncement.trim() !== "") {
      setSchoolAnnouncements([...schoolAnnouncements, newSchoolAnnouncement]);
      setNewSchoolAnnouncement("");
    }
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="announcementSection">
          <h4 className="rightbarTitle">School Announcements</h4>
          <div className="announcementContainer">
            {schoolAnnouncements.map((announcement, index) => (
              <div key={index} className="announcement">
                {announcement}
              </div>
            ))}
            <div className="announcementInput">
              <input
                type="text"
                placeholder="Add school announcement..."
                value={newSchoolAnnouncement}
                onChange={(e) => setNewSchoolAnnouncement(e.target.value)}
              />
              <button onClick={addSchoolAnnouncement}>Add</button>
            </div>
          </div>
        </div>
        <div className="announcementSection">
          <h4 className="rightbarTitle">Class Announcements</h4>
          <div className="announcementContainer">
            {classAnnouncements.map((announcement, index) => (
              <div key={index} className="announcement">
                {announcement}
              </div>
            ))}
            <div className="announcementInput">
              <input
                type="text"
                placeholder="Add class announcement..."
                value={newClassAnnouncement}
                onChange={(e) => setNewClassAnnouncement(e.target.value)}
              />
              <button onClick={addClassAnnouncement}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
