import { Col, Row } from "antd";
import { BiCreditCard, BiCube, BiSupport, BiTrophy } from "react-icons/bi";

function BottomBanner() {
  return (
    <>
      <Row className="px-6 py-4 border-2 border-gray-40 rounded-md mt-4 max-w-[1200px]">
        <Col xl={6} className="flex items-center gap-4 justify-center border-r-[1px] border-[#E4E7E9]">
          <div>
            <BiCube className="text-3xl" />
          </div>
          <div>
            <h3 className="text-[16px] uppercase">Fasted Delivery</h3>
            <span className="text-gray-400 text-sm">Delivery in 24/H</span>
          </div>
        </Col>
        <Col xl={6} className="flex items-center gap-4 justify-center border-r-[1px] border-[#E4E7E9]">
          <div>
            <BiTrophy className="text-3xl" />
          </div>
          <div>
            <h3 className="text-[16px] uppercase">24 Hours Return</h3>
            <span className="text-gray-400 text-sm">100% money-back guarantee</span>
          </div>
        </Col>
        <Col xl={6} className="flex items-center gap-4 justify-center border-r-[1px] border-[#E4E7E9]">
          <div>
            <BiCreditCard className="text-3xl" />
          </div>
          <div>
            <h3 className="text-[16px] uppercase">Secure Payment</h3>
            <span className="text-gray-400 text-sm">Your money is safe</span>
          </div>
        </Col>
        <Col xl={6} className="flex items-center gap-4 justify-center">
          <div>
            <BiSupport className="text-3xl" />
          </div>
          <div>
            <h3 className="text-[16px] uppercase">Support 24/7</h3>
            <span className="text-gray-400 text-sm">Live contact/message</span>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default BottomBanner;