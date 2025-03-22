"use client";

import { Badge, Col, Input, Row, Select, Drawer, Button, Flex } from "antd";
import Link from "next/link";
import { AiOutlineInfoCircle, AiOutlineProduct } from "react-icons/ai";
import { BiHeadphone, BiHome, BiPhoneCall } from "react-icons/bi";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import Image from "next/image";
import logo from "@/assets/images/logo.jpg";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Cart from "@/components/Cart";
const { Search } = Input;

const options = [
  {
    value: "all",
    label: "All Category",
  },
  {
    value: "phone",
    label: "Phone",
  },
  {
    value: "ipad",
    label: "Ipad",
  },
  {
    value: "laptop",
    label: "Laptop",
  },
];

function Header() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [isBrowser, setIsBrowser] = useState(false);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <header className="sticky z-[999] top-0 left-0 right-0">
      <div className="bg-[#1B6392]">
        <Row className="max-w-[1200px] mx-auto py-4 px-4 flex justify-center">
          <Col xl={6} className="flex justify-start items-center">
            <Link
              href="/dashboard"
              className="flex justify-center items-center gap-4"
            >
              <Image
                src={logo}
                alt="logo"
                className="rounded-full w-[100px] h-auto object-contain"
              />
              <h2 className="text-xl font-bold">Shop App</h2>
            </Link>
          </Col>
          <Col xl={12}>
            <Search
              placeholder="Search for anything..."
              className="w-full"
              size="large"
              allowClear
              onSearch={onSearch}
            />
          </Col>
          <Col xl={6} className="flex justify-end items-center">
            <div className="flex justify-center gap-6 items-center">
              <span style={{ cursor: "pointer" }} onClick={showDrawer}>
                <Badge count={isBrowser ? cart.length : 0}>
                  <FaCartShopping className="text-2xl text-white" />
                </Badge>
              </span>
              <Link href={"/dashboard/profile"} className="text-2xl">
                <FaUser />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bg-white shadow">
        <Row className="max-w-[1200px] mx-auto py-4 px-4 flex justify-start">
          <Col xl={18} className="flex gap-8 items-center">
            <Select
              defaultValue="all"
              style={{ width: 120 }}
              onChange={(e) => console.log(e)}
              options={options}
            />
            <Col className="flex items-center gap-1 text-black">
              <Link className="flex items-center gap-1" href="/dashboard">
                <BiHome className="text-2xl font-bold" />
                <p className="capitalize">Dashboard</p>
              </Link>
            </Col>
            <Col className=" text-black flex items-center gap-1">
              <BiHeadphone className="text-2xl font-bold" />
              <span className="text-md">Customer Support</span>
            </Col>
            <Col className="flex items-center gap-1  text-black">
              <AiOutlineInfoCircle className="text-2xl font-bold" />
              <span className="text-md">Need Help</span>
            </Col>
            <Col className="flex items-center gap-1 text-black">
              <Link className="flex items-center gap-1" href="/products">
                <AiOutlineProduct className="text-2xl font-bold" />
                <p className="capitalize">all products</p>
              </Link>
            </Col>
          </Col>
          <Col
            xl={6}
            className="text-black flex gap-1 items-center justify-end"
          >
            <BiPhoneCall className="text-3xl" />
            <span className="">+1-202-555-0104</span>
          </Col>
        </Row>
      </div>
      <Drawer
        styles={{
          body: {
            padding: "0",
            marginTop: "42px",
            marginBottom: "120px",
            scrollbarWidth: "none",
          },
        }}
        title="Shoping Cart"
        placement="right"
        onClose={onClose}
        open={visible}
        width={500}
        style={{ textAlign: "center", padding: "0", position: "relative" }}
      >
        <Flex
          justify="space-between"
          style={{
            position: "absolute",
            top: "57px",
            backgroundColor: "red",
            left: "0",
            width: "100%",
          }}
        >
          <div
            style={{
              textAlign: "center",
              width: "70%",
              backgroundColor: "rgb(179 27 43)",
              lineHeight: 3,
            }}
            className="text-white"
          >
            spend $25 more to get free shipping!
          </div>
          <div
            style={{
              textAlign: "center",
              width: "30%",
              textDecorationLine: "underline",
              fontSize: "14px",
              lineHeight: 3,
              backgroundColor: "#900917",
            }}
            className="text-white uppercase"
          >
            Shop best seller
          </div>
          <div
            style={{
              position: "absolute",
              borderWidth: "21px",
              borderColor: "transparent #900917 #900917 transparent",
              borderStyle: "solid",
              top: "0",
              right: "149px",
            }}
          ></div>
        </Flex>
        <Cart />
        <Flex
          justify="space-between"
          style={{
            padding: "10px 30px",
            position: "absolute",
            bottom: "74px",
            width: "100%",
            borderTop: "solid rgba(0, 0, 0, 0.2) 1px",
            borderBottom: "solid rgba(0, 0, 0, 0.2) 1px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px -2px 4px",
            cursor: "pointer",
          }}
        >
          <span className="uppercase font-bold">add gift note</span>
          <span className="font-bold">+</span>
        </Flex>
        <Button
          className="text-white mt-4 rounded-sm uppercase font-[600]"
          disabled={cart.length == 0}
          size="large"
          style={{
            width: "95%",
            padding: "24px",
            position: "absolute",
            left: "14px",
            bottom: "16px",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "rgb(178 34 38)",
          }}
        >
          <Link href={"/checkout"}>CHECKOUT</Link>
          <span className="text-white-500 font-[600]">
            $
            {cart
              .reduce((acc, item) => acc + item.total, 0)
              .toLocaleString("en-US")}
          </span>
        </Button>
      </Drawer>
    </header>
  );
}

export default Header;
