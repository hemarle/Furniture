import ProductCard from "./ProductCard";

function Product({ title, options, data }) {
  return (
    <div className="product">
      <h2> {title}</h2>

      <ul className="product__Options">
        {options.map((option) => (
          <li className="product__Option"> {option}</li>
        ))}
      </ul>

      {data.map((option) => (
        <ProductCard data={option} />
      ))}
    </div>
  );
}

export default Product;
