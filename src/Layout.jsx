/** @format */

import { BarChartOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import Dashboard from "./Dashboard";
import { RxAvatar } from 'react-icons/rx';
import { AiOutlineCluster } from 'react-icons/ai';
import { HiOutlineDocumentChartBar } from 'react-icons/hi2';
import "./Dashboard.css";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "9", <BarChartOutlined />),
  getItem('Informes', '1', <HiOutlineDocumentChartBar />),
  getItem('Modelos', 'sub1', <AiOutlineCluster />, [
    getItem('Atributo empresas', '3'),
    getItem('Atributo de personalidad', '4'),
    getItem('Atributo de políticos', '5'),
    getItem('Atributo de empresas', '5'),
    getItem('Red motivacional del voto', '5'),
    getItem('Preocupaciones', '5'),
    getItem('Emociones básicas', '5'),
    getItem('Preocupaciones', '5'),
    getItem('Continuidad y cambio', '5'),
    getItem('Voto emocional y racional', '5'),
  ]),
  getItem('Perfil', '10', <RxAvatar />),
];
const Layouts = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout
        style={{
          
          minHeight: "500vh",
        }}
        className="layout">
        <Sider
        width={"30vh"}
         
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}>
          <Menu
           
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Content
            style={{
              margin: "0 16px",
            }}>
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}>
              <Breadcrumb.Item>Métricas</Breadcrumb.Item>
              
            </Breadcrumb>
            <div>
              <Dashboard />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default Layouts;
