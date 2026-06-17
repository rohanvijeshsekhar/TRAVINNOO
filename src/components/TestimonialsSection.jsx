import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialCard({ text, image, name, role }) {
  return (
    <div className="new-testimonial-card">
      <div className="new-testimonial-text">{text}</div>
      <div className="new-testimonial-footer">
        <img
          src={image}
          alt={name}
          className="new-testimonial-avatar"
          loading="lazy"
        />
        <div className="new-testimonial-info">
          <div className="new-testimonial-name">{name}</div>
          <div className="new-testimonial-role">{role}</div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsColumn({ testimonialsList, duration, className = "" }) {
  return (
    <div className={`new-testimonials-col ${className}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="new-testimonials-col-track"
      >
        {/* Render 2 sets for seamless loop */}
        {[0, 1].map((setIndex) => (
          <React.Fragment key={setIndex}>
            {testimonialsList.map((item, idx) => (
              <TestimonialCard key={`set-${setIndex}-${idx}`} {...item} />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="new-testimonials-section" id="insights">
      <div className="new-testimonials-container">
        {/* Intro Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="new-testimonials-header"
        >
          <div className="new-testimonials-pill-wrapper">
            <div className="new-testimonials-pill">Testimonials</div>
          </div>

          <h2 className="new-testimonials-title">
            What our users say
          </h2>
          <p className="new-testimonials-subtitle">
            See what our customers have to say about us.
          </p>
        </motion.div>

        {/* 3-Column Viewport with top/bottom fade */}
        <div className="new-testimonials-viewport">
          <TestimonialsColumn testimonialsList={firstColumn} duration={15} />
          <TestimonialsColumn testimonialsList={secondColumn} className="hidden-tablet" duration={19} />
          <TestimonialsColumn testimonialsList={thirdColumn} className="hidden-desktop" duration={17} />
        </div>
      </div>
    </section>
  );
}
