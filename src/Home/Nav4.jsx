import React from 'react';
// import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
class Header4 extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div className="new-name">
        <div className="nav-center">
          <div className="img-box"><img src="https://official-static.tongdun.cn/officialv3/logo_white@2x.png" alt="" /></div>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="mail">
              首页
          </Menu.Item>
            <SubMenu title="产品与服务">
              <Menu.ItemGroup title="物联设备"  className="pro">
                <Menu.Item key="setting:1">数据采集</Menu.Item>
                <Menu.Item key="setting:2">智能控制</Menu.Item>
                <Menu.Item key="setting:3">物联网网关</Menu.Item>
                <Menu.Item key="setting:4">边缘计算</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="云平台PaaS"  className="pro">
                <Menu.Item key="setting:5">物联网设备管理</Menu.Item>
                <Menu.Item key="setting:6">工业大数据管理</Menu.Item>
                <Menu.Item key="setting:7">实时大数据分析</Menu.Item>
                <Menu.Item key="setting:8">模型管理</Menu.Item>
                <Menu.Item key="setting:9">决策引擎</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="云平台SaaS"  className="pro">
                <Menu.Item key="setting:10">智能污水管网运维平台</Menu.Item>
                <Menu.Item key="setting:11">智能二次供水泵云</Menu.Item>

              </Menu.ItemGroup>
              <Menu.ItemGroup title="服务"  className="pro">
                <Menu.Item key="setting:12">私有云部署</Menu.Item>
                <Menu.Item key="setting:13">本地部署</Menu.Item>
                <Menu.Item key="setting:14">数据服务</Menu.Item>
                <Menu.Item key="setting:15">建模服务</Menu.Item>
                <Menu.Item key="setting:16">运维服务</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu title="工业应用">
              <Menu.Item key="1">污水管网</Menu.Item>
              <Menu.Item key="2">污水处理</Menu.Item>
              <Menu.Item key="3">供水管网</Menu.Item>
              <Menu.Item key="4">二次供水</Menu.Item>
              <Menu.Item key="5">化工</Menu.Item>
              <Menu.Item key="6">智能工厂</Menu.Item>
              <Menu.Item key="7">能耗管理</Menu.Item>
            </SubMenu>
            <SubMenu title="平台技术">
              <Menu.Item key="9">物联设备操作系统</Menu.Item>
              <Menu.Item key="10">工业设备协议</Menu.Item>
              <Menu.Item key="11">物联网协议</Menu.Item>
              <Menu.Item key="12">云平台</Menu.Item>
              <Menu.Item key="13">流数据处理</Menu.Item>
              <Menu.Item key="14">时序数据库</Menu.Item>
              <Menu.Item key="15">机器学习</Menu.Item>
              <Menu.Item key="16">深度学习</Menu.Item>
              <Menu.Item key="17">数据孪生建模</Menu.Item>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                关于睿深
            </a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
export default Header4;