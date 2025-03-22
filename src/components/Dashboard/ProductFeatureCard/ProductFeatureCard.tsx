import { Button, Col, Row } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import loa from '@/assets/images/loa.png'
import Image from "next/image";
import xiaomi from '@/assets/images/xiaomi.png'

function ProductFeatureCard() {
  return (
    <>
      <Row className="max-w-[1200px] mt-12 mb-12 mx-auto flex justify-between " gutter={[30, 30]}>
        <Col xl={12}>
          <div className="bg-[#F2F4F5] h-[280px] flex justify-between py-8 items-center">
            <Col xl={12}>
              <div className="flex flex-col gap-3 ml-6">
                <div className="flex items-center justify-center w-[150px] bg-[#2DA5F3] font-[600] text-white h-[30px] rounded-sm text-xs">
                  <span>INTRODUCING</span> 
                </div>
                <h2 className="font-[600] text-2xl">New Apple Homepod Mini</h2>
                <p className="text-xs">Jam-packed with innovation, HomePod mini delivers unexpectedly.</p>
                <div>
                  <Button className="bg-orange-500 text-white mt-4 rounded-sm" size="middle" icon={<FaArrowRight />} iconPosition='end'>SHOP NOW</Button>
                </div>
              </div>
            </Col>
            <Col xl={12}>
              <div className="px-4">
                <Image src={loa} alt='Loa' className="w-[350px] h-auto object-contain" />
              </div>
            </Col>
          </div>
        </Col>
        <Col xl={12}>
          <div className="bg-gray-900 h-[280px] text-white py-8 flex">
            <Col xl={12}>
              <div className="flex flex-col gap-3 ml-6">
                <div className="flex items-center justify-center w-[150px] bg-[#EFD33D] text-black font-[600] h-[30px] rounded-sm text-xs">
                  <span>INTRODUCING NEW</span>
                </div>
                <h2 className="font-[600] text-2xl">Xiaomi Mi 11 Ultra 12GB+256GB</h2>
                <p className="text-xs">Data provided by internal laboratories. Industry measurment.</p>
                <div>
                  <Button className="bg-orange-500 text-white mt-4 rounded-sm" size="middle" icon={<FaArrowRight />} iconPosition='end'>SHOP NOW</Button>
                </div>
              </div>
            </Col>
            <Col xl={12}>
              <div className="flex flex-col gap-3 ml-6">
                <Image src={xiaomi} alt='xiaomi' className="w-[250px] h-auto object-contain absolute bottom-[-32px] right-2" />
                <div className="bg-[#2DA5F3] w-[70px] h-[70px] rounded-full justify-center items-center flex absolute top-[-20px] right-[-25px] mr-10">
                  <span className="font-bold">$590</span>
                </div>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ProductFeatureCard;