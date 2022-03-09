import Hero from "../components/Hero";

import SearchIcon from "../static/images/Search-icon.png";

export default function Home() {
  return (
    <div className="">
      <Hero
        title="Make your interior more
minimalistic & modern"
        about="Turn your room with panto into a lot more minimalist and modern with ease and speed"
        placeholder="Search furniture"
        icon={SearchIcon}
      />
    </div>
  );
}
