import React, { createRef, useEffect } from "react";
import Markdown from "../components/Markdown/Markdown";
import Navbar from "../components/Navbar";
import styles from "../styles/home.module.css";

const Home = () => {
  let navSwitch = createRef();

  let handleScroll = (e) => {
    const isFireFox = navigator.userAgent.indexOf("FireFox") != -1;
    if (isFireFox) {
      if (e.detail < 0) navSwitch.current(false);
      else throttle(navSwitch.current, 600)(true);
    } else {
      if (e.wheelDelta < 0) navSwitch.current(false);
      else throttle(navSwitch.current, 600)(true);
    }
  };

  useEffect(() => {
    const isFireFox = navigator.userAgent.indexOf("FireFox") != -1;
    const mousewheel = isFireFox ? "DOMMouseScroll" : "mousewheel";
    window.addEventListener(mousewheel, handleScroll);
    return () => {
      window.removeEventListener(mousewheel, handleScroll);
    };
  }, []);

  function throttle(fn, wait) {
    let timer = null;
    return function () {
      let context = this;
      let args = arguments;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          fn.apply(context, args);
        }, wait);
      }
    };
  }

  return (
    <div>
      <Navbar showHandle={navSwitch} />
      <div className={`${styles.main}`}>
        <section className=" z-0 hero h-screen bg-home-img text-primary">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="h-auto text-5xl font-bold">我的新博客</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">进入</button>
            </div>
          </div>
        </section>
        <section className=" z-1 h-screen">
          
        </section>
        <section className=" z-2 h-screen">2</section>
      </div>
    </div>
  );
};

export default Home;
