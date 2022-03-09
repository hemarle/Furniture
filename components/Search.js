import Image from "next/image";
function Search({ placeholder, icon }) {
  return (
    <div>
      <form action="">
        <input type="text" placeholder={placeholder} />
        <Image src={icon} />
      </form>
    </div>
  );
}

export default Search;
