import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import logo from "../../public/img/logo.png";
import { Message } from "../modal/modal.jsx";

const fqa = () => {
    return (
        <dl>
            <dt>1、若車牌辨識錯誤導致無法繳費？</dt>
            <dd>如辨識錯誤可退後重新辨識，若一樣辨識錯誤可撥打 <strong>服務電話</strong> 請求服務人員處理。</dd>
            <dt>2、若查無車號導致無法繳費？</dt>
            <dd>可撥打 <strong>服務電話</strong> 請求服務人員處理。</dd>
            {/* <dt>3、如何用發票折抵停車費用？</dt>
                        <dd>需要開啟相機授權，才能使用發票掃描折抵功能，即可掃描發票條碼。</dd> */}
            <dt>3、對於金額問題及退款發票問題如何處理？</dt>
            <dd>可撥打 <strong>服務電話</strong> 請求服務人員處理。</dd>
        </dl>
    )
}

const refund = () => {
    return (
        <dl>
            <dt>1、申請退款</dt>
            <dd>根據本「退款與退貨政策」之條款，顧客可在7天猶豫期間到期前申請退款。</dd>
            <dt>2、退款條件</dt>
            <dd>客戶茲同意只有在下列情況下才能依據本退款與退貨政策申請退款：
                <ul>
                    <li>本車停場所刊登的資料、金額描述不符。</li>
                </ul>
                將逐案審核客戶的各項申請，並根據上述條件及本服務條款，全權酌情決定是否通過申請。雙方同意本公司對退貨及/或退款申請的決定是最終、具決定性且有拘束力的，並擔保不會因關於此決定之事由對本公司或其關係企業提起訴訟或以其他方式主張任何索賠。
            </dd>
            <dt>3、退回之退款</dt>
            <dd>客戶必須等到本公司確認已收到退回商品符合條件後才能獲得退款。如果未在指定的時間內收到客戶的消息，將不予受理。退款方式及所需時間因客戶付款方式而有不同，詳請撥打服務電話。</dd>
        </dl>
    )
}


const footer = () => {

    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({ title: "", body: "" });

    const handleFqaClick = (e) => {
        setMessage({
            title: "常見問題",
            body: fqa()
        });
        setShow(true);
    }


    const handleRefundClick = (e) => {
        setMessage({
            title: "退貨/退款",
            body: refund()
        });
        setShow(true);
    }

    return (
        <footer className="my-3">
            <Container fluid>
                <Row>
                    <div className="text-center">
                        <Image
                            src={logo}
                            style={{ zIndex: "-999", }}
                            width="200"
                            height="45"
                            alt="新詠科技"
                        />
                        <p className="mt-2 mb-3">22066 新北市板橋區中山路一段265巷20號1F</p>
                        <Button
                            className="mx-1"
                            variant="link"
                            onClick={handleFqaClick}
                        >
                            常見問題
                        </Button>
                        <Button
                            className="mx-1"
                            variant="link"
                            onClick={handleRefundClick}
                        >
                            退貨/退款
                        </Button>
                    </div>
                </Row>
            </Container>
            <Message show={show} onHide={() => { setShow(false) }} title={message.title} body={message.body} />
        </footer>
    )
}

export default footer;