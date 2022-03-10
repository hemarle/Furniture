import Link from "next/link";
import Image from "next/image";
import arrowIcon from "../static/images/Arrow.png";
function Descriptor({ header, title, about, link }) {
  return (
    <div className="descriptor p-3">
      <h4 className="text-yellow mb-5"> {header}</h4>
      <h2 className="capitalize text-[22px] mb-5 md:text-[42px]"> {title}</h2>
      <p className="mb-6"> {about}</p>
      <Link href={link}>
        <div className="flex items-center ">
          <h5 className=" mr-2">More Info</h5>

          <Image src={arrowIcon} />
        </div>
      </Link>
    </div>
  );
}

export default Descriptor;
