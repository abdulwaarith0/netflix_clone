import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { api, BASE_URL } from "../../constants/";
import { useEffect, useState, useCallback } from "react";
// import axios from "axios";


function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  const getNewUsers = useCallback(async () => {
    try {
      const params = {
        new: true,
      }

      const headers = {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      };

      const response = await api().get(`${BASE_URL}/users`, { params,  headers });
      setNewUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getNewUsers();
  }, [getNewUsers]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li key={user.id || user.username} className="widgetSmListItem">
            <img
              src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default WidgetSm;