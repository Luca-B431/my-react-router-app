import type { Route } from "./+types/home";
import Banner from "../components/banner";
import Gallery from "~/components/gallery";

export function loader() {
  return { name: "Kasa Home" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex-col justify-center items-center h-100% bg-white">
      <Banner />
      <div>
        <Gallery />
      </div>
    </div>
  );
}
