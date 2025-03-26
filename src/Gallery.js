import React from "react";

import img1 from "./image/ac-repair-1.png";
import img2 from "./image/hand-shake-repair-man-worker.webp";
import img3 from "./image/Home Appliance.jpeg";
import img4 from "./image/washing machine.jpeg";
import img5 from "./image/premium_ph.avif";
import img6 from "./image/premium_photo-.avif";
import img7 from "./image/premium_photo3.avif";
import img8 from "./image/tool.jpeg";

import img9 from "./image/washing_repair.jpeg";
import img10 from "./image/camera.jpeg";
import img11 from "./image/tire.jpeg";
import img12 from "./image/cartoon.jpeg";
import img13 from "./image/caroil.jpeg";
import img14 from "./image/car.jpeg";
import img15 from "./image/kit1.jpeg";
import img16 from "./image/laptop.jpeg";

const firstSetImages = [
  { src: img1, caption: "AC Repair Service" },
  { src: img2, caption: "Happy Customer" },
  { src: img3, caption: "Home Appliance Repair" },
  { src: img4, caption: "Washing Machine Service" },
  { src: img5, caption: "Premium Tools" },
  { src: img6, caption: "High-Quality Equipment" },
  { src: img7, caption: "Reliable Repair Services" },
  { src: img8, caption: "Professional Toolkit" },
];

const secondSetImages = [
  { src: img9, caption: "Washing Machine Fix" },
  { src: img10, caption: "Camera Repair" },
  { src: img11, caption: "Tire Maintenance" },
  { src: img12, caption: "Cartoon Illustration" },
  { src: img13, caption: "Car Oil Change" },
  { src: img14, caption: "Car Service & Repair" },
  { src: img15, caption: "Kitchen Appliance Fix" },
  { src: img16, caption: "Laptop Repair Service" },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>

  
      <div className="gallery-grid">
        {firstSetImages.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.src} alt={`Gallery item ${index + 1}`} />
            <p>{item.caption}</p>
          </div>
        ))}
      </div>

    
      <div className="video-section">
        <h2>Repair & Maintenance Videos</h2>
        <div className="video-grid">
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/arOO_z5XF74" 
              title="AC Repair Video"
              allowFullScreen
            ></iframe>
            <p>Watch our experts repair AC units efficiently.</p>
          </div>
          <div className="video-container">
          <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube-nocookie.com/embed/XItQYVpb4Xs?si=5cPHofu-40yZ_bKO&amp;start=16" 
          title="Washing Machine Repair Video" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          ></iframe>

            <p>Step-by-step guide to washing machine maintenance.</p>
          </div>
        </div>
      </div>

      <div className="gallery-grid">
        {secondSetImages.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.src} alt={`Gallery item ${index + 9}`} />
            <p>{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
