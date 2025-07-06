import React, { useState } from "react";
import "./auth.less";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  message,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  getSignupOtp,
  sellerSignup,
} from "../../redux/sellerSignup/sellerSignupActions";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otp, setOtp] = useState("2222");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const [form] = useForm();
  const dispatch = useDispatch();
 

  const signupReducer = useSelector((state) => state.signup);

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone_number", phone);
    formData.append("otp", otp);
    dispatch(sellerSignup(formData, navigate));
  };
 

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

  const selectBefore = (
    <Select defaultValue="+91">
      <Option value="+91">+91</Option>
      <Option value="+88">-88</Option>
    </Select>
  );

  const getOtpHandler = (e) => {
    e.preventDefault();
    if (phone) {
      getSignupOtp(phone, setOtp, form);
    } else {
      message.error("Please enter otp!");
    }
  };

  const selectAfter = (
    <button className="otp-btn" onClick={(e) => getOtpHandler(e)}>
      GET OTP
    </button>
  );

  const validate = () => {
    return String(email).match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  // const userData = localStorage.getItem("userData")
  //   ? JSON.parse(localStorage.getItem("userData"))
  //   : null;

  // if (userData?.token) {
  //   return <Navigate to="/" />;
  // }

  return (
    <Row className="auth-wrapper">
      <Col xs={24} sm={24} md={10} lg={10} xl={10} style={{ lineHeight: 0 }}>
        <img src="/images/home13.gif" alt="wallpaper" className="left-img" />
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
            form={form}
            onFinishFailed={onFinishFailed}
            className="input-group"
          >
            <Form.Item
              label={
                <div className="form-label">
                  <h6>First name</h6>
                </div>
              }
              className="input-row input-margin"
              name="firstname"
              rules={[
                {
                  required: true,
                  message: "First Name is required!",
                },
              ]}
            >
              <Input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Last name</h6>
                </div>
              }
              className="input-row input-margin"
              name="lastname"
              rules={[
                {
                  required: true,
                  message: "Last Name is required!",
                },
              ]}
            >
              <Input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Item>
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
              className="input-row input-margin"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password is required!",
                },
                {
                  validator: (_, value) => {
                    if (value && value.length < 8) {
                      return Promise.reject(
                        "Password must be at least 8 characters long!"
                      );
                    }
                    if (!/[A-Z]/.test(value)) {
                      return Promise.reject(
                        "Password must contain at least one capital letter!"
                      );
                    }
                    return Promise.resolve();
                  },
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
            <Form.Item
              className="input-row input-margin"
              label={
                <div className="form-label">
                  <h6>Phone Number</h6>
                </div>
              }
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number",
                },
                {
                  validator: (_, value) => {
                    if (value && value.toString().length !== 10) {
                      return Promise.reject(
                        "Please enter correct Phone Number!"
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <InputNumber
                addonBefore={selectBefore}
                value={phone}
                onChange={(e) => setPhone(e)}
                className="input-number"
                placeholder="Enter Phone Number"
              />
            </Form.Item>
            <Form.Item
              className="input-row"
              label={
                <div className="form-label">
                  <h6>OTP</h6>
                </div>
              }
              name="otp"
              rules={[
                {
                  required: true,
                  message: "Please enter your otp",
                },
              ]}
            >
              <InputNumber
                addonAfter={selectAfter}
                value={otp}
                onChange={(e) => setOtp(e)}
                className="input-number"
                placeholder="Enter OTP"
              />
            </Form.Item>

            <Form.Item>
              <p className="forgot-password">Forgot Password?</p>
              <Button
                type="primary"
                htmlType="submit"
                loading={signupReducer.loading ? true : false}
              >
                Register
              </Button>
              <p className="no-account">
                Already have an account?
                <span onClick={() => navigate("/login")}>Log In</span>
              </p>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default Register;
