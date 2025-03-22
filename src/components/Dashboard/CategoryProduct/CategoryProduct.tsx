import { Col, Row } from "antd";
import Image from "next/image";
import wireless from "@/assets/images/wireless.png";
import bp from "@/assets/images/bp.png";
import phonesam from "@/assets/images/phonesam.png";
import tv from "@/assets/images/tv.png";
import flycam from "@/assets/images/flycam.png";
import loablue from "@/assets/images/loablue.png";
import tozo from "@/assets/images/tozo.png";
import printer from "@/assets/images/printer.png";
import controller from "@/assets/images/controller.png";
import cam from "@/assets/images/cam.png";
import sony from "@/assets/images/sony.png";
import controller1 from "@/assets/images/controller1.png";

function CategoryProduct() {
  return (
    <>
      <Row className="max-w-[1200px] w-[1200px] mb-12" gutter={20}>
        <Col xl={6}>
          <div>
            <span className="font-[600]">FLASH SALE TODAY</span>
          </div>
          <Col xl={24} className="flex items-center my-4 border-2 border-gray-100 px-2 py-2">
            <Row gutter={4}>
              <Col xl={8}>
                <Image src={wireless} alt='wireless' className="w-[80px] h-[80px] object-contain" />
              </Col>
              <Col xl={16} className="flex flex-col gap-2">
                <h3 className="w-full line-clamp-2">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Lorem</h3>
                <span className="text-blue-400 font-[600]">$1,500</span>
              </Col>
            </Row>
          </Col>
          <Col xl={24} className="flex items-center my-4 border-2 border-gray-100 px-2 py-2 gap-4">
            <Row gutter={4}>
              <Col xl={8}>
                <Image src={phonesam} alt='wireless' className="w-[80px] h-[80px] object-contain" />
              </Col>
              <Col xl={16} className="flex flex-col gap-2">
                <h3 className="w-full line-clamp-2">Simple Mobile 4G LTE Prepaid Smartphone</h3>
                <span className="text-blue-400 font-[600]">$1,500</span>
              </Col>
            </Row>
          </Col>
          <Col xl={24} className="flex items-center my-4 border-2 border-gray-100 px-2 py-2 gap-4">
            <Row gutter={4}>
              <Col xl={8}>
                <Image src={bp} alt='wireless' className="w-[80px] h-[80px] object-contain" />
              </Col>
              <Col xl={16} className="flex flex-col gap-2">
                <h3 className="w-full line-clamp-2">4K UHD LED Smart TV with Chromecast Built-in</h3>
                <span className="text-blue-400 font-[600]">$1,500</span>
              </Col>
            </Row>
          </Col>
        </Col>
        <Col xl={6}>
          <div>
            <span className="font-[600]">BEST SELLERS</span>
          </div>
          <Col xl={24} className="flex items-center my-4 border-2 border-gray-100 px-2 py-2">
            <Row gutter={4}>
              <Col xl={8}>
                <Image src={controller1} alt='wireless' className="w-[80px] h-[80px] object-contain" />
              </Col>
              <Col xl={16} className="flex flex-col gap-2">
                <h3 className="w-full line-clamp-2">Samsung Electronics Samsung Galexy S21 5G</h3>
                <span className="text-blue-400 font-[600]">$1,500</span>
              </Col>
            </Row>
          </Col>
          <Col xl={24} className="flex items-center my-4 border-2 border-gray-100 px-2 py-2 gap-4">
            <Row gutter={4}>
              <Col xl={8}>
                <Image src={cam} alt='wireless' className="w-[80px] h-[80px] object-contain" />
              </Col>
              <Col xl={16} className="flex flex-col gap-2">
                <h3 className="w-full line-clamp-2">Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone</h3>
                <span className="text-blue-400 font-[600]">$1,500</span>
              </Col>
            </Row>
          </Col>
          <Col xl={24} className="flex items-center my-4 border-2 border-gray-100 px-2 py-2 gap-4">
            <Row gutter={4}>
              <Col xl={8}>
                <Image src={sony} alt='wireless' className="w-[80px] h-[80px] object-contain" />
              </Col>
              <Col xl={16} className="flex flex-col gap-2">
                <h3 className="w-full line-clamp-2">Sony DSCHX8 High Zoom Point & Shoot Camera</h3>
                <span className="text-blue-400 font-[600]">$1,500</span>
              </Col>
            </Row>
          </Col>
        </Col>
        <Col xl={6}>
          <div>
            <span className="font-[600]">TOP RATED</span>
          </div>
          <Col xl={24} className="flex items-center my-4 border-2 border-gray-100 px-2 py-2">
            <Row gutter={4}>
              <Col xl={8}>
                <Image src={tv} alt='wireless' className="w-[80px] h-[80px] object-contain" />
              </Col>
              <Col xl={16} className="flex flex-col gap-2">
                <h3 className="w-full line-clamp-2">Portable Wshing Machine, 11lbs capacity Model 18NMF</h3>
                <span className="text-blue-400 font-[600]">$1,500</span>
              </Col>
            </Row>
          </Col>
          <Col xl={24} className="flex items-center my-4 border-2 border-gray-100 px-2 py-2 gap-4">
            <Row gutter={4}>
              <Col xl={8}>
                <Image src={flycam} alt='wireless' className="w-[80px] h-[80px] object-contain" />
              </Col>
              <Col xl={16} className="flex flex-col gap-2">
                <h3 className="w-full line-clamp-2">Sony DSCHX8 High Zoom Point & Shoot Camera</h3>
                <span className="text-blue-400 font-[600]">$1,500</span>
              </Col>
            </Row>
          </Col>
          <Col xl={24} className="flex items-center my-4 border-2 border-gray-100 px-2 py-2 gap-4">
            <Row gutter={4}>
              <Col xl={8}>
                <Image src={loablue} alt='wireless' className="w-[80px] h-[80px] object-contain" />
              </Col>
              <Col xl={16} className="flex flex-col gap-2">
                <h3 className="w-full line-clamp-2">Dell Optiplex 7000x7480 All-in-One Computer Monitor</h3>
                <span className="text-blue-400 font-[600]">$1,500</span>
              </Col>
            </Row>
          </Col>
        </Col>
        <Col xl={6}>
          <div>
            <span className="font-[600]">NEW ARRIVAL</span>
          </div>
          <Col xl={24} className="flex items-center my-4 border-2 border-gray-100 px-2 py-2">
            <Row gutter={4}>
              <Col xl={8}>
                <Image src={tozo} alt='wireless' className="w-[80px] h-[80px] object-contain" />
              </Col>
              <Col xl={16} className="flex flex-col gap-2">
                <h3 className="w-full line-clamp-2">TOZO T6 True Wireless Earbuds Bluetooth Headpho...</h3>
                <span className="text-blue-400 font-[600]">$1,500</span>
              </Col>
            </Row>
          </Col>
          <Col xl={24} className="flex items-center my-4 border-2 border-gray-100 px-2 py-2 gap-4">
            <Row gutter={4}>
              <Col xl={8}>
                <Image src={printer} alt='wireless' className="w-[80px] h-[80px] object-contain" />
              </Col>
              <Col xl={16} className="flex flex-col gap-2">
                <h3 className="w-full line-clamp-2">JBL FLIP 4 - Waterproof Portable Bluetooth Speaker</h3>
                <span className="text-blue-400 font-[600]">$1,500</span>
              </Col>
            </Row>
          </Col>
          <Col xl={24} className="flex items-center my-4 border-2 border-gray-100 px-2 py-2 gap-4">
            <Row gutter={4}>
              <Col xl={8}>
                <Image src={controller} alt='wireless' className="w-[80px] h-[80px] object-contain" />
              </Col>
              <Col xl={16} className="flex flex-col gap-2">
                <h3 className="w-full line-clamp-2">Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor</h3>
                <span className="text-blue-400 font-[600]">$1,500</span>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default CategoryProduct;