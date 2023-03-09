import React from "react";
import { Image } from "react-bootstrap";
import Main from "./layout/home";
import Footer from "./public/footer";

import background from "./public/img/backgroud.png";
import "./public/css/index.css";

const App = () => {
    return (
        <>
            <div className="position-relative w-100">
                <Image
                    className="position-absolute top-50 start-50 translate-middle"
                    src={background}
                    style={{ width: "100%", height: "50rem", zIndex: "-999" }}
                />
            </div>
            <Main />
            <Footer />
        </>
    )
}

export default App;