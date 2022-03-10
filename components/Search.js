import Image from "next/image";
function Search({ placeholder, icon }) {
  return (
    <div className="search">
      <form
        action=""
        className="search__Form p-2 h-[46px] flex justify-center align-center bg-white  opacity-60 text-black rounded-[42px] outline-0 "
      >
        <input type="text" placeholder={placeholder} className=" mr-2 px-2" />
        <Image src={icon} />
      </form>
    </div>
  );
}

export default Search;
