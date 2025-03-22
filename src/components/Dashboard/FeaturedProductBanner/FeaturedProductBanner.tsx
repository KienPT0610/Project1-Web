import { Button, Col, Row } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import macbook from "@/assets/images/macbook.png";

function FeaturedProductBanner() {
  return (
    <>
      <Row className="min-w-[1200px] mt-12 mb-12 mx-auto flex justify-between bg-[#F7E0CF]" gutter={[30, 30]}>
        <Col xl={8} className="flex justify-center items-center py-12">
          <div className="flex flex-col gap-3 ml-10">
            <div className="flex items-center justify-center w-[150px] bg-[#2DA5F3] font-[600] text-white h-[30px] rounded-sm text-xs">
              <span>SAVE UP TO $200.00</span>
            </div>
            <h2 className="font-[600] text-4xl">Macbook Pro</h2>
            <p className="text-lg">Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</p>
            <div>
              <Button className="bg-orange-500 text-white mt-4 rounded-sm" size="middle" icon={<FaArrowRight />} iconPosition='end'>SHOP NOW</Button>
            </div>
          </div>
        </Col>
        <Col xl={12} className="flex justify-end mr-8">
          <div className="relative py-2">
            <Image src={macbook} alt='macbook' className="w-[350px] h-auto object-contain" />
            <div className="border-4 border-white bg-[#FFCEAD] w-[80px] h-[80px] rounded-full justify-center items-center flex absolute top-5 left-0 mr-10">
              <span className="font-bold">$1999</span>
            </div>
          </div>
        </Col>
      </Row >
    </>
  )
}

export default FeaturedProductBanner;