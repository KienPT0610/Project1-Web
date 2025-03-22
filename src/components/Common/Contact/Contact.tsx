import { Button, Col, Input, Row } from "antd";
import { BiLogoAmazon, BiLogoFacebookSquare, BiLogoGoogle, BiLogoSpotify } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <div className="bg-[#1B6392] w-full flex justify-center">
        <Row className="max-w-[1200px] py-8 text-white" gutter={[30, 30]}>
          <Col xl={24} className="flex flex-col items-center gap-2">
            <h2 className="font-bold text-xl">Subscribe to our newsletter</h2>
            <p className="max-w-[500px] text-center text-gray-50">Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
          </Col>
          <Col xl={24}>
            <div className="w-[500px] mx-auto">
              <Input size="large" type="email" placeholder="Email address" suffix={<Button className="bg-orange-500 text-white uppercase" size="middle" icon={<FaArrowRight />} iconPosition='end'>Subscribe</Button>
              } />
            </div>
          </Col>
          <Col xl={24} className="flex justify-center">
            <div className="w-[300px] h-[1px] bg-gray-400"></div>
          </Col>
          <Col xl={24} >
            <div className="flex justify-center gap-4 w-[250px] mx-auto">
              <Col xl={6}>
                <BiLogoGoogle size={50} className="text-gray-300" />
              </Col>
              <Col xl={6}>
                <BiLogoAmazon size={50} className="text-gray-300" />
              </Col>
              <Col xl={6}>
                <BiLogoFacebookSquare size={50} className="text-gray-300" />
              </Col>
              <Col xl={6}>
                <BiLogoSpotify size={50} className="text-gray-300" />
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Contact