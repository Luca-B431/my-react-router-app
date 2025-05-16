export default function Banner() {
  return (
    <div
      className="relative shadow-[0px_4px_4px_0px_#00000040] flex flex-col justify-center rounded-4xl
     items-center bg-[url('./assets/banner_picture.png')] bg-cover bg-center mx-4 md:mx-24 h-24 w-100%"
    >
      <div className="absolute rounded-4xl inset-0 bg-black/40"></div>
      <h1 className="absolute text-l font-bold text-white">
        Chez vous, partout et ailleurs
      </h1>
    </div>
  );
}
