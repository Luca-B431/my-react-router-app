import type { Route } from "./+types/about";
import Banner from "../components/banner";
import AboutDropdown from "../components/about-dropdown";

export function loader() {
  return { name: "Kasa About" };
}

export default function About({ loaderData }: Route.ComponentProps) {
  const texts = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  ];
  return (
    <div className="flex-col justify-center items-center min-h-[2000px] h-full bg-white">
      <Banner url={"/app/assets/about_banner.png"} text={""} />
      <AboutDropdown />
    </div>
  );
}
