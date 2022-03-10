import Descriptor from "./Descriptor";
import Chair5 from "../static/images/Chair-5.png";
import Chair6 from "../static/images/Chair-6.png";
import Chair7 from "../static/images/Chair-7.png";
import ImageGrid from "./ImageGrid";
function Material() {
  return (
    <div className="material  mt-20 lg:flex md:items-center md:justify-between">
      <div className="material__Left  ml-2 lg:ml-20 lg:max-w-[40%]">
        <Descriptor
          title="Very serious materials for making furniture"
          header="MATERIALS"
          about="Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price"
          link="/"
        />
      </div>

      <div className="material__Right lg: pl-20 ">
        <ImageGrid image1={Chair5} image2={Chair6} image3={Chair7} />
      </div>
    </div>
  );
}

export default Material;
