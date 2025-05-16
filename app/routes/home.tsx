import type { Route } from "./+types/home";
import Banner from "../components/banner";
import Gallery from "~/components/gallery";

export function loader() {
  return { name: "Kasa Home" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex-col justify-center items-center h-full bg-white">
      <Banner
        url={"./app/assets/home_banner.png"}
        text={"Chez vous, partout et ailleurs"}
      />
      <div>
        <Gallery />
      </div>
    </div>
  );
}
