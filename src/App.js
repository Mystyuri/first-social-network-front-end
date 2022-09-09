import './App.module.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import css from "./App.module.css"
import React from "react";
import {compose} from "redux";
import {GlobalPreloaderHoc} from "./hoc/GlobalPreloaderHoc";

function App() {
    return (<div className={css.global}>
            <div className={css.app}>
                <div className={css.a1}><Header/></div>
                <div className={css.a2}><Menu/></div>
                <div className={css.a3}><Content/></div>
            </div>
    </div>
    );
}


export default compose(GlobalPreloaderHoc)(App);
