import React from "react";
import { Slot } from "react-page-layout";
import { useHistory } from "react-router";
import Header from "./Header";
import dashboard from "../../assets/images/dashboard.svg";
import transactionList from "../../assets/images/transaction-list.svg";
import list from "../../assets/images/list_alt.png";
import profile from "../../assets/images/my-profile.svg";
import dashboardOn from "../../assets/images/dashboard-on.png";
import transactionlistOn from "../../assets/images/transaction-list-on.png";
import profileOn from "../../assets/images/profile-on.png";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function DefaultLayout() {
	const history = useHistory();
	const { pathname } = history.location;
	return (
    <div className="main-wrapper">
      <div className="content-wrapper">
        <main>
          <aside>
            <div class="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <Link to="/">
                <img src={pathname === "/" ? dashboardOn : dashboard} alt="" />
              </Link>
              <Link to="/transaction">
                <img
                  src={
                    pathname === "/transaction"
                      ? transactionlistOn
                      : transactionList
                  }
                  alt=""
                />
              </Link>
              <Link to="/profile">
                <img
                  src={pathname === "/profile" ? profileOn : profile}
                  alt=""
                />
              </Link>
            </div>
          </aside>
          <div className="container">
            <div className="content">
              <Slot name="breadcrumbs" className="second-nav-bar" />
              <Slot name="main" component="section" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
