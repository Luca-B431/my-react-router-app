import type { Route } from "./+types/home";

export function loader() {
  return { name: "Kasa About" };
}

export default function About({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex-col justify-center items-center h-100% bg-white">
      {/* a remplir  */}
    </div>
  );
}
