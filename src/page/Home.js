import React, { Component } from "react";
import Nav from "../component/nav/Nav";
import NavSideBar from "../component/nav/NavSideBar/NavSideBar";
import NavSideBarLogin from "../component/nav/NavSideBar/NavSideBarLogin";
import NavMypage from "../component/nav/NavSideBar/NavSideBarChild/NavMyPage";
import NavOrderList from "../component/nav/NavSideBar/NavSideBarChild/NavOrderList";
import NavReview from "../component/nav/NavSideBar/NavSideBarChild/NavReview";
import NavMyPage from "../component/nav/NavSideBar/NavSideBarChild/NavMyPage";
import "../styles/home.scss";
import SectionLeft from "../pages/SectionLeft";

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <NavReview />
        </div>
        <div className="wrap">
          <SectionLeft />
          <section className="section-right">
            <section className="section-right__main" />
          </section>
        </div>
      </>
    );
  }
}

export default Home;
