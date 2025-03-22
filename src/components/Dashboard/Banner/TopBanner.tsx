import { Button, Col, Row } from "antd";
import Image from "next/image";

import img from "@/assets/images/Image.png";
import img5 from "@/assets/images/image5.png";
import img4 from "@/assets/images/image4.png";

import { FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function TopBanner() {
  return (
    <>
      <Row className="py-4 flex max-w-[1200px] mx-auto" gutter={[30, 30]}>
        <Col xl={16}>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Col xl={24} className="bg-gray-200 px-8 py-12 rounded-md flex">
                <Col xl={12} className="flex justify-center flex-col">
                  <div className="flex gap-4 flex-col leading-relaxed	">
                    <span className="text-[#2484C2]">
                      THE BEST PLACE TO PLAY
                    </span>
                    <h1 className="text-4xl font-bold">Xbox Consoles</h1>
                    <p className="text-[#475156]">
                      Save up to 50% on select Xbox games. Get 3 months of PC
                      Game Pass for $2 USD.
                    </p>
                  </div>
                  <div>
                    <Button
                      className="bg-orange-500 text-white mt-8"
                      size="large"
                      icon={<FaArrowRight />}
                      iconPosition="end"
                    >
                      SHOP NOW
                    </Button>
                  </div>
                </Col>
                <Col xl={12} className="flex justify-center items-center">
                  <Image
                    src={img}
                    className="object-contain w-auto h-[300px]"
                    alt="img"
                  />
                  <div className="bg-blue-500 w-[90px] h-[90px] rounded-full flex justify-center items-center text-white absolute top-0 right-10 font-bold border-2 border-white">
                    $299
                  </div>
                </Col>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col xl={24} className="bg-gray-200 px-8 py-12 rounded-md flex">
                <Col xl={12} className="flex justify-center flex-col">
                  <div className="flex gap-4 flex-col leading-relaxed	">
                    <span className="text-[#2484C2]">
                      THE BEST PLACE TO PLAY 2
                    </span>
                    <h1 className="text-4xl font-bold">Xbox Consoles</h1>
                    <p className="text-[#475156]">
                      Save up to 50% on select Xbox games. Get 3 months of PC
                      Game Pass for $2 USD.
                    </p>
                  </div>
                  <div>
                    <Button
                      className="bg-orange-500 text-white mt-8"
                      size="large"
                      icon={<FaArrowRight />}
                      iconPosition="end"
                    >
                      SHOP NOW
                    </Button>
                  </div>
                </Col>
                <Col xl={12} className="flex justify-center items-center">
                  <Image
                    src={img}
                    className="object-contain w-auto h-[300px]"
                    alt="img"
                  />
                  <div className="bg-blue-500 w-[90px] h-[90px] rounded-full flex justify-center items-center text-white absolute top-0 right-10 font-bold border-2 border-white">
                    $299
                  </div>
                </Col>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col xl={24} className="bg-gray-200 px-8 py-12 rounded-md flex">
                <Col xl={12} className="flex justify-center flex-col">
                  <div className="flex gap-4 flex-col leading-relaxed	">
                    <span className="text-[#2484C2]">
                      THE BEST PLACE TO PLAY 3
                    </span>
                    <h1 className="text-4xl font-bold">Xbox Consoles</h1>
                    <p className="text-[#475156]">
                      Save up to 50% on select Xbox games. Get 3 months of PC
                      Game Pass for $2 USD.
                    </p>
                  </div>
                  <div>
                    <Button
                      className="bg-orange-500 text-white mt-8"
                      size="large"
                      icon={<FaArrowRight />}
                      iconPosition="end"
                    >
                      SHOP NOW
                    </Button>
                  </div>
                </Col>
                <Col xl={12} className="flex justify-center items-center">
                  <Image
                    src={img}
                    className="object-contain w-auto h-[300px]"
                    alt="img"
                  />
                  <div className="bg-blue-500 w-[90px] h-[90px] rounded-full flex justify-center items-center text-white absolute top-0 right-10 font-bold border-2 border-white">
                    $299
                  </div>
                </Col>
              </Col>
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col xl={8}>
          <Row gutter={[0, 10]}>
            <Col
              xl={24}
              className="bg-[#191C1F] text-white px-8 py-10 rounded-md overflow-hidden"
            >
              <Row>
                <Col xl={12} className="ml-2">
                  <div className="flex gap-1 flex-col leading-relaxed	">
                    <span className="text-yellow-300 uppercase">
                      Summer Sales
                    </span>
                    <h2 className="text-md font-bold">
                      New Google Pixel 6 Pro
                    </h2>
                  </div>
                  <div>
                    <Button
                      className="bg-orange-500 text-white mt-4"
                      size="middle"
                      icon={<FaArrowRight />}
                      iconPosition="end"
                    >
                      SHOP NOW
                    </Button>
                  </div>
                </Col>
              </Row>
              <Image
                src={img5}
                alt="img"
                className="object-contain w-[180px] h-auto absolute bottom-0 right-0"
              />
              <span className="bg-yellow-400 text-black absolute top-4 right-6 px-3 py-2 rounded-md font-bold">
                29% OFF
              </span>
            </Col>
            <Col
              xl={24}
              className="bg-gray-200 text-white px-8 py-7 rounded-md"
            >
              <Row className="text-black">
                <Col xl={12} className="flex justify-center items-center">
                  <Image
                    src={img4}
                    alt="img"
                    className="object-contain w-[100px] h-auto"
                  />
                </Col>
                <Col xl={12}>
                  <div className="flex gap-1 flex-col leading-relaxed	">
                    <h2 className="text-xl font-bold">Xiaomi FlipBuds Pro</h2>
                    <span className="text-blue-500 font-bold">$299 USD</span>
                  </div>
                  <div>
                    <Button
                      className="bg-orange-500 text-white mt-4"
                      size="middle"
                      icon={<FaArrowRight />}
                      iconPosition="end"
                    >
                      SHOP NOW
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default TopBanner;
