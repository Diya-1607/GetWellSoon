import { useState } from "react";
import "./App.css";
import Slider from "react-slick";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
// import song from "./assets/background-music.mp3";
import countOnMe from './assets/CountOnMe.mp3';


function App() {
  const images = [img1, img2, img3, img4, img5];
  const [isPlaying, setIsPlaying] = useState(true);

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

  const toggleMusic = () => {
    const audio = document.getElementById("bg-music");
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex flex-col items-center p-4 sm:p-6 overflow-hidden">

      {/* Music */}
      <audio id="bg-music" src={countOnMe} autoPlay loop />
      <button
        onClick={toggleMusic}
        className="fixed top-5 right-5 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg hover:scale-105 transition transform text-sm font-semibold z-50"
      >
        {isPlaying ? "🔇 Mute" : "🔊 Play"}
      </button>

      {/* Heading */}
    <h1
  className="text-center text-3xl sm:text-5xl font-extrabold text-pink-600 drop-shadow-2xl bounce mb-2 tracking-wide px-4"
  style={{ fontFamily: "'Pacifico', cursive" }}
>
  🌸 Get Well Soon <span className="text-purple-500">Sangyaaaa</span> 🌸
</h1>


      {/* Subheading */}
      <p className="mt-1 text-center text-sm sm:text-base text-gray-700 max-w-xl leading-relaxed fade-in-up px-2">
        Wishing you a speedy recovery, endless laughter, and the warmest hugs! 🐻🌼💫
        <span className="block mt-1 font-semibold text-pink-800">(A bai bass kar 😜)</span>
      </p>

      {/* Funny subtitle */}
      <p className="mt-4 text-center text-base sm:text-lg text-gray-800 font-medium bg-white/50 px-5 py-2 rounded-full shadow-md slide-up">
        Presenting you a collection of all your worst pictures 🤭📸
      </p>

      {/* Slider */}
      <div className="mt-5 w-full max-w-3xl bg-white/30 backdrop-blur-lg p-2 shadow-2xl rounded-2xl overflow-hidden zoom-in">
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className="px-2">
              <img
                src={src}
                alt={`Sangya ${i + 1}`}
                className="rounded-2xl shadow-lg object-cover w-full h-[350px] sm:h-[450px] transition-transform duration-500 hover:scale-105 hover:brightness-110"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Sticker container */}
      <div className="mt-3 flex flex-wrap justify-center gap-3 sm:gap-5">
        <img
          src="https://i.pinimg.com/736x/2b/15/64/2b1564c342e74eeb43eaf8124f08a702.jpg"
          alt="Sticker1"
          className="w-20 sm:w-28 custom-wiggle"
        />
        <img
          src="https://i.pinimg.com/1200x/f7/b6/e6/f7b6e65fa791015837b7768211487a90.jpg"
          alt="Sticker2"
          className="w-16 sm:w-24 custom-wiggle-delay"
        />
        <img
          src="https://i.pinimg.com/736x/71/6b/f6/716bf6af243f2013fee655829cf72c15.jpg"
          alt="Sticker3"
          className="w-20 sm:w-28 custom-wiggle"
        />
        <img
          src="https://i.pinimg.com/736x/7d/a5/f5/7da5f5177db45a8ab21b58b864499567.jpg"
          alt="Sticker4"
          className="w-20 sm:w-28 custom-wiggle-delay"
        />
        <img
          src="https://i.pinimg.com/1200x/01/e5/84/01e58467a6d014edab1accf8fbe4c4c7.jpg"
          alt="Sticker5"
          className="w-20 sm:w-28 custom-wiggle"
        />
        <img
          src="https://i.pinimg.com/736x/98/1b/d7/981bd7e8a83760c02678ad3d9f929b85.jpg"
          alt="Sticker6"
          className="w-20 sm:w-28 custom-wiggle-delay"
        />
      </div>

      {/* Closing message */}
      <p className="mt-8 text-center text-base sm:text-lg italic text-gray-700 bg-white/60 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg fade-in-up max-w-xl">
        "Rest, heal, and come back stronger — we’re all rooting for you! 💪🌸"
      </p>
    </div>
  );
}

export default App;
