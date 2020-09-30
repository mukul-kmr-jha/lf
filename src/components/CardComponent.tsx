import React, {FC, useState} from 'react';
import {Row} from "antd";
import styled from "styled-components";

const Card = styled(Row)`
    display: flex;
    flex-direction: column;
    width: 240px;
    max-width: 240px;
    margin: 5px;
    padding: 10px;
    height: 380px;
    position: relative;
    transition: 0.2s;
    & img {
        width: 100%;
    }
    & .content {
        position: absolute;
        bottom: 0;
        padding: 10px 0;
        background: white;
        & h4 {
            font-weight: bold;
        }
    }
    &:hover {
        box-shadow: 0px 1px 8px #989a9c;
        border-radius: 10px;    
    }
`;

const ColorsRow = styled(Row)`
    & span {
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background: red;
        margin-right: 3px;
        & span:last-child {
            margin-right: 5px;
        }
    }
`;

const CardComponent : FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    return (
            <Card
                onMouseEnter={() => setIsHovered(!isHovered)}
                onMouseLeave={() => setIsHovered(!isHovered)}
            >
                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                <div className="content">
                    {isHovered && (
                        <p>UTCKS-38</p>
                    )}
                    <h4>100% Cotton Navy/White Color Chambery</h4>
                    {!isHovered ? <p>8 more colors</p> : (
                        <>
                            <p>Also available in</p>
                            <ColorsRow>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                +2
                            </ColorsRow>
                        </>
                        )}
                </div>
            </Card>
    );
}

export default CardComponent;
