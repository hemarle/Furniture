import Link from "next/link";
function AboutCard(data) {
  const { title, about, link } = data.data;

  return (
    <div className="aboutCard">
      <h4 className="aboutCard__Title">{title}</h4>
      <p>{about}</p>
      <Link href={link}> More Info </Link>
    </div>
  );
}

export default AboutCard;
