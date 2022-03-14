import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Material from "../components/Material";
import Product from "../components/Product";
import Testimonial from "../components/Testimonial";

import SearchIcon from "../static/images/Search-icon.png";

import { options, productData } from "../static/js/product";
import testimonialData from "../static/js/testimonial";
export default function Home() {
  const aboutData = [
    {
      title: "Luxury facilities",
      about:
        "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
      link: "/faci",
    },
    {
      title: "Affordable Price",
      about:
        "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
      link: "/faci",
    },
    {
      title: "Many Choices",
      about:
        "We provide many unique work space choices so that you can choose the workspace to your liking.",
      link: "/faci",
    },
  ];
  return (
    <div className="">
      <Hero
        title="Make your interior more
minimalistic & modern"
        about="Turn your room with panto into a lot more minimalist and modern with ease and speed"
        placeholder="Search furniture"
        icon={SearchIcon}
      />

      <About title="Why Choosing Us" data={aboutData} />

      <Product
        title="Best Selling Product"
        options={options}
        data={productData}
      />

      <Experience />
      <Material />

      <Testimonial data={testimonialData} />
    </div>
  );
}
