"use client";

import { TCartProduct } from "@/types/product.types";
import {
  // Button,
  // Card,
  Col,
  Image,
  Row,
  // Flex,
  // message,
  // Popconfirm,
  Space,
  Table,
} from "antd";
import Column from "antd/es/table/Column";
// import { decrement, increment, remove } from "@/store/slices/cartSlice";
// import { FaRegCircleXmark } from "react-icons/fa6";
// import { useAppDispatch } from "@/hooks/reduxHooks";

interface IProps {
  cart: TCartProduct[];
}

function Product(props: IProps) {
  const { cart } = props;
  // const dispatch = useAppDispatch();
  // const [messageApi, contextHolder] = message.useMessage();
  // const success = () => {
  //   messageApi.open({
  //     type: "success",
  //     content: "Delete product successfully",
  //     style: {
  //       marginTop: "30px",
  //     },
  //   });
  // };
  return (
    <>
      {/* {contextHolder} */}
      <div className="mx-auto">
        <Col
          style={{
            width: "500px",
          }}
        >
          <Col>
            <Table<TCartProduct>
              dataSource={cart}
              locale={{ emptyText: "No products in the cart" }}
              rowKey="id"
              pagination={false}
              showHeader={false}
            >
              <Column
                width={150}
                key="product"
                render={(_, record: TCartProduct) => (
                  <div>
                    {/* <div>
                        <Popconfirm
                          title="Delete the product"
                          description="Are you sure to delete this product?"
                          okText="Yes"
                          cancelText="No"
                          onConfirm={() => {
                            dispatch(remove(record.id));
                            success();
                          }}
                        >
                          <Button danger type="link" className="text-lg">
                            <FaRegCircleXmark />
                          </Button>
                        </Popconfirm>
                      </div> */}
                    <div>
                      <Image src={record.image} alt={record.name} />
                    </div>
                  </div>
                )}
              />

              <Column
                width={220}
                key="quantity"
                render={(_, record: TCartProduct) => (
                  <Space size="middle">
                    <Col>
                      <div>
                        <span className="line-clamp-2 font-medium">
                          {record.name}
                        </span>
                      </div>
                      <Row
                        style={{
                          alignItems: "center",
                          marginTop: "35px",
                          marginBottom: "15px",
                        }}
                      >
                        <span style={{ marginRight: "10px" }}>QTY</span>
                        <div className="flex items-center border border-gray-300 justify-between px-2 py-1">
                          {/* <button
                            className="text-lg font-bold text-gray-600 hover:text-gray-800"
                            onClick={() => dispatch(decrement(record.id))}
                          >
                            -
                          </button> */}
                          <input
                            className="text-center bg-transparent outline-none font-medium"
                            type="text"
                            value={record.quantity.toString().padStart(2, "0")}
                            readOnly
                            style={{ width: "40px" }}
                          />
                          {/* <button
                            className="text-lg font-bold text-gray-600 hover:text-gray-800"
                            onClick={() => dispatch(increment(record.id))}
                          >
                            +
                          </button> */}
                        </div>
                      </Row>
                    </Col>
                  </Space>
                )}
              />
              <Column
                dataIndex="price"
                key="price"
                render={(_, record: TCartProduct) => (
                  <Space size="middle" style={{ position: "relative" }}>
                    {!record.off && (
                      <div style={{ position: "absolute", top: "5px" }}>
                        <span className="font-bold">
                          ${record.price.toLocaleString("en-US")}
                        </span>
                      </div>
                    )}
                    {record.off && (
                      <div style={{ position: "absolute", top: "5px" }}>
                        <span className="font-bold text-gray-500 line-through mr-2">
                          ${record.price.toLocaleString("en-US")}
                        </span>
                        <span className="font-bold">
                          $
                          {(
                            record.price -
                            (record.off * record.price) / 100
                          ).toLocaleString("en-US")}
                        </span>
                      </div>
                    )}
                  </Space>
                )}
              />
              {/* <Column
                title="Sub-Total"
                dataIndex="total"
                key="total"
                className="text-md font-bold"
                render={(text: number) => (
                  <span>${text.toLocaleString("en-US")}</span>
                )}
              /> */}
            </Table>
          </Col>
        </Col>
      </div>
    </>
  );
}

export default Product;
