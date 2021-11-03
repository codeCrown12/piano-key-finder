import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Controls from "./controls";

var mainbody = document.querySelector("#container")

ReactDom.render(
    <div>
        <Controls/>
    </div>,
    mainbody
)