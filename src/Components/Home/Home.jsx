import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2, // عرض شريحتين في الشاشات المتوسطة
          spacing: 10,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3, // عرض 3 شرائح في الشاشات الكبيرة
          spacing: 20,
        },
      },
    },
  });

  // التحكم بالأزرار
  const handlePrev = () => slider.current?.prev();
  const handleNext = () => slider.current?.next();

  return (
    <div className="container mx-auto p-4 relative">
      {/* <h1 className="bg-slate-400 dark:text-rose-600">Welcome</h1> */}

      {/* Slider Section */}
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide bg-blue-500 text-white flex items-center justify-center h-40 md:h-64 rounded-lg">
          Slide 1
        </div>
        <div className="keen-slider__slide bg-red-500 text-white flex items-center justify-center h-40 md:h-64 rounded-lg">
          Slide 2
        </div>
        <div className="keen-slider__slide bg-green-500 text-white flex items-center justify-center h-40 md:h-64 rounded-lg">
          Slide 3
        </div>
        <div className="keen-slider__slide bg-yellow-500 text-white flex items-center justify-center h-40 md:h-64 rounded-lg">
          Slide 4
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-200"
      >
      <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-200"
      >
   <i class="fa-solid fa-arrow-right"></i>
      </button>

      {/* Button Section */}
      <button className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
        Button
      </button>
    </div>
  );
}
