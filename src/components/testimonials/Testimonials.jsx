import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const testimonialData = [
  {
    avatar: AVTR1,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    avatar: AVTR2,
    name: "Jane Doe",
    review:
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper eleifend.",
  },
  {
    avatar: AVTR3,
    name: "John Smith",
    review:
      "Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi fringilla. Donec non enim vel risus cursus tincidunt.",
  },
  {
    avatar: AVTR4,
    name: "Alice Johnson",
    review:
      "Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What My Clients Say</h5>
      <h2>Testimonials</h2>

      <div className="testimonials__container">
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="testimonial__avatar">
              <img src={testimonial.avatar} alt={testimonial.name} />
            </div>
            <div className="testimonial__content">
              <h5 className="testimonial__name">{testimonial.name}</h5>
              <p className="testimonial__review">{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
