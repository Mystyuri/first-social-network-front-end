import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./bll/store"
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {reduxStore} from "./bll/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = (x) => {
    root.render(
        // <React.StrictMode>
            <Provider store={reduxStore}>
                <BrowserRouter>
                    <App state={x}/>
                </BrowserRouter>
            </Provider>
        // </React.StrictMode>
    )
}

renderApp()
// renderApp(store.getState())
// store.subscribe(renderApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
