import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./Card-CSS/card.module.css";
import logo from "./image1.jpeg";
import { ThumbsUp, ThumbsDown, MessageCircle, Ellipsis } from "lucide-react";
import { CiShare2 } from "react-icons/ci";
import { PostMedia } from "./videoImage";
import ReactMarkdown from "react-markdown";
import { loading } from "../../features/allReddits/allRedditsSlice";
import { SkeletonLoader } from "../../helper function/loader";


export function Card({
  subreddit,
  timestamp,
  title,
  UpVote,
  comment,
  id,
  thumbnail,
  child,
  selftext,
  light,
}) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [hoverOnLike, setHoverOnLike] = useState(false);
  const [hoverOnDislike, setHoverOnDislike] = useState(false);
  const likeStyle = like ? "#6a5cff " : "white";
  const dislikeStyle = dislike ? "#d93900" : "white";
  const hoverLikeStyle = hoverOnLike ? "#6a5cff " : "black";
  const hoverDislikeStyle = hoverOnDislike ? "#d93900" : "black";
  
 
  let thumbnailUrl = thumbnail?.replaceAll("&amp;", "&");
  if (
    thumbnailUrl === "default" ||
    thumbnailUrl === "self" ||
    thumbnailUrl === ""
  ) {
    thumbnailUrl = logo;
  }


  return (
    <>
    <article
        className={`${styles.card} ${light ? styles.dark : styles.light}`}
        key={id}
      >
        <div className={styles.div_text_and_button}>
          <div className={styles.div_text_timestamp}>
            <div className={styles.div_text}>
              <img src={thumbnailUrl} alt="image" className={styles.logo}></img>
              <h3 className={styles.div_text_h3}>{subreddit}</h3>
            </div>
            <div className={styles.timestamp}>
              <p>{timestamp}</p>
            </div>
          </div>

          <div className={styles.div_button}>
            <button className={styles.btn_join}>Join</button>
            <div className={styles.bubble_btn}>
              <Ellipsis />
            </div>
          </div>
        </div>
        <h2 className={styles.title}> {title}</h2>
        {selftext && (
          <div className={styles.reactmarkdown}>
            <ReactMarkdown>{selftext}</ReactMarkdown>
          </div>
        )}
        <div className={styles.img_container}>
          <PostMedia post={child} />
        </div>

        <div className={styles.div_like_comment_share}>
          <div className={styles.div_like_dislike}>
            <ThumbsUp
              className={styles.upvoteBtn}
              color={hoverLikeStyle}
              fill={likeStyle}
              onMouseEnter={() => setHoverOnLike(!hoverOnLike)}
              onMouseLeave={() => setHoverOnLike(!hoverOnLike)}
              onClick={() => {
                if (like === false && dislike == true) {
                  setDislike(!dislike);
                  setLike(!like);
                }
                setLike(!like);
              }}
            />
            <p>{UpVote}</p>
            <ThumbsDown
              className={styles.downvoteBtn}
              color={hoverDislikeStyle}
              fill={dislikeStyle}
              onMouseEnter={() => setHoverOnDislike(true)}
              onMouseLeave={() => setHoverOnDislike(false)}
              onClick={() => {
                if (like === true && dislike == false) {
                  setDislike(!dislike);
                  setLike(!like);
                }
                setDislike(!dislike);
              }}
            />
          </div>
          <div className={styles.div_comment}>
            <MessageCircle className={styles.commentBtn} />
            <p>{comment}</p>
          </div>
          <div className={styles.div_share}>
            <CiShare2 className={styles.shareBtn} /> <p>Share</p>
          </div>
        </div>
      </article>
    </>
  );
}
