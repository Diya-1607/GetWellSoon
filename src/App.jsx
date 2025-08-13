import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slider from "react-slick";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";

function App() {
  const images = [img1, img2, img3, img4, img5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center p-4 sm:p-6">
      <h1 className="text-3xl sm:text-5xl font-bold text-pink-600 drop-shadow-lg mb-2 animate-bounce text-center">
        💖 Get Well Soon Sangya 💖
      </h1>
      <p className="text-base sm:text-lg text-gray-700 mb-8 text-center max-w-2xl">
        Wishing you a speedy recovery, lots of laughter, and warm hugs! 🐻🌼💫
      </p>

      <div className="w-full max-w-3xl">
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className="px-2">
              <img
                src={src}
                alt={`Sangya ${i + 1}`}
                className="rounded-3xl shadow-xl object-cover w-full h-[400px] sm:h-[500px] transition duration-500 hover:brightness-110"
              />
            </div>
          ))}
        </Slider>
      </div>

      <p className="mt-10 text-gray-600 italic text-center px-4">
        "Rest, heal, and come back stronger — we’re all rooting for you! 💪🌸"
      </p>
    </div>
  );
}

export default App;
