import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import "./devicelogin.scss"
import UserAPI from "../../../api/user";
import Device from "../../../components/account/device";

function DeviceLogin(props) {

    return (
    <Container className="logindevice">
      <Row>
        <Col className="text-center">
          <h2>OPEN BRUSH LOGIN CODE</h2>
        </Col>
      </Row>
        <Row>
            <Col>&nbsp;</Col>
        </Row>
        <Row>
            <Col>
                <Device user={props.user}/>
            </Col>
        </Row>
    </Container>
  )
}

export default DeviceLogin