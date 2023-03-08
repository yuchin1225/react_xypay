import React from "react";
import Home from "./layout/home";
import Footer from "./public/footer";

import "./public/css/index.css";

import background from "./public/img/backgroud.png";

// const background = require("./public/img/backgroud.png");

const App = () => {
    return (
        <>
            <div className="position-relative w-100">
                <img
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{ width: "100%", height: "50rem", zIndex: "-999" }}
                    src={background}
                />
            </div>
            <Home />
            <Footer />
        </>
    )
}

export default App;