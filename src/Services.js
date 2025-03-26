import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Fridge from "../src/image/Fridge_r.jpg";
import Microwave from "../src/image/MICROWAVE_R.jpg";
import Washing from "../src/image/washing_m.jpg";
import Chimney from "../src/image/Kitchen_Chimney.jpg";
import servise_main from "../src/image/Servise_main.png";
import img1 from "../src/image/img1.png";
import img2 from "../src/image/img2.png";
import img3 from "../src/image/img3.png";
import img4 from "../src/image/img4.png";
import img6 from "../src/image/img6.png";
import img5 from "../src/image/img5.png";
import img7 from "../src/image/img7.png";
import img8 from "../src/image/img8.png";
import img9 from "../src/image/img9.png";
import img10 from "../src/image/img10.png";
import img11 from "../src/image/img11.png";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {[ 
          { img: Fridge, title: "FRIDGE REPAIR", desc: "Reviving your fridge one fix at a time." },
          { img: Microwave, title: "MICROWAVE REPAIR", desc: "Efficient microwave solutions at your service." },
          { img: Washing, title: "WASHING MACHINE REPAIR", desc: "Get your washing machine running like new!" },
          { img: Chimney, title: "CHIMNEY REPAIR", desc: "Keeping your kitchen fresh and smoke-free." }
        ].map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-slide">
              <img src={service.img} alt={service.title} className="service-image" />
              <h1 className="service-title">{service.title}</h1>
              <p className="service-description">{service.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Contact Section */}
      <div className="contact-container">
        <h2 className="contact-heading">Get in Touch</h2>
        <div className="contact-items">
          {[ 
            { img: Chimney, text: "Chimney Repair" },
            { img: Fridge, text: "Fridge Repair" },
            { img: Washing, text: "Washing Machine Repair" }
          ].map((item, index) => (
            <div className="contact-item" key={index}>
              <img src={item.img} alt={item.text} className="contact-image" />
              <p className="contact-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-container">
  <img src={servise_main} alt="Service Main" className="hero-image" />
  <div className="hero-content">
    <h1>Quick Appliances Repair</h1>
    <p>
      Welcome to S.K Enterprises, where expertise meets excellence in appliance repair!
      <br /><br />
      A malfunctioning microwave can disrupt your daily routine, but don’t worry—we’ve got you covered! Our highly skilled professionals are always ready to provide fast, reliable, and efficient repairs right at your doorstep.
      <br /><br />
      At Quick Appliances Repair, we take pride in delivering top-notch service with a 100% satisfaction guarantee. We don’t just fix appliances—we bring back your convenience and peace of mind!
      <br /><br />
      🔧 <strong>Expert Technicians</strong> | ⚡ <strong>Reliable Repairs</strong> | ✅ <strong>Guaranteed Satisfaction</strong>
    </p>
    <h3 className="hero-contact">📞 1234567890</h3>
  </div>
</div>

  <h2>OUR SERVISE</h2>

  <div className="services-grid">
  {[
    { img: img1, title: "Microwave Repair", contact: "Contact Us" },
    { img: img2, title: "Microwave Not Heating", contact: "Contact Us" },
    { img: img3, title: "Microwave Button Not Working", contact: "Call Us" },
    { img: img4, title: "No Display Showing in Microwave", contact: "Call Us" },
    { img: img5, title: "Microwave Plate Not Rotating", contact: "Call Us" },
    { img: img6, title: "Spark Inside Microwave", contact: "Call Us" },
    { img: img7, title: "AC Repair", contact: "Call Us" },
    { img: img8, title: "Chimney Repair", contact: "Call Us" },
    { img: img9, title: "Mixer Grinder Repair", contact: "Call Us" },
    { img: img10, title: "Refrigerator Repair", contact: "Call Us" },
    { img: img11, title: "Washing Machine Repair", contact: "Call Us" },
  ].map((service, index) => (
    <div className="service-item" key={index}>
      <img src={service.img} alt={service.title} />
      <h2>{service.title}</h2>
      <h3>{service.contact}</h3>
    </div>
  ))}
</div>
<h1>Brand We Repair</h1>
<div className="brand-container">
<b>✓ LG</b>
<b>✓ Bajaj</b>
<b>✓ Gilma</b>
<b>✓ Hindware</b>
<b>✓ Pigeon</b>
<b>✓ Butterfly</b>
<b>✓ Inalsa</b>
<b>✓ Whirlpool</b>
<b>✓ Fabiano</b>
<b>✓ prestige</b>
<b>✓ iBELL</b>
<b>✓ Kaff</b>
<b>✓ Elica</b>
<b>✓ Cantee</b>
<b>✓ Glen</b>
<b>✓ Cata</b>
<b>✓ Faber</b>
<b>✓ Sunflame</b>
<b>✓ Lifelong</b>
<b>✓ Sunblaze</b>
</div>
<h2>Why Choose Us</h2>

<div className="service-features">
      <div>
        <h3>Expertise and Experience</h3>
        <p>
          At S.K Enterprises, our team of skilled professionals brings extensive
          experience and expertise in microwave repair. We stay updated with
          the latest technologies to ensure your appliance is repaired
          efficiently and effectively.
        </p>
      </div>
      <div>
        <h3>Customer Satisfaction Guaranteed</h3>
        <p>
          Your satisfaction is our top priority. We provide a 100% job
          satisfaction guarantee, ensuring that our repair services meet your
          expectations and restore all your electronic appliances to their
          optimal performance.
        </p>
      </div>
      <div>
        <h3>Prompt and Reliable Service</h3>
        <p>
          We value your time and strive to provide prompt and reliable repair
          services. Our technicians arrive at your doorstep at the scheduled
          time, ready to diagnose and fix issues with all your electronic
          appliances swiftly.
        </p>
      </div>
      <div>
        <h3>Advanced Technology and Tools</h3>
        <p>
          We use state-of-the-art technology and tools to secure and protect
          your electronic appliances during repairs. Our advanced methods ensure
          precise and long-lasting solutions for all your devices.
        </p>
      </div>
      <div>
        <h3>Transparent Pricing</h3>
        <p>
          We offer transparent and competitive pricing with no hidden charges.
          You can trust us to provide fair and honest quotes for the repair of
          all your electronic appliances.
        </p>
      </div>
      <div>
        <h3>Local and Convenient</h3>
        <p>
          Based in Maharashtra, we are your local electronic appliance repair
          specialists, making it easy and convenient for you to access our
          services. We are just a call away, ready to assist with all your
          appliance repair needs.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Services;
