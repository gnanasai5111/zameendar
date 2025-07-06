import React, { useState } from "react";
import "./auth.less";
import { Button, Col, Form, Input, Row } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/login/loginActions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginReducer = useSelector((state) => state.login);

  const onFinish = () => {
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    dispatch(loginUser(formData, navigate));
  };

  // console.log(email, password);

  const onFinishFailed = (errorInfo) => {
    console.log("Form validation failed:", errorInfo);
  };

  const validateEmail = (rule, value, callback) => {
    if (!validate()) {
      callback("Please enter a valid email address!");
    } else {
      callback();
    }
  };

  const validate = () => {
    return String(email).match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const userData = useSelector((state) => state.user);
  console.log(userData);

  // if (userData?.token) {
  //   return <Navigate to="/" />;
  // }

  return (
    <Row className="auth-wrapper">
      <Col xs={24} sm={24} md={10} lg={10} xl={10} style={{ lineHeight: 0 }}>
        <img src="/images/home11.gif" alt="wallpaper" className="left-img" />
        <div></div>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={14}
        lg={14}
        xl={14}
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="auth-container-right">
          <div class="logo-holder">
            <Link to="/">
              <img
                src="/images/logo1.png"
                alt="logo"
                className="logo"
                loading="lazy"
                class="custom-logo lazy"
              />
            </Link>
          
          </div>
          <h6 className="heading">Welcome</h6>
          <p className="sub-heading">Please enter your details.</p>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="input-group"
          >
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Email</h6>
                </div>
              }
              className="input-row input-margin"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is required!",
                },
                {
                  validator: validateEmail,
                },
              ]}
            >
              <Input
                placeholder="Email"
                value={email}
                className="email-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Password</h6>
                </div>
              }
              className="input-row"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password is required!",
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
                value={password}
                className="password-input"
                onChange={(e) => setPassword(e.target.value)}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <p className="forgot-password">Forgot Password?</p>
              <Button
                type="primary"
                htmlType="submit"
                loading={loginReducer.loading ? true : false}
              >
                Login {/* Changed button text to "Login" */}
              </Button>
              <p className="no-account">
                Don't have an account?{" "}
                <span onClick={() => navigate("/register")}>Sign up</span>
              </p>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
