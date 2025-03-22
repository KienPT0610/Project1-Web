"use client";

import { useState } from "react";
import { Form, Input, Button, Typography, Flex, Progress } from "antd";
import { green, orange, red } from "@ant-design/colors";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { register } from "@/store/slices/authSlices";
import { RootState } from "@/store";
import { resetAuthError } from "@/store/slices/authSlices";

const { Title } = Typography;

export default function Register() {
  const [email, setNewEmail] = useState("");
  const [password, setNewPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [code, setCode] = useState("");
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state: RootState) => state.auth);

  const handleRegister = (values: { email: string; password: string }) => {
    dispatch(register(values.email, values.password));
  };

  const resetError = () => {
    dispatch(resetAuthError());
  };

  interface PasswordStrength {
    (pass: string): number;
  }

  const handlePassword: PasswordStrength = (pass) => {
    let count = 0;
    if (pass.length >= 8) {
      count++;
    }
    if (pass.match(/[A-Z]/)) {
      count++;
    }
    if (pass.match(/[a-z]/)) {
      count++;
    }
    if (pass.match(/[0-9]/)) {
      count++;
    }
    if (pass.match(/[^A-Za-z0-9]/)) {
      count++;
    }
    return count * 20;
  };

  return (
    <div
      id="Login"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flex: "1",
      }}
    >
      <div
        style={{
          backgroundColor: "#373e54",
          borderRadius: "0",
          margin: "0",
          padding: "0",
          width: "50%",
          display: "block",
          height: "100vh",
        }}
      ></div>
      <div
        id="Register"
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Form
          onFinish={handleRegister}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "20px",
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            Sign up
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
                onChange={(e) => setNewEmail(e.target.value)}
                value={email}
              />
              <span
                style={{
                  position: "absolute",
                  top: "-30px",
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
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "0",
                  fontSize: "16px",
                  color: "rgb(169 169 169)",
                }}
              >
                Password
              </span>
            </div>
          </Form.Item>
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <Progress
              size={[65, 10]}
              percent={handlePassword(password)}
              steps={5}
              strokeColor={[red[5], red[4], orange[3], green[3], green[4]]}
            />
          </div>
          <Form.Item
            name="re-enter password"
            rules={[
              { required: true, message: "Please re-enter your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(new Error(""));
                  }
                  if (value !== getFieldValue("password")) {
                    return Promise.reject(new Error("Passwords do not match!"));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                marginTop: "20px",
                justifyContent: "space-between",
              }}
            >
              <Input.Password
                placeholder="Re-enter Password"
                onChange={(e) => setReEnterPassword(e.target.value)}
              />
              <span
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "0",
                  fontSize: "16px",
                  color: "rgb(169 169 169)",
                }}
              >
                Confirm Password
              </span>
            </div>
          </Form.Item>
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <Progress
              size={[65, 10]}
              percent={handlePassword(reEnterPassword)}
              steps={5}
              strokeColor={[red[5], red[4], orange[3], green[3], green[4]]}
            />
          </div>
          <Form.Item
            name="code"
            rules={[{ required: true, message: "Please enter the code!" }]}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                marginTop: "20px",
                display: "flex",
              }}
            >
              <Input
                placeholder="Please input verification code"
                onChange={(e) => setCode(e.target.value)}
                value={code}
              />
              <span
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "0",
                  fontSize: "16px",
                  color: "rgb(169 169 169)",
                }}
              >
                Verification code
              </span>
              <Button type="primary" style={{ marginLeft: "10px" }}>
                <span>Get code</span>
              </Button>
            </div>
          </Form.Item>
          <Form.Item>
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
                abcxyz
              </span>
            </Flex>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ width: "100%" }}
              htmlType="submit"
              loading={isLoading}
            >
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="default"
              className="text-black"
              style={{ width: "100%" }}
              htmlType="submit"
              onClick={resetError}
              href="/auth/login"
            >
              Existing account? Go to login
            </Button>
          </Form.Item>
          {error && (
            <div style={{ color: "red", textAlign: "center" }}>{error}</div>
          )}
        </Form>
      </div>
    </div>
  );
}
