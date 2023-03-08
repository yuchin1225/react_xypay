import React from "react";
import logo from "../../public/img/logo.png";


const footer = () => {
    return (
        <footer className="my-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="text-center">
                        <img
                            src={logo}
                            width="200"
                            height="45"
                            style={{ zIndex: "-999", }}
                            alt="新詠科技"
                        />
                        <p className="mt-2 mb-3">22066 新北市板橋區中山路一段265巷20號1F</p>
                        <button id="faq" type="button" className="btn btn-link mx-1">常見問題</button>
                        <button id="refund" type="button" className="btn btn-link mx-1">退貨/退款</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer;