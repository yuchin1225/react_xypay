import React, { useState, useEffect } from "react";
import { Fade, Container, Row, Col, Form, FloatingLabel, Button, Image } from "react-bootstrap";
import searchImg from "../../public/img/btn-search.png";
import Icon from "../../public/svg";

import { useSelector, useDispatch } from "react-redux";

import { strReplace } from "../../public/tools";
import getCarplate from "../../public/tools/api";

import { Message } from "../../public/modal/modal.jsx";

import * as actionTypes from "../../store/action-types";


const Home = (props) => {

    const store = useSelector(store => store.carMessage);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [carplate, setCarplate] = useState("");

    const handleChange = (e) => {
        setCarplate(e.target.value);
    }

    const getCarMessage = async (carplate) => {
        try {
            const { data } = await getCarplate("http://60.248.122.31:8999/xy_pay/request/", {
                d: "dYaTKFDVzxgHowpLLV7XSRJF127m2knyFecKlPxGRSNPc/ncX/Y8V1sO34iiYRt4mw8oYjbmAmdobTJOMpTRni2OmVOMvUxk",
                car: carplate
            }, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            dispatch({
                type: actionTypes.CAR_MESSAGE,
                payload: {
                    ...store,
                    id: data.result.id,
                    carplate: data.result.carplate,
                    datetime: data.result.datetime,
                    lotid: data.result.lotid
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (strReplace(carplate.toUpperCase()) !== "") {
            getCarMessage(carplate.toUpperCase());
            props.history.push("/payCar");
        } else {
            setShow(true);
        }
    }


    return (
        <Container fluid>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-md-center my-5">
                    <Col md={8}>
                        <div className="text-center text-white mb-5">
                            <h2>請輸入車牌號碼</h2>
                            <h4>Enter your License plate number</h4>
                        </div>
                        <FloatingLabel
                            controlId="carInput"
                            label={<><Icon id="find" />車牌號碼</>}
                        >
                            <Form.Control
                                className="rounded-pill"
                                type="text"
                                name="carplate"
                                maxLength={10}
                                style={{ paddingLeft: "35px" }}
                                placeholder="車牌號碼"
                                onChange={handleChange} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5 mb-3">
                    <Col md={8}>
                        <div className="text-center">
                            <Button variant="link" type="submit">
                                <Image src={searchImg} style={{ width: "15rem", height: "5.5rem", marginTop: "5.5rem" }} />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
            <Message show={show} onHide={() => { setShow(false) }} title="訊息" body="查無資料!!" />
        </Container >
    )
}

export default Home;