import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { REVIEWS, REVIEW_SLIDER_SETTINGS } from "../../data/homeData";

function ReviewsSection() {
  return (
    <div className="reviews-section py-5" data-aos="fade-up">
      <Container>
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <Slider {...REVIEW_SLIDER_SETTINGS}>
          {REVIEWS.map((review) => (
            <div className="review-card" key={review.name}>
              <p>"{review.text}"</p>
              <h5>- {review.name}</h5>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default ReviewsSection;
