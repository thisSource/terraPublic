function Video(props:string) {
  return (
    <video width={600} height={700} autoPlay loop muted>
      <source src={props} />
    </video>
  );
}

export default Video;
