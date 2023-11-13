import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Scrollbar } from "swiper/modules";
import FirstSlider from "./Slider/FirstSlider";
import SecondSlider from "./Slider/SecondSlider";
import ThirdSlider from "./Slider/ThirdSlider";

// Import images
import firstImg from '../src/assets/img/img1.png';
import secondImg from '../src/assets/img/img2.png';
import thirdImg from '../src/assets/img/img3.png';

function App() {
  const [sliderVisible, setSliderVisible] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);

  const toggleSlider = () => {
    setSliderVisible(!sliderVisible);
  };

  const handleSlideClick = (index) => {
    setSelectedSlide(index);
  };

  const closePreview = () => {
    setSelectedSlide(null);
  };

  const renderSelectedComponent = () => {
    switch (selectedSlide) {
      case 1:
        return <FirstSlider />;
      case 2:
        return <SecondSlider />;
      case 3:
        return <ThirdSlider />;
        
      default:
        return null;
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-8">
        <div className="bg-green-300 rounded-lg p-4">
          {sliderVisible && (
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Scrollbar]}
              className="mySwiper"
            >
              {[firstImg, secondImg, thirdImg].map((imgSrc, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => handleSlideClick(index + 1)}
                  className={selectedSlide === index + 1 ? "active-slide" : ""}
                >
                  <img
                    className="w-full rounded-lg"
                    src={imgSrc}
                    alt={`Slide ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button onClick={toggleSlider} className="flex items-center justify-center w-full mt-4 bg-red-300 rounded-lg p-4 text-">
            invoice style
          </button>
        </div>
        <div className="bg-gray-300 rounded-lg p-4">
          {selectedSlide !== null && (
            <div>
              <button onClick={closePreview}>Close Preview</button>
              {renderSelectedComponent()}
            </div> 
          )}
        </div>
      </div>
    </>
  );
}

export default App;
