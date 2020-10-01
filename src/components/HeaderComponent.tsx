import React, {FC} from 'react';
import {Button, Row} from "antd";
import { AiOutlineSearch, AiOutlineQuestionCircle, AiOutlineBell } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import firstCry from './assests/images/firstCry.png';
import Avatar from './assests/images/Avatar.png';

const Header = styled(Row)`
    padding: 16px 12px 6px 18px;
    justify-content: space-between;
    border-bottom: 1px solid #f0f2f5;
    justify-content: space-between;
    & div > span {
        padding: 10px;
        cursor: pointer;
        &.active {
            background: #bae7ff;
            border-radius: 4px;
            color: #0050b3;
        }
    }
    & button {
        position: relative;
        margin-right: 10px;
        cursor: pointer;
        & svg {
            position: absolute;
            top: 8px;
        }
        &:first-child {
            padding-left: 30px;
            & svg {
                left: 10px;
            }
        }
        &:last-child {
            padding-right: 30px;
            & svg {
                right: 10px;
            }
        }
    }
    &.top-header {
        padding: 0 10px 0 0;
        & .page-title {
            padding: 18px;
            font-weight: bold;
        }
        & div {
          & svg {
            margin: 0 10px;
            cursor: pointer;
          }
          & .company-img {
            border-left: 1px solid  #f0f2f5;
            padding: 18px 0 18px 12px;
            cursor: pointer;
          }
          & .user-img {
            border-radius: 50%;
            padding: 12px;
            cursor: pointer;
          }
    }
`;

const HeaderComponent: FC = () => {
    return (
        <>
            <Header className="top-header">
                <div className="page-title">Material Library</div>
                <div>
                    <AiOutlineSearch/>
                    <AiOutlineQuestionCircle />
                    <AiOutlineBell/>
                    <img className="company-img" src={firstCry} alt="firstCry" height="100%" width={60}/>
                    <img className="user-img" src={Avatar} alt="Avatar" height="100%" width={60}/>
                </div>
            </Header>
            <Header>
                <div>
                    <span className="active">
                        Fabrics(987)
                    </span>
                    <span>
                        Trims(234)
                    </span>
                </div>
                <div>
                    <Button>
                        <FaExchangeAlt/>Stack I/O
                    </Button>
                    <Button type="primary">
                        Add New <IoIosArrowDown/>
                    </Button>
                </div>
            </Header>
        </>
    )
}

export default HeaderComponent;