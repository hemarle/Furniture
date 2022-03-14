import TestimonialCard from "./TestimonialCard";

function Testimonial({ data }) {
  return (
    <div className="testimonial text-center ">
      <h4 className="text-yellow"> Testimonial</h4>

      <h2> Our Client Reviews</h2>

      <div className="testimonial__Cards">
        {" "}
        {data.map((option) => (
          <TestimonialCard data={option} />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
