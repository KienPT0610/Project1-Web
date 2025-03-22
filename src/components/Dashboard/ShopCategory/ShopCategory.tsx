import { Col, Row } from "antd";
import '@/assets/css/style.css';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import laptop from '@/assets/images/laptop.png';
import phone from '@/assets/images/phone.png';
import headphone from '@/assets/images/headphone.png';
import camera from '@/assets/images/camera.png';
import tv from '@/assets/images/tv.png';
import bp from '@/assets/images/bp.png';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function ShopCategory() {
  return (
    <>
      <Row className="mt-8 max-w-[1200px] shop-category">
        <Col xl={24} className="flex justify-center items-center mb-4">
          <h2 className="font-bold text-xl">Shop with Categorys</h2>
        </Col>
        <Col xl={24}>
          <button className="custom-prev absolute left-[-18px] top-1/2 transform -translate-y-1/2 z-10 bg-orange-500 text-white px-4 py-2 rounded-full w-[50px] h-[50px]">
            <div className="flex justify-center items-center text-xl">
              <AiOutlineArrowLeft />
            </div>
          </button>
          <button className="custom-next absolute right-[-18px] top-1/2 transform -translate-y-1/2 z-10 bg-orange-500 text-white px-4 py-2 rounded-full w-[50px] h-[50px]">
            <div className="flex justify-center items-center text-xl">
              <AiOutlineArrowRight />
            </div>
          </button>
          <Swiper
            spaceBetween={30}
            slidesPerView={6}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="border-2 border-[#E4E7E9] w-[160px] h-[160px] py-2 px-2 rounded-md flex justify-center flex-col items-center">
                <div className="flex justify-center items-center h-[100px]">
                  <Image src={laptop} alt={`img`} className="w-[90px] h-auto" />
                </div>
                <span>Computer & Laptop</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-[#E4E7E9] w-[160px] h-[160px] py-2 px-2 rounded-md flex justify-center flex-col items-center">
                <div className="flex justify-center items-center h-[100px]">
                  <Image src={phone} alt={`img`} className="w-[90px] h-auto" />
                </div>
                <span>SmartPhone</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-[#E4E7E9] w-[160px] h-[160px] py-2 px-2 rounded-md flex justify-center flex-col items-center">
                <div className="flex justify-center items-center h-[100px]">
                  <Image src={headphone} alt={`img`} className="w-[90px] h-auto" />
                </div>
                <span>Headphones</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-[#E4E7E9] w-[160px] h-[160px] py-2 px-2 rounded-md flex justify-center flex-col items-center">
                <div className="flex justify-center items-center h-[100px]">
                  <Image src={bp} alt={`img`} className="w-[90px] h-auto" />
                </div>
                <span>Accessories</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-[#E4E7E9] w-[160px] h-[160px] py-2 px-2 rounded-md flex justify-center flex-col items-center">
                <div className="flex justify-center items-center h-[100px]">
                  <Image src={camera} alt={`img`} className="w-[90px] h-auto" />
                </div>
                <span>Camera & Photo</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-[#E4E7E9] w-[160px] h-[160px] py-2 px-2 rounded-md flex justify-center flex-col items-center">
                <div className="flex justify-center items-center h-[100px]">
                  <Image src={tv} alt={`img`} className="w-[90px] h-auto" />
                </div>
                <span>TV & Homes</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-[#E4E7E9] w-[160px] h-[160px] py-2 px-2 rounded-md flex justify-center flex-col items-center">
                <div className="flex justify-center items-center h-[100px]">
                  <Image src={phone} alt={`img`} className="w-[90px] h-auto" />
                </div>
                <span>SmartPhone</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row >
    </>
  )
}

export default ShopCategory;
