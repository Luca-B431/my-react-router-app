import HomeCard from "./homecard";
import data from "../assets/data.json";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 rounded-xl gap-8 my-8 m-4 md:mx-24 overflow-scroll h-[512px] w-100%">
      {data.map((item) => (
        <HomeCard key={item.id} picture={item.pictures[0]} title={item.title} />
      ))}
    </div>
  );
}
