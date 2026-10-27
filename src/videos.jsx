function Videos() {
  const videos = [
  "video1.mp4",
  "video2.mp4",
  "video3.mp4",
  "video4.mp4",
  "01 (5).mp4",
  "01 (6).mp4",
  "01 (7).mp4",
  "01 (8).mp4",
  "01 (9).mp4",
  "01 (10).mp4",
  "01 (11).mp4",
];

  return (
    <section className="videos">
      <h2>Our Videos</h2>

      <p className="video-subtitle">
        Watch our latest wedding and cinematic work
      </p>

      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <video
  controls
  preload="metadata"
  src={`/videos/${video}`}
>
  Your browser does not support video.
</video>

            <h3>
              {index === 0
                ? "Wedding Cinematic"
                : index === 1
                ? "Pre Wedding Shoot"
                : index === 2
                ? "Event Highlights"
                : `Video ${index + 1}`}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Videos;