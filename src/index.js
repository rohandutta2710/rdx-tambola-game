import React from "react";
import MainPage from "./MainPage";
import ReactDom from "react-dom";
import "./index.css";
import ContextManager from "./ContextManager";
ReactDom.render(<ContextManager><MainPage></MainPage></ContextManager>, document.getElementById("root"));