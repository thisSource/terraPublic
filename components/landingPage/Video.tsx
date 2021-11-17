function Video() {
  return (
    <video width={600} height={600} autoPlay loop muted>
      <source src="landing/sky.mp4" />
    </video>
  );
}

export default Video;
