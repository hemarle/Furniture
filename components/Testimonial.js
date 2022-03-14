import TestimonialCard from "./TestimonialCard";

function Testimonial({ data }) {
  return (
    <div className="testimonial text-center my-[214px] ">
      <h4 className="text-yellow"> Testimonial</h4>

      <h2 className="mb-[60px] mt-5"> Our Client Reviews</h2>

      <div className="testimonial__Cards flex flex-wrap justify-around">
        {" "}
        {data.map((option) => (
          <TestimonialCard data={option} />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
