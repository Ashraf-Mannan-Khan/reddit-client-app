import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllReddits,
  fetchPostByKeyword,
  redditData,
  loading,
} from "./allRedditsSlice";
import styles from "./allReddit.module.css";
import { searchQuery } from "../searchReddit/searchTermSlice";
import { Card } from "../../component/Card/Card";
import { fetchPostByQuery } from "./allRedditsSlice";
import { keyword } from "../../component/side-menu/keywordSlice/keywordSlice";
import { SkeletonLoader } from "../../helper function/loader";
export function LoadAllRedditsPost({ light }) {
  const allRedditsPost = useSelector(redditData);
  const dispatch = useDispatch();
  const searchTerm = useSelector(searchQuery);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm !== "") {
        dispatch(fetchPostByQuery(searchTerm));
      } else {
        dispatch(fetchAllReddits());
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, dispatch]);

  const loadingishappening = useSelector(loading);
  const { isLoadingAll, isLoadingSearch, isLoadingKeyword } = loadingishappening;
  console.log(isLoadingAll);

  return (
    <>
      <div
        className={` ${styles.card_div} ${light ? styles.dark : styles.light}`}
      >
        {isLoadingAll || isLoadingSearch || isLoadingKeyword ? (
          <>
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
             <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </>
        ) : (
          allRedditsPost.map((child) => (
            <Card
              key={child.data.id}
              subreddit={child.data.subreddit_name_prefixed}
              timestamp={child.data.created}
              title={child.data.title}
              src={child.data.secure_media?.reddit_video?.fallback_url}
              audio={child.data.media?.reddit_video?.has_audio}
              UpVote={child.data.ups}
              comment={child.data.num_comments}
              id={child.data.id}
              is_video={child.data.is_video}
              url={child.data.url}
              child={child.data}
              selftext={child.data.selftext}
              thumbnail={child.data.thumbnail}
              light={light}
            />
          ))
        )}
      </div>
    </>
  );
}
