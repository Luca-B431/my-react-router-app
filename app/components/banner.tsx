export default function Banner({ url, text }: { url: string; text: string }) {
  return (
    <div
      className="relative shadow flex flex-col justify-center items-center rounded-4xl bg-cover bg-center mx-4 md:mx-24 h-24 w-full"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="absolute rounded-4xl inset-0 bg-black/40"></div>
      <h1 className="absolute text-l font-bold text-white">{text}</h1>
    </div>
  );
}
