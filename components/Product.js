import ProductCard from "./ProductCard";

function Product({ title, options, data }) {
  return (
    <div className="product bg-light-grey pb-6">
      <h2 className="pt-12 mb-8 text-center font-bold "> {title}</h2>

      <ul className="product__Options px-4 mb-10 flex justify-center items-center rounded-[44px] bg-deep-grey w-max mx-auto h-[57px]">
        {options.map((option) => (
          <li className="product__Option pl-6 w-[85px] "> {option}</li>
        ))}
      </ul>
      <div className="product__Cards flex flex-wrap justify-around m-3 ">
        {data.map((option) => (
          <ProductCard data={option} />
        ))}
      </div>
    </div>
  );
}

export default Product;
