import { Col, Flex } from "antd";
import Image from "next/image";
import logo from "@/assets/images/logo.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="bg-gray-900">
        <Flex
          className="mx-auto py-8 max-w-[1200px]"
          justify="center"
          align="middle"
          wrap={false}
        >
          <Col className="flex flex-col items-center px-4">
            <div className="flex items-center gap-4">
              <Image
                src={logo}
                alt="logo"
                className="w-[50px] h-auto rounded-full"
              />
              <span className="font-bold text-lg text-white">Shop App</span>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-gray-300">Customer Supports:</span>
                <span className="font-bold text-white">(629) 555-0129</span>
              </div>
              <span className="text-gray-300">
                4517 Washington Ave. Manchester, Kentucky 39495
              </span>
              <span className="text-white">info@kinbo.com</span>
            </div>
          </Col>

          <Col
            className="flex flex-col items-center px-4"
            style={{ marginLeft: "20px" }}
          >
            <span className="uppercase text-md text-white mb-5">
              Top Category
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-gray-300">Computer & Laptop</span>
              <span className="text-gray-300">SmartPhone</span>
              <span className="text-gray-300">Headphone</span>
            </div>
            <div className="mt-4 flex gap-2 cursor-pointer items-center justify-center">
              <span className="text-yellow-400">Browse All Product</span>
              <AiOutlineArrowRight className="text-yellow-400" />
            </div>
          </Col>

          <Col
            className="flex flex-col items-center px-4"
            style={{ marginLeft: "20px" }}
          >
            <span className="uppercase text-md text-white mb-5">
              Quick Links
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-gray-300">Shop Product</span>
              <span className="text-gray-300">Shopping Cart</span>
              <span className="text-gray-300">Wishlist</span>
              <span className="text-gray-300">Compare</span>
              <span className="text-gray-300">Track Order</span>
              <span className="text-gray-300">Customer Help</span>
              <span className="text-gray-300">About Us</span>
            </div>
          </Col>

          <Col
            className="flex flex-col items-center px-4"
            style={{ marginLeft: "20px" }}
          >
            <span className="uppercase text-md text-white mb-5">
              Download APP
            </span>
            <div className="flex gap-4 mt-4 flex-col">
              <div className="flex items-center w-[130px] gap-4 bg-gray-800 text-white p-2 rounded-sm">
                <FaGooglePlay className="text-xl" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-100">Get it now</span>
                  <h3 className="text-md">Google Play</h3>
                </div>
              </div>
              <div className="flex items-center w-[130px] gap-4 bg-gray-800 text-white p-2 rounded-sm">
                <FaApple className="text-xl" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-100">Get it now</span>
                  <h3 className="text-md">App Store</h3>
                </div>
              </div>
            </div>
          </Col>
        </Flex>

        <div className="border-t-[1px] border-gray-50 w-full"></div>
        <div className="py-4 flex justify-center">
          <span className="font-bold text-md text-white">
            Shop App - All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
