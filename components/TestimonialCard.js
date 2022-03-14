import Image from "next/image";
import starIcon from "../static/images/Star.png";
function TestimonialCard({ data }) {
  const { image, author, avatar, star, location, testimony } = data;
  console.log(image.src, "image");
  return (
    <div
      className={`testimonialCard relative w-[370px] h-[506px] bg-no-repeat bg-center bg-cover`}
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="testimonialCard__Details absolute bottom-10 left-[50%] -translate-x-2/4  w-[80%] rounded-xl bg-white">
        <div className="avatar absolute -top-10 left-2/4  -translate-x-2/4 border-8 rounded-full border-white w-max">
          <Image src={avatar} />
        </div>
        <h2 className="mt-4"> {author}</h2>
        <h3 className="mt-1.5"> {location}</h3>
        <p className="my-5"> {testimony}</p>
        <div className="stars mb-4">
          {[...Array(star)].map((e, i) => (
            <Image src={starIcon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
