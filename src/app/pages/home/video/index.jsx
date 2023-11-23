export default function Video() {
  return (
    <div className="bg-primary-black flex justify-center my-[-1px]">
      <iframe
        src="https://www.youtube.com/embed/_vRXSncIUoQ"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-11/12 h-[40vh] lg:h-[70vh] xl:h-[90vh] py-6 rounded-lg "
      ></iframe>
    </div>
  );
}
