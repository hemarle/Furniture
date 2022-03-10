import Image from "next/image";

import furnitureImage from "../static/images/Furniture.png";
import Descriptor from "./Descriptor";

function Experience() {
  return (
    <div className="experience mt-20 lg:flex md:items-center">
      <div className="experience__Left md:flex-[0.5] ">
        <div className="mx-auto block md:w-[100vw] lg:w-[100%]">
          <Image src={furnitureImage} />
        </div>
      </div>

      <div className="experience__Right md:flex-[0.5] md:ml-4">
        <Descriptor
          header="Experiences"
          title="we provide you the best experience"
          about="You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials"
          link="/"
        />
      </div>
    </div>
  );
}

export default Experience;
