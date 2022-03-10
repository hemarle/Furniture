import Link from "next/link";
import Image from "next/image";
import arrowIcon from "../static/images/Arrow.png";
function AboutCard(data) {
  const { title, about, link } = data.data;

  return (
    <div className="aboutCard flex flex-col items-center justify-center py-6 max-w-xs mx-auto">
      <h4 className="aboutCard__Title mb-5 text-left w-[100%]">{title}</h4>
      <p className="text-sm  mb-3.5 leading-[185%] min-h-[90px]">{about}</p>
      <Link href={link}>
        <div className="flex item-center">
          More Info
          <span className="ml-3">
            <Image src={arrowIcon} alt="arrow" />{" "}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default AboutCard;
