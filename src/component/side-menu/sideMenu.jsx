import {
  Menu,
  House,
  CircleArrowOutUpRight,
  Shapes,
  ArrowUpAZ,
} from "lucide-react";
import styles from "./sideMenu.module.css";
import { setSearchTerm } from "../../features/searchReddit/searchTermSlice";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
import { setKeyword, keyword } from "./keywordSlice/keywordSlice";
import { fetchPostByKeyword } from "../../features/allReddits/allRedditsSlice";
import { fetchAllReddits } from "../../features/allReddits/allRedditsSlice";
export function SideMenu(props) {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const keywords = useSelector(keyword);

  return (
    <>
      <div
        className={`${styles.sideMenu_container} ${click ? styles.onClick : styles.offClick} ${props.show ? styles.show : styles.hide} ${props.light ? styles.dark : styles.light} ${props.light ? styles.light_overlay : styles.dark_overlay}`}
      >
        <div
          className={`${styles.side_menu_btn_container} ${props.light ? styles.darkbtn : ""}`}
          onClick={() => setClick(!click)}
        >
          {" "}
          <Menu className={styles.side_menu_btn} />
        </div>
        <div
          className={`${styles.sideMenu_content} ${props.light ? styles.dark_content : styles.light_content}`}
        >
          <ul className={styles.list}>
            <li
              className={styles.list_item}
              onClick={() => {
                dispatch(setKeyword("home"));
                dispatch(fetchPostByKeyword(keywords));
              }}
            >
              <House />
              <p>Home</p>
            </li>
            <li
              className={styles.list_item}
              onClick={() => {
                dispatch(setKeyword("popular"));
                dispatch(fetchPostByKeyword(keywords));
              }}
            >
              <CircleArrowOutUpRight />
              <p>Popular</p>
            </li>
            <li
              className={styles.list_item}
                onClick={() => {
                dispatch(setKeyword("new"));
                dispatch(fetchPostByKeyword(keywords));
              }}
            >
              <Shapes />
              <p>Explore</p>
            </li>
            <li
              className={styles.list_item}
                onClick={() => {
                dispatch(setKeyword("all"));
                dispatch(fetchPostByKeyword(keywords));
              }}
            >
              <ArrowUpAZ />
              <p>All</p>
            </li>
          </ul>
          <div className={styles.details_summary}>
            <details className={styles.details} open>
              <summary className={styles.summary}>Topic</summary>
              <p
                className={styles.items}
                 onClick={() => {
                dispatch(setKeyword("games"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Games
              </p>
              <p
                className={styles.items}
                  onClick={() => {
                dispatch(setKeyword("question and answers"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Q&As
              </p>
              <p
                className={styles.items}
                 onClick={() => {
                dispatch(setKeyword("pop"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Pop Culture
              </p>
              <p
                className={styles.items}
                  onClick={() => {
                dispatch(setKeyword("movies"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Movies & TV
              </p>
              <p
                className={styles.items}
                  onClick={() => {
                dispatch(setKeyword("technology"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Technology
              </p>
              <p
                className={styles.items}
                  onClick={() => {
                dispatch(setKeyword("anime"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Anime
              </p>
              <p
                className={styles.items}
                  onClick={() => {
                dispatch(setKeyword("arts"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Arts
              </p>
              <p
                className={styles.items}
                  onClick={() => {
                dispatch(setKeyword("buisness"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Buisness
              </p>
              <p
                className={styles.items}
                  onClick={() => {
                dispatch(setKeyword("food and drink"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Food & Drink
              </p>
              <p
                className={styles.items}
                  onClick={() => {
                dispatch(setKeyword("music"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Music
              </p>
              <p
                className={styles.items}
                 onClick={() => {
                dispatch(setKeyword("news"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                News & Politics
              </p>
              <p
                className={styles.items}
                  onClick={() => {
                dispatch(setKeyword("popular"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Home & Garden
              </p>
              <p
                className={styles.items}
                  onClick={() => {
                dispatch(setKeyword("popular"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Science
              </p>
              <p
                className={styles.items}
                  onClick={() => {
                dispatch(setKeyword("popular"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Vehicles
              </p>
              <p
                className={styles.items}
                  onClick={() => {
                dispatch(setKeyword("popular"));
                dispatch(fetchPostByKeyword(keywords));
              }}
              >
                Wellnes
              </p>
            </details>
          </div>

          <div className={styles.details_summary_two}>
            <details className={styles.details} open>
              <summary className={styles.summary}>Resources</summary>
              <p className={styles.items}>About Reddit</p>
              <p className={styles.items}>Advertise</p>
              <p className={styles.items}>Help</p>
              <p className={styles.items}>Blog</p>
              <p className={styles.items}>Careers</p>
              <p className={styles.items}>Press</p>

              <hr />
              <p className={styles.items}>Communitties</p>
              <p className={styles.items}>Buisness</p>
              <p className={styles.items}>Best of Reddit</p>
              <p className={styles.items}>Music</p>
              <p className={styles.items}>Topics</p>
              <hr />
              <p className={styles.items}>Reddit Rules</p>
              <p className={styles.items}>Science</p>
              <p className={styles.items}>Privacy Policy</p>
              <p className={styles.items}>User Agreement</p>
            </details>
          </div>
          <footer>
            <p>
              AshReddit,Inc.@2025. <br />
              All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
