import Image from "next/image";

import starIcon from "../static/images/Star.png";
function ProductCard(data) {
  const { image, tag, name, star, price } = data.data;
  return (
    <div className="productCard">
      <Image src={image} />
      <div className="productCard__Details">
        <p>{tag}</p>
        <h4>{name}</h4>

        <div className="stars">
          {[...Array(star)].map((e, i) => (
            <Image src={starIcon} />
          ))}
        </div>

        <div className="productCard__Cart">
          <h4>
            <span>$</span>
            {price}
          </h4>

          <div className="cart"> +</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
