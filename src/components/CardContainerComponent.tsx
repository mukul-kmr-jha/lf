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
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
        </CardsContainer>

    );
}

export default CardsContainerComponent;
