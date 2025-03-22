"use client";

import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Typography, Flex, Divider, Image } from "antd";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { login } from "@/store/slices/authSlices";
import { RootState } from "@/store";
import { resetAuthError } from "@/store/slices/authSlices";
import {
  GithubOutlined,
  WechatOutlined,
  AlipayCircleOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons";
import bgSideLogo from "@/assets/images/bgSideLogo.png";

const { Title } = Typography;

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { isLoading, error, user } = useAppSelector(
    (state: RootState) => state.auth
  );

  const handleLogin = (values: { email: string; password: string }) => {
    dispatch(login(values.email, values.password));
  };

  const resetError = () => {
    dispatch(resetAuthError());
  };

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <div
      id="Login"
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flex: "1",
      }}
    >
      <div
        style={{
          borderRadius: "0",
          margin: "0",
          padding: "0",
          width: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form
          onFinish={handleLogin}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "20px",
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Title
            level={2}
            style={{
              textAlign: "center",
              marginBottom: "60px",
              fontWeight: 700,
            }}
          >
            Sign in
          </Title>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Invalid email format!" },
            ]}
          >
            <div style={{ position: "relative", width: "100%" }}>
              <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <span
                style={{
                  position: "absolute",
                  top: "-25px",
                  left: "0",
                  fontSize: "16px",
                  color: "rgb(169 169 169)",
                }}
              >
                Email
              </span>
            </div>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <div
              style={{ position: "relative", width: "100%", marginTop: "20px" }}
            >
              <Input.Password
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <span
                style={{
                  position: "absolute",
                  top: "-25px",
                  left: "0",
                  fontSize: "16px",
                  color: "rgb(169 169 169)",
                }}
              >
                Password
              </span>
            </div>
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Flex align="center">
                <input
                  type="checkbox"
                  style={{
                    outline: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onFocus={(e) => e.target.blur()}
                />
                <span
                  style={{ marginLeft: "5px", cursor: "pointer" }}
                  className="text-blue-500"
                >
                  Remember me
                </span>
              </Flex>
              <Link
                href="/auth/forgot-password"
                className="text-blue-500"
                onClick={resetError}
              >
                Forgot password?
              </Link>
            </Flex>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              className="text-white"
              style={{ width: "100%" }}
              htmlType="submit"
              loading={isLoading}
            >
              Sign in
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="default"
              className="text-black"
              style={{ width: "100%" }}
              htmlType="submit"
              onClick={resetError}
              href="/auth/register"
            >
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            <Divider
              style={{
                color: "rgb(151 151 151)",
                borderColor: "rgb(154 154 154)",
              }}
              variant="solid"
            >
              Sign in with
            </Divider>
          </Form.Item>
          <Flex
            justify="space-between"
            style={{ fontSize: "24px", color: "rgb(177 177 177)" }}
          >
            <GithubOutlined />
            <WechatOutlined />
            <AlipayCircleOutlined />
            <WeiboCircleOutlined />
          </Flex>
          {error && (
            <div
              style={{
                marginTop: "10px",
                color: "red",
                textAlign: "center",
              }}
            >
              {error}
            </div>
          )}
        </Form>
      </div>
      <div className="w-1/2 h-screen bg-slate-800 flex items-center justify-center flex-col space-y-4">
        <Image
          src={bgSideLogo.src}
          width={400}
          alt="Background Side Logo"
          preview={false}
        />
        <span className="text-2xl">Welcome to the system</span>
        <span className="text-xl">Package manager system</span>
      </div>
    </div>
  );
}
