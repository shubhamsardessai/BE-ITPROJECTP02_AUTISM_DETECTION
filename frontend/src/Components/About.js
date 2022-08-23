import * as React from "react";

import "../Styles/about.css";

import Header from "./About_Components/Header";
import Banner1 from "./About_Components/Banner1";
import Banner2 from "./About_Components/Banner2";
import Team from "./About_Components/Team";
import Footer from "./About_Components/Footer";
import Navbar from "./Navbar";

function App() {
  //Get the button
  // var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  // window.onscroll = function () {
  //   scrollFunction();
  // };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // }

  // When the user clicks on the button, scroll to the top of the document
  // function topFunction() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

  return (
    <div className="about">
      <Navbar />
      <Header />
      <div>
        <Banner1 />
        <Banner2 />
        <Team />
        <Footer />
      </div>
      <button
        className="top-btn"
        // onClick={topFunction}
        id="myBtn"
        title="Go to top"
      >
        Top
      </button>
    </div>
  );
}

export default App;
