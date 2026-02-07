
import { ThumbsUp, ThumbsDown, MessageCircle, Ellipsis } from "lucide-react";
import { CiShare2 } from "react-icons/ci";
import "./loader.css";
function Skeleton({ width = "100%", height = "16px", radius = "8px" }) {
  return (
    <div
      className="skeleton avatar line short"
      style={{ width, height, borderRadius: radius }}
    />
  );
}

export function SkeletonLoader() {
  return (
    <>
      <div className="container" style={{ }}>
        <div className="flex">
          <div className="text_avatar">
          <Skeleton width="48px" height="48px" radius="50%" />
          <div className="text">
            <Skeleton />
            <Skeleton width="60%" />
          </div>
        </div>
        <div className="btn_dots">
           <Skeleton width="50px" height="20px" radius="20px" />
          <Ellipsis  color="white"/>
        </div>
        </div>
        <div className="title">
           <Skeleton width="90%" />
        </div>
       <div className="image_container">
        <Skeleton width="50%" height="auto" radius="0"/>
       </div>
        <div className="btns_divs">
          <Skeleton width="30%" height="40px" radius="20px"/>
          <Skeleton width="30%" height="40px" radius="20px"/>
          <Skeleton width="30%" height="40px" radius="20px"/>
        </div>
      </div>
    </>
  );
}
