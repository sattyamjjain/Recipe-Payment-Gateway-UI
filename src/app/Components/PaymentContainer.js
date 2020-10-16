import React from "react";
import styled from "styled-components";
import {
  Layout,
  Typography,
  Button,
  notification,
  message,
  Form,
  Card,
  Input,
  Modal,
} from "antd";
import { List, Avatar } from "antd";
import axios from "axios";
import CardContainer from "./CardContainer";
import { RightOutlined } from "@ant-design/icons";
import { Tabs, Radio } from "antd";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import OtpInput from "react-otp-input";

const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;
const { Header, Content } = Layout;

const HeaderContainer = styled.div`
  color: #ffffff;
`;

const MainPaymentContainer = styled.div`
  padding: 15vh;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const PaymentBoxContainer = styled.div`
  padding: 3vh;
  justify-content: center;
`;

const PaymentResultContainer = styled.div`
  padding: 10vh;
  display: flex;
  justify-content: center;
`;

export default class PaymentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cvc: "147",
      expiry: "02/23",
      name: "Sattyam Jain",
      number: "9873524835908761",
      otp: "",
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };

  onFinish = (values) => {
    console.log("Success:", values);
    this.showModal();
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  onOTPFinish = (values) => {
    console.log("Success:", values);
    if (values.otp === "123456") {
      message.success("OTP verified successfully");
      this.setState({
        visible: false,
      });
    } else {
      message.error("Wrong OTP");
    }
  };

  onOTPFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  onOTPChange = (e) => {
    console.log("event", e);
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Layout>
        <Header>
          <HeaderContainer>Recipe Payment Booking App</HeaderContainer>
        </Header>
        <Content>
          <MainPaymentContainer>
            <PaymentBoxContainer>
              <Tabs
                defaultActiveKey="1"
                size="large"
                style={{ marginBottom: 32 }}
              >
                <TabPane tab="Credit Card" key="1">
                  <Card bordered={false} style={{ width: 1000 }}>
                    <Form
                      layout="vertical"
                      onFinish={this.onFinish}
                      initialValues={{
                        cardName: "SATTYAM JAIN",
                        cardNo: "9876 3412 5120 2352",
                        month: "10",
                        year: "2034",
                        cvv: "325",
                      }}
                      onFinishFailed={this.onFinishFailed}
                      size="large"
                    >
                      <Form.Item label="NAME ON CREDIT CARD" name="cardName">
                        <Input />
                      </Form.Item>
                      <Form.Item label="CARD NUMBER" name="cardNo">
                        <Input />
                      </Form.Item>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Form.Item label="MONTH" name="month">
                          <Input />
                        </Form.Item>
                        <Form.Item label="YEAR" name="year">
                          <Input />
                        </Form.Item>
                        <Form.Item label="CVV" name="cvv">
                          <Input />
                        </Form.Item>
                      </div>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </Card>
                </TabPane>
                <TabPane tab="Debit Card" key="2">
                  <Card bordered={false} style={{ width: 1000 }}>
                    <Form
                      layout="vertical"
                      onFinish={this.onFinish}
                      initialValues={{
                        cardName: "SATTYAM JAIN",
                        cardNo: "7628 3852 6409 5800",
                        month: "08",
                        year: "2030",
                        cvv: "109",
                      }}
                      onFinishFailed={this.onFinishFailed}
                      size="large"
                    >
                      <Form.Item label="NAME ON DEBIT CARD" name="cardName">
                        <Input />
                      </Form.Item>
                      <Form.Item label="CARD NUMBER" name="cardNo">
                        <Input />
                      </Form.Item>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Form.Item label="MONTH" name="month">
                          <Input />
                        </Form.Item>
                        <Form.Item label="YEAR" name="year">
                          <Input />
                        </Form.Item>
                        <Form.Item label="CVV" name="cvv">
                          <Input />
                        </Form.Item>
                      </div>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </Card>
                </TabPane>
              </Tabs>
            </PaymentBoxContainer>
            <PaymentResultContainer>
              <div id="PaymentForm">
                <Cards
                  cvc={this.state.cvc}
                  expiry={this.state.expiry}
                  focused={this.state.focus}
                  name={this.state.name}
                  number={this.state.number}
                />
              </div>
            </PaymentResultContainer>
          </MainPaymentContainer>
          <Modal
            title="Please enter the OTP"
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
            footer={null}
            height={400}
          >
            <Card
              bordered={false}
              style={{ width: 470, height: 150, padding: "1vh" }}
            >
              <Form
                onFinish={this.onOTPFinish}
                onFinishFailed={this.onOTPFinishFailed}
                layout="horizontal"
                size="large"
              >
                <Form.Item name="otp" rules={[{ required: true }]}>
                  <Input placeholder="OTP" />
                </Form.Item>
                <Form.Item style={{ float: "right" }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Modal>
        </Content>
      </Layout>
    );
  }
}
