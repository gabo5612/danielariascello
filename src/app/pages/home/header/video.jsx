
export default function VideoBG() {
    const video = "/assets/video.mp4";
  return (
    <>
     <video
          autoPlay={true}
          loop
          muted
          className=" w-full h-full object-cover absolute top-0"
        >
          {" "}
        
        <source src={video} type="video/mp4" />
        </video>
    </>
  )
}
