import React, {FC} from 'react';
import styled from "styled-components";
import {Row} from "antd";
import CardComponent from "./CardComponent";

const CardsContainer = styled(Row)`
    display: flex;
`;

const CardsContainerComponent : FC = () => {
    return (
        <CardsContainer>
            <CardComponent key={1} />
            <CardComponent key={12} />
            <CardComponent key={123} />
            <CardComponent key={124} />
            <CardComponent key={125} />
        </CardsContainer>

    );
}

export default CardsContainerComponent;
