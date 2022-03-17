import Link from "next/link";
import Image from "next/image";
import miss from "../static/images/Twitter.png";
function FooterLink({ title, data, icon }) {
  return (
    <div className="flex-[0.5]">
      <ul className="">
        <li className="mb-5 text-yellow">{title}</li>
        {data.map(({ name, link, image }) => (
          <Link href={link}>
            <li className="mb-4">
              {icon && (
                <span>
                  <Image src={image} />{" "}
                </span>
              )}
              {name}
              {console.log(image)}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default FooterLink;
