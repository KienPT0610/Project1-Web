'use client'

import { Button, Col, Rate, Row, Tabs } from "antd"
import { FaArrowRight } from "react-icons/fa6"
import Image from "next/image"
import bannerFeature from '@/assets/images/bannerFeature.jpg'
import type { TabsProps } from 'antd';
import { AiOutlineArrowRight } from "react-icons/ai"
import { BsCart2, BsEye } from "react-icons/bs"
import { useState } from "react"
import DrawerPopup from "./DrawerPopup"
import { TProductData } from "@/types/product.types"
import tozot6 from '@/assets/images/tozot6.png'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'All Product',
  },
  {
    key: '2',
    label: 'Smart Phone',
  },
  {
    key: '3',
    label: 'Laptop',
  },
  {
    key: '4',
    label: 'Headphone',
  },
  {
    key: '5',
    label: 'TV',
  }
];

const data = [
  {
    id: 1,
    name: 'TOZO T6 True Wireless Earbuds Bluetooth Headphon...',
    price: 70,
    image: "1",
    hot: true,
    star: 5,
    comment: 753
  },
  {
    id: 2,
    name: 'Samsung Electronics Samsung Galexy S21 5G',
    price: 2300,
    image: "1",
    star: 5,
    comment: 536
  },
  {
    id: 3,
    name: 'Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6',
    price: 360,
    image: "1",
    best_seller: true,
    star: 5,
    comment: 423
  },
  {
    id: 4,
    name: 'Portable Wshing Machine, 11lbs capacity Model 18NMF',
    price: 80,
    image: "1",
    star: 4,
    comment: 816
  },
  {
    id: 5,
    name: 'Wired Over-Ear Gaming Headphones with USB',
    price: 1500,
    image: "1",
    star: 5,
    comment: 647
  },
  {
    id: 6,
    name: 'Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca',
    price: 1600,
    image: "1",
    off: 25,
    star: 4,
    comment: 877
  },
  {
    id: 7,
    name: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor',
    price: 250,
    image: "1",
    star: 5,
    comment: 426
  },
  {
    id: 8,
    name: '4K UHD LED Smart TV with Chromecast Built-in',
    price: 220,
    sale: true,
    image: "1",
    star: 5,
    comment: 583
  },
]


function FeaturedProducts() {
  const onChange = (key: string) => {
    console.log(key);
  };
  const [open, setOpen] = useState<boolean>(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [product, setProduct] = useState<TProductData | undefined>(undefined);
  return (
    <>
      <Row className="w-[1200px] mx-auto mt-12">
        <Col xl={5} className="bg-[#F3DE6D]">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="px-4 py-4 flex flex-col gap-4">
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-red-600">COMPUTER & ACCESSORIES</h3>
                  <h2 className="text-2xl font-[600]">32% Discount</h2>
                  <span className="text-gray-700">For all ellectronics products</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs">Offers ends in:</span>
                  <span className="bg-white px-2 py-2 text-xs font-[600]">ENDS OF CHRISTMAS</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button className="bg-orange-500 text-white mt-4 rounded-sm" size="large" icon={<FaArrowRight />} iconPosition='end'>SHOP NOW</Button>
              </div>
            </div>
            <div>
              <Image src={bannerFeature} className="w-full h-auto object-contain" alt='img' />
            </div>
          </div>
        </Col>
        <Col xl={19} className="flex px-8 flex-col gap-4">
          <div className="h-[45px] flex">
            <Col xl={5} className="h-[45px] flex items-center">
              <h2 className="font-[600] text-lg">Featured Products</h2>
            </Col>
            <Col xl={19} className="flex justify-end h-[45px]">
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
              <div className="flex gap-2 cursor-pointer h-full items-center justify-center ml-4">
                <span className="text-orange-500">Browse All Product</span>
                <AiOutlineArrowRight className="text-orange-500" />
              </div>
            </Col>
          </div>
          <Col xl={24} className="flex items-stretch flex-col gap-4">
            <Row gutter={[12, 12]}>
              {data.map((item, index) => {
                return (
                  <Col xl={6} key={index}>
                    <div className="px-2 py-2 border-2 border-gray-100 self-start" key={index}>
                      <div className="relative group flex justify-center flex-col">
                        <Image src={tozot6} alt='img' className="w-auto h-[130px] object-contain transition-transform duration-300 group-hover:scale-110" />
                        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                          <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition" onClick={() => {
                            showDrawer()
                            setProduct(item)
                          }}>
                            <BsCart2 size={20} />
                          </button>
                          <button className="bg-orange-500 p-2 rounded-full transition">
                            <BsEye size={20} className="text-white" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 mt-8">
                        <div className="flex gap-2 items-center">
                          <Rate disabled defaultValue={item.star} className="text-[15px] text-orange-500" />
                          <span className="text-gray-500">({item.comment})</span>
                        </div>
                        <h3 className="w-full line-clamp-2 text-[16px]">{item.name}</h3>
                        {!item.off && <div>
                          <span className="font-bold text-blue-500">${item.price.toLocaleString('en-US')}</span>
                        </div>}
                        {item.off && <div>
                          <span className="font-bold text-gray-500 line-through mr-2">${item.price.toLocaleString('en-US')}</span>
                          <span className="font-bold text-blue-500">${(item.price - item.off * item.price / 100).toLocaleString('en-US')}</span>
                        </div>}
                      </div>
                    </div>
                    {item.sale && <div className="absolute top-3 left-4 bg-green-500 text-white px-2 py-1 rounded-[3px]">SALE</div>}
                    {item.hot && <div className="absolute top-3 left-4 bg-red-500 text-white px-2 py-1 rounded-[3px]">HOT</div>}
                    {item.best_seller && <div className="absolute top-3 left-4 bg-blue-500 text-white px-2 py-1 rounded-[3px]">BEST SELLER</div>}
                    {item.off && <div className="absolute top-3 left-4 bg-yellow-400 text-black px-2 py-1 rounded-[3px]">{item.off}% OFF</div>}
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Col>
      </Row>
      <DrawerPopup open={open} product={product} onClose={onClose} />
    </>
  )
}

export default FeaturedProducts