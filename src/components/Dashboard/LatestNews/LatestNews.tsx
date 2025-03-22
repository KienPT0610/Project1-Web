import { Button, Card, Col, Row } from "antd"
import unsplash1 from '@/assets/images/unsplash1.png';
import unsplash2 from '@/assets/images/unsplash2.png';
import unsplash3 from '@/assets/images/unsplash3.png';

import Image from 'next/image';
import { FaRegCalendarMinus, FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineArrowRight, AiOutlineComment } from "react-icons/ai";

function LatestNews() {
  return (
    <div className="bg-gray-50 w-full flex justify-center items-center">
      <Row className="mt-8 w-[1200px] mb-8" gutter={[32, 32]}>
        <Col xl={24} className="flex justify-center items-center">
          <h2 className="font-bold text-xl">Latest News</h2>
        </Col>
        <Col xl={8} className="flex justify-center items-center">
          <Card
            hoverable
            className="w-full"
            cover={
              <div className="p-6 pb-0 rounded-sm">
                <Image src={unsplash1} alt={`img`} className="object-contain" />
              </div>
            }
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                  <FaRegCircleUser className="text-orange-500" />
                  <span className="text-[#475156]">Kristin</span>
                </div>
                <div className="flex gap-2 items-center">
                  <FaRegCalendarMinus className="text-orange-500" />
                  <span className="text-[#475156]">19Dec, 2013</span>
                </div>
                <div className="flex gap-2 items-center">
                  <AiOutlineComment className="text-orange-500" />
                  <span className="text-[#475156]">453</span>
                </div>
              </div>
              <h3 className="text-gray-900 font-bold">Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h3>
              <p className="text-gray-500">Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
              <div className="mt-4">
                <Button iconPosition="end" icon={<AiOutlineArrowRight />} className="border-orange-500 border-2 uppercase text-orange-500">READ MORE</Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl={8} className="flex justify-center items-center">
          <Card
            hoverable
            className="w-full"
            cover={
              <div className="p-6 pb-0 rounded-sm">
                <Image src={unsplash2} alt={`img`} className="object-contain" />
              </div>
            }
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                  <FaRegCircleUser className="text-orange-500" />
                  <span className="text-[#475156]">Robert</span>
                </div>
                <div className="flex gap-2 items-center">
                  <FaRegCalendarMinus className="text-orange-500" />
                  <span className="text-[#475156]">28 Nov, 2015</span>
                </div>
                <div className="flex gap-2 items-center">
                  <AiOutlineComment className="text-orange-500" />
                  <span className="text-[#475156]">738</span>
                </div>
              </div>
              <h3 className="text-gray-900 font-bold">Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.</h3>
              <p className="text-gray-500">Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. </p>
              <div className="mt-4">
                <Button iconPosition="end" icon={<AiOutlineArrowRight />} className="border-orange-500 border-2 uppercase text-orange-500">READ MORE</Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl={8} className="flex justify-center items-center">
          <Card
            hoverable
            className="w-full"
            cover={
              <div className="p-6 pb-0 rounded-sm">
                <Image src={unsplash3} alt={`img`} className="object-contain" />
              </div>
            }
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                  <FaRegCircleUser className="text-orange-500" />
                  <span className="text-[#475156]">Arlene</span>
                </div>
                <div className="flex gap-2 items-center">
                  <FaRegCalendarMinus className="text-orange-500" />
                  <span className="text-[#475156]">9 May, 2014</span>
                </div>
                <div className="flex gap-2 items-center">
                  <AiOutlineComment className="text-orange-500" />
                  <span className="text-[#475156]">826</span>
                </div>
              </div>
              <h3 className="text-gray-900 font-bold">Curabitur massa orci, consectetur et blandit ac, auctor et tellus.</h3>
              <p className="text-gray-500">Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.</p>
              <div className="mt-4">
                <Button iconPosition="end" icon={<AiOutlineArrowRight />} className="border-orange-500 border-2 uppercase text-orange-500">READ MORE</Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LatestNews