import * as React from "react";
import SideNav from "./SideNav";
import Home from "./Home";
import Navbar from "./Navbar";
import Details from "./Details";
import Footer from "./Footer";
function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Details />
      <SideNav title="home" />
      <Home />
      <Footer/>
    </div>
  );
}
export default HomePage;
