"use client";

import Lab4 from "@/components/Lab4";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React from "react";
const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "nav 1",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "nav 2",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "nav 3",
  },
];
const onSlider = (e: any) => {
  console.log(e);
}
const page: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        {/* <div className="demo-logo">123123</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} items={items1} /> */}
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%", borderRight: 0 }} items={items1} onClick={(e)=> onSlider(e.key)}/>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Lab4 />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default page;
