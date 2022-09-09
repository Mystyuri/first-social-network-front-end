import React from 'react';
import {AuthContainer} from "../Auth/AuthContainer";
import css from "./Header.module.css"

const Header = () => {
    return (<>
            <div className={css.header}>
            <div style={{fontWeight: "bold", fontSize: "30px", color: "white", font: "Arial"}}>
                SocialNetwork
            </div>
            <div className={css.b}>
                <AuthContainer/>
            </div>
        </div>
    </>
    );
};

export default Header;