import Image from "next/image";
function Search({ placeholder, icon }) {
  return (
    <div className="search">
      <form
        action=""
        className="search__Form p-2 h-[46px] flex justify-center align-center bg-white  opacity-60 text-black rounded-[42px]"
      >
        <input
          type="text"
          placeholder={placeholder}
          className=" mr-2 px-2 outline-0 border-none w-60"
        />
        <Image src={icon} />
      </form>
    </div>
  );
}

export default Search;
