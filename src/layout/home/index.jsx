import React, { useState } from "react";
import searchImg from "../../public/img/btn-search.png";
import Icon from "../../public/svg";

import { strReplace } from "../../public/tools";


const home = () => {

    const [carplate, setCarplate] = useState("");

    const handleChange = (e) => {
        setCarplate(e.target.value);
    }

    const handleClick = () => {
        if (strReplace(carplate.toUpperCase()) !== "") {

        } else {

        }
    }
    return (
        <div className="collapse show">
            <div className="container-fluid">
                <div className="row my-5">
                    <div className="col-md-8 mx-auto">
                        <div className="text-center text-white">
                            <h2>請輸入車牌號碼</h2>
                            <h4>Enter your License plate number</h4>
                        </div>
                        <div
                            className="form-floating my-5 mx-auto"
                            style={{ width: "80%", height: "30%" }}>

                            <input
                                className="form-control rounded-pill"
                                type="text"
                                maxLength="10"
                                id="carplate"
                                placeholder="ABC1234"
                                style={{ paddingLeft: "35px" }}
                                onChange={handleChange}
                            />
                            <label htmlFor="carplate">
                                <Icon id="find" />
                                車牌號碼
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="text-center">
                            <img
                                className="btn"
                                src={searchImg}
                                style={{ width: "15rem", height: "5.5rem", marginTop: "3.5rem" }}
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home;