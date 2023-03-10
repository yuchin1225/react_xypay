import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Badge, Image } from "react-bootstrap";

import Icon from "../../public/svg";

import { useSelector, useDispatch } from "react-redux";

import find from "../../public/img/xy_pay_find.png";

import pay from "../../public/img/btn_pay.png";
import discode from "../../public/img/btn_discode.png";
import back from "../../public/img/btn_back.png";




import { strReplace } from "../../public/tools";
import getCarplate from "../../public/tools/api";

import { Message } from "../../public/modal/modal.jsx";

import * as actionTypes from "../../store/action-types";


const Normal = (props) => {

    const data = props.data;

    return (
        <Container fluid>
            <Row>
                <Col md={8} className="mt-5 mx-auto text-center">
                    <Alert
                        className="position-relative"
                        variant="light">
                        <Image
                            className="position-absolute top-0 start-0"
                            src={find}
                            width={64}
                            height={64}
                            style={{ zIndex: "100" }} />
                        <Alert
                            className="text-dark"
                            variant="success"
                            style={{ paddingLeft: "8px", paddingRight: "8px" }}>
                            <Row>
                                <Col md={4}>
                                    <Image
                                        className="img-fluid rounded-3"
                                        src={data.pict}
                                        width="80%" />
                                </Col>
                                <Col md={8}>
                                    <Row className="border-bottom border-white my-4 pb-3">
                                        <Col sm={6} className="col">
                                            <Alert.Heading>
                                                <h4 className="fw-bolder">
                                                    <span>{data.carplate}</span>
                                                </h4>
                                            </Alert.Heading>
                                        </Col>
                                        <Col sm={6} className="col">
                                            <Alert.Heading>
                                                <h4 className="fw-bolder">
                                                    NT$ <span>{data.cash}</span>
                                                </h4>
                                            </Alert.Heading>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col" sm={5}>
                                            入場時間<br />
                                            <Badge className="rounded-pill"><span>03-10 10:02</span></Badge>
                                        </Col>
                                        <Col className="col" sm={2}>
                                            <Icon id="to" />
                                        </Col>
                                        <Col className="col" sm={5}>
                                            現在時間<br />
                                            <Badge className="rounded-pill"><span>03-10 17:02</span></Badge>
                                        </Col>
                                    </Row>
                                    <Alert.Heading>
                                        <h4 className="fw-bolder mt-2 mb-3">
                                            Test1
                                        </h4>
                                    </Alert.Heading>
                                </Col>
                            </Row>
                        </Alert>
                        <div className="border-top pt-3">
                            <Row className="justify-content-center">
                                <Col className="col-auto">
                                    <Image
                                        className="btn btn-link"
                                        src={pay}
                                        width={135}
                                        height={75} />
                                </Col>
                                <Col className="col-auto">
                                    <Image
                                        className="btn btn-link"
                                        src={discode}
                                        width={135}
                                        height={75} />
                                </Col>
                                <Col className="col-auto">
                                    <Image
                                        className="btn btn-link"
                                        src={back}
                                        width={135}
                                        height={75} />
                                </Col>
                            </Row>


                        </div>
                        {/* <Navbar
                            bg="transparent"
                            expand="lg"
                            className="border-top pt-3">
                            <Container fluid>
                                <Nav
                                    className="mx-auto mb-2 mb-lg-0"
                                    as="ul">
                                    <Nav.Item as="li">
                                        <Image
                                            className="btn btn-link"
                                            src={pay}
                                            style={{ width: "10rem", height: "5rem" }} />
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Image
                                            className="btn btn-link"
                                            src={discode}
                                            style={{ width: "10rem", height: "5rem" }} />
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Image
                                            className="btn btn-link"
                                            src={back}
                                            style={{ width: "10rem", height: "5rem" }} />
                                    </Nav.Item>
                                </Nav>
                            </Container>
                        </Navbar> */}
                    </Alert>
                </Col>
            </Row>
        </Container>

    )
}


const Car = (props) => {

    const store = useSelector(store => store.carMessage);
    const dispatch = useDispatch();


    return (
        <>
            {
                // store ? <Normal data={store} /> : ""
                (store && <Normal data={store} />)
            }
        </>
    )
}

export default Car;