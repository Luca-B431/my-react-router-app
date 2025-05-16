export default function HomeCard({
  picture,
  title,
}: {
  picture: string;
  title: string;
}) {
  return (
    <div
      className="relative flex flex-col justify-end h-86 w-100% bg-cover rounded-xl"
      style={{ backgroundImage: `url(${picture})` }}
    >
      <h1 className="text-white text-[18px] m-2">{title}</h1>
    </div>
  );
}
