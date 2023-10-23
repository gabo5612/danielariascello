export default function Video() {
  return (
    <div className="bg-primary-black flex justify-center">
      <iframe
        src="https://www.youtube.com/embed/_vRXSncIUoQ"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-11/12 h-64 mt-[-1px] rounded-lg "
      ></iframe>
    </div>
  );
}
