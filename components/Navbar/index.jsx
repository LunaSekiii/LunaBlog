import React, { useRef, useState, useEffect, useImperativeHandle } from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const [navbarState, setnavbarState] = useState(
    styles.navbar + " " + styles.notTop
  );

  const searchRef = useRef();

  useImperativeHandle(props.showHandle, () => {
    return (s) => {
      setNavbar(s);
    };
  });

  useEffect(() => {
    //导航栏动画
    setTimeout(setNavbar(true), 1500);
    return () => {};
  }, []);
  function setNavbar(s) {
    //导航栏控制(有状态)
    if (s) setnavbarState(styles.navbar);
    else setnavbarState(styles.navbar + " " + styles.notTop);
  }
  function navbarSwitch() {
    //导航栏开关(无状态)
    setnavbarState((pre) => {
      return pre == styles.navbar
        ? styles.navbar + " " + styles.notTop
        : styles.navbar;
    });
  }
  return (
    <div className=" max-h-0 w-full z-50 top-1 sticky ">
      <span className="  block pt-5 p-10">
        <div
          className={`${navbarState} rounded-2xl navbar bg-base-100 opacity-80`}
        >
          <div className="flex-1">
            <a
              className="btn btn-ghost normal-case text-xl"
              onClick={navbarSwitch}
            >
              myBlog
            </a>
          </div>
          <div className="flex-none gap-2 ">
            <div className="form-control">
              <input
                type="text"
                ref={searchRef}
                onChange={(e) => {
                  console.log(searchRef.current.value);
                }}
                placeholder="Search"
                className="input input-bordered hidden sm:block "
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="http://106.52.86.38:1337/uploads/f3d3572c11dfa9ec7743765b75d0f703918fc109_3e9235d24e.jpg?updated_at=2022-11-11T00:56:23.922Z" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-30"
              >
                <li>
                  <a className="justify-between">
                    Github
                    {/* <span className="badge">code</span> */}
                  </a>
                </li>
                <li>
                  <a>Weibo</a>
                </li>
                <li>
                  <a>Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Navbar;
