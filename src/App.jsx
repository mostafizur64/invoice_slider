import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Scrollbar } from "swiper/modules";
import FirstSlider from "./Slider/FirstSlider";
import SecondSlider from "./Slider/SecondSlider";
import ThirdSlider from "./Slider/ThirdSlider";
import Modal from "react-modal"; // Import react-modal

// Import images
import firstImg from '../src/assets/img/img1.png';
import secondImg from '../src/assets/img/img2.png';
import thirdImg from '../src/assets/img/img3.png';
import fourImg from '../src/assets/img/img4.jpg'
import FourSlider from "./Slider/FourSlider";

// Ensure react-modal is accessible to screen readers
Modal.setAppElement("#root");

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(1);

  const handleSlideClick = (index) => {
    setSelectedSlide(index);
    setModalOpen(false);
  };

  const renderSelectedComponent = () => {
    switch (selectedSlide) {
      case 1:
        return <FirstSlider />;
      case 2:
        return <SecondSlider />;
      case 3:
        return <ThirdSlider />;
      case 4:
        return <FourSlider />;
      default:
        return null;
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    if (!modalOpen) {
      setSelectedSlide(null);
    }
  };

  // Custom styles for the modal
  const modalStyles = {
    content: {
      height: "60%", // Set your desired height
      width: "60%",  // Set your desired width
      margin: "auto", // Center the modal
    },
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-8">
        <div className="bg-green-300 rounded-lg p-4">
          <button onClick={openModal} className="flex items-center justify-center w-full mt-4 bg-red-300 rounded-lg p-4 text-">
            Invoice Style
          </button>
        </div>
        <div className="border rounded-lg p-4">
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Swiper Modal"
            style={modalStyles} // Apply custom styles
          >
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Scrollbar]}
              className="mySwiper"
            >
              {[firstImg, secondImg, thirdImg,fourImg].map((imgSrc, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => handleSlideClick(index + 1)}
                  className={selectedSlide === index + 1 ? "active-slide" : ""}
                >
                  <img
                    className="w-full rounded-lg h-[400px]"
                    src={imgSrc}
                    alt={`Slide ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button onClick={closeModal}>Close Modal</button>
          </Modal>
          {selectedSlide !== null && (
            <div>
              {renderSelectedComponent()}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
