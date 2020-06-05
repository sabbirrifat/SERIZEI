import React from "react";
import axios from "axios";
import { USER_SERVER } from "../../../config";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function DashboardNav(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light dashboardNav">
      <a class="navbar-brand" href="/dashboard">
        SERIZEI.
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/favorite">
              Favorite
            </a>
          </li>
          {user.userData && !user.userData.isAuth ? (
            <>
              <li class="nav-item">
                <a class="nav-link" href="/register">
                  Sign up
                </a>
              </li>
            </>
          ) : (
            <>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onClick={logoutHandler}
                  style={{ cursor: "pointer" }}
                >
                  Log Out
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(DashboardNav);
