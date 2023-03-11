import React, { useState } from "react";
import "../css/Testimonials.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      text: "This is an amazing product! I highly recommend it.",
      author: "John Doe",
      stars: (
        <div>
          <i>
            <StarIcon />
          </i>
          <i>
            <StarIcon />
          </i>
          <i>
            <StarIcon />
          </i>
          <i>
            <StarIcon />
          </i>
          <i>
            <StarIcon />
          </i>
        </div>
      ),
    },
    {
      text: "I've never been happier with a purchase. This is a must-have!",
      author: "Jane Smith",
      stars: (
        <div>
          <i>
            <StarIcon />
          </i>
          <i>
            <StarIcon />
          </i>
          <i>
            <StarIcon />
          </i>
          <i>
            <StarIcon />
          </i>
          <i>
            <StarHalfIcon />
          </i>
        </div>
      ),
    },
    {
      text: "I've been using this for a while now and it's been a game changer.",
      author: "Bob Johnson",
      stars: (
        <div>
          <i>
            <StarIcon />
          </i>
          <i>
            <StarIcon />
          </i>
          <i>
            <StarIcon />
          </i>
          <i>
            <StarIcon />
          </i>
          <i>
            <StarHalfIcon />
          </i>
        </div>
      ),
    },
  ]);

  return (
    <>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#686b83"
            fill-opacity="1"
            d="M0,96L40,85.3C80,75,160,53,240,85.3C320,117,400,203,480,208C560,213,640,139,720,117.3C800,96,880,128,960,160C1040,192,1120,224,1200,224C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div id="Testimonials">
        <div className="testimonials-header">
          <h1>don't believe us?</h1>
          <h3>Our products are loved by users worldwide</h3>
        </div>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-box">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="stars">{testimonial.stars}</div>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,96L40,85.3C80,75,160,53,240,85.3C320,117,400,203,480,208C560,213,640,139,720,117.3C800,96,880,128,960,160C1040,192,1120,224,1200,224C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Testimonials;
