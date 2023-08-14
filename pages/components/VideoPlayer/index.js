import styles from './VideoPlayer.module.scss'

const VideoPlayer = ({ videoId }) => {
  return (
    <div className={styles.divRound}  style={{ width: '100%', height: '293px' }}>
      <iframe
        className={styles.iframeRound}
        allow="autoplay; encrypted-media; fullscreen"
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&autoplay=0`}
      ></iframe>
    </div>
  )
}

export default VideoPlayer
