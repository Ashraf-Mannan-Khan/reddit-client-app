
import styles from './videoImage.module.css';
export const PostMedia = ({ post }) => {
  const video = post.media?.reddit_video;

  const isImage =
    post.url &&
    /\.(jpg|jpeg|png|webp)$/i.test(post.url);

  return (
    <div className={styles.post}>

     

      {/* VIDEO */}
      {video && (
        <video
          src={video.fallback_url}
          controls
          muted={!video.has_audio}
          playsInline
          style={{ width:'100%' ,height:"100%"}}
        />
      )}

      {/* IMAGE */}
      {!video && isImage && (
        <img
          src={post.url}
          alt={post.title}
          loading="lazy"
          style={{ width: "100%", height: "100%"}}
        />
      )}

    </div>
  );
};
