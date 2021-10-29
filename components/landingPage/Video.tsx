function Video() {
  return (
    <video width={500} height={500} autoPlay loop muted>
      <source src="landing/sky.mp4" />
    </video>
  );
}

export default Video;
