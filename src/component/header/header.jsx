import styles from "./header.module.css";
import { Menu } from "lucide-react";
import logo from "./image1.jpeg";
import { Search, Moon, Sun } from "lucide-react";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { LogIn } from "lucide-react";
import { SideMenu } from "../side-menu/sideMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  searchQuery,
  removeSearchTerm,
} from "../../features/searchReddit/searchTermSlice";

export function Header({ show, setShow, light, setLight }) {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector(searchQuery);
 
  function searchTermSetter(e) {
    dispatch(setSearchTerm(e.target.value));
  }
  return (
    <>
      <header  className={`${styles.header_phone} ${light ? styles.dark : styles.light}`} >
        <Menu className={styles.menu_icon} onClick={() => setShow(!show)} />
        <div className={styles.input_wrapper}>
          <Search className={styles.search_icon} />
          <input
            type="search"
            className={styles.searchbar}
            placeholder="Find Anything"
            id="searchbar"
            value={searchTerm}
            onChange={searchTermSetter}
          />
        </div>

        <button className={styles.login_btn}>
          <LogIn />
        </button>
        <div className={styles.btn_wrapper}>
          <button
            onClick={() => {
              setClick(!click);
              setLight(!light);
            }}
            className={`${styles.moon_and_sun_btn} ${click ? styles.clicked : ""}`}
          >
            {click ? (
              <div className={styles.div_moon}>
                <Moon className={styles.moon} />
              </div>
            ) : (
              <div className={styles.div_sun}>
                <Sun className={styles.sun} />
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Desktop Navigation */}
      <header
        className={`${styles.header_desktop} ${light ? styles.dark : styles.light}`}
      >
        <h1 className={styles.logo}>ashreddit</h1>
        <div className={styles.input_wrapper}>
          <Search className={styles.search_icon} />

          <input
            type="search"
            className={styles.searchbar}
            placeholder="Find Anything"
            id="searchbar"
            value={searchTerm}
            onChange={searchTermSetter}
          />
          <X
            className={styles.closeBtn}
            onClick={() => dispatch(removeSearchTerm())}
          />
        </div>

        <div className={styles.btn_and_img}>
          <button className={styles.login_btn}>
            <LogIn />
            <p>Log In</p>
          </button>
          <div className={styles.btn_wrapper}>
            <button
              onClick={() => {
                setClick(!click);
                setLight(!light);
              }}
              className={`${styles.moon_and_sun_btn} ${click ? styles.clicked : ""}`}
            >
              {click ? (
                <div className={styles.div_moon}>
                  <Moon className={styles.moon} />
                </div>
              ) : (
                <div className={styles.div_sun}>
                  <Sun className={styles.sun} />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
