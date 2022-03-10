import Image from "next/image";
function ImageGrid({ image1, image2, image3 }) {
  return (
    <div className="imageGrid hidden  lg:flex lg:items-center ">
      <div className="imageGrid__Left w-[223px]">
        <div className="w-[223px]">
          <Image src={image1} />
        </div>
        <div className="w-[283px] -ml-6 ">
          <Image src={image2} />
        </div>
      </div>
      <div className="imageGrid__Right ml-6">
        <div className="mb-8">
          <Image src={image3} />
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
