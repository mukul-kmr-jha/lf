import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import LayoutComponent from "./components/LayoutComponent";
import HeaderComponent from "./components/HeaderComponent";
import CardsContainerComponent from "./components/CardContainerComponent";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
          <HeaderComponent/>
          <Row>
              <Col span={6} className="content-left"/>
              <Col span={18} className="content-right">
                  <CardsContainerComponent/>
              </Col>
          </Row>
      </LayoutComponent>
    </div>
  );
}

export default App;
