import Image from "next/image";

import starIcon from "../static/images/Star.png";
function ProductCard(data) {
  const { image, tag, name, star, price } = data.data;
  return (
    <div className="productCard w-[270px] mb-4">
      <div className="productCard__Image h-[290px] pb-12 pt-3 before:content-[''] before:w-[100%] before:h-[100%] before:bg-deep-blue">
        <Image src={image} />
      </div>
      <div className="productCard__Details p-3 pl-5 bg-white w-[100%]">
        <p className="mb-1.5 text-sm">{tag}</p>
        <h4 className="mb-1">{name}</h4>

        <div className="stars mb-9">
          {[...Array(star)].map((e, i) => (
            <Image src={starIcon} />
          ))}
        </div>

        <div className="productCard__Cart flex items-center justify-between ">
          <h4>
            <span>$</span>
            {price}
          </h4>

          <button className="cart ">
            <h2 className="text-white bg-deep-blue px-6 py-2 rounded-full text-[32px] pb-3">
              {" "}
              +
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
