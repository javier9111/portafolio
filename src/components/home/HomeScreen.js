import React from "react";
import perfil from "../../assets/images/perfil.jpg";
import terminalIcon from "../../assets/images/right-arrow.png";
import "./Home.css";
export const HomeScreen = () => {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
  return (
    <section id="home" className="home-container container">
      <div className="picture-container">
        <img src={perfil} alt="" className="profile-picture" />
      </div>
      <div className="sum-prof-container">
        <h1> Hola, Soy Javier Robles</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
          in egestas erat imperdiet sed euismod nisi. Tempus imperdiet nulla
          malesuada pellentesque elit eget. Auctor augue mauris augue neque
          gravida in. A cras semper auctor neque.
        </p>
        <div className="console-container">
          <div className="console-header">
            <span className="console-circle-small red"></span>
            <span className="console-circle-small yellow"></span>
            <span className="console-circle-small green"></span>
          </div>
          <div className="console-text">
            <img src={terminalIcon} className="console-arrow" />
            <a
              href=""
              className="typewrite"
              data-period="2000"
              data-type='[ "Hi, Im Javier.", "I am Creative.", "I Love Coding.", "I Love to learn." ]'
            >
              <span className="wrap"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
