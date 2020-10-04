import React, {FC} from 'react';
import {Layout, Menu} from 'antd';
import { BsGrid } from "react-icons/bs";
import { IoMdShirt } from "react-icons/io";
import { AiOutlineFile, AiOutlineSetting, AiFillGift } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FiBox } from "react-icons/fi";

import styled from 'styled-components';

const { Sider } = Layout;

const Logo = styled.div`
    font-weight: 900;
    font-style: italic;
    padding: 10px 10px 25px;
    font-size: 1.5rem;
    color: white;
    text-align: center;
`;

interface Props {}


const LayoutComponent: FC<Props> = (props)=> {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsed={true}>
                <Logo>LF</Logo>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<BsGrid />} />
                    <Menu.Item key="2" icon={<IoMdShirt />}/>
                    <Menu.Item key="3" icon={<AiOutlineFile />} />
                    <Menu.Item key="4" icon={<AiFillGift />} />
                    <Menu.Item key="5" icon={<AiOutlineFile />} />
                    <Menu.Item key="6" icon={<IoMdShirt />} />
                    <Menu.Item key="7" icon={<FiBox />} />
                    <Menu.Item key="8" icon={<BiCommentDetail />} />
                    <Menu.Item key="9" icon={<AiOutlineSetting />} />
                </Menu>
            </Sider>
            <Layout className="site-layout">
                {props.children}
            </Layout>
        </Layout>
    );
}

export default LayoutComponent;
