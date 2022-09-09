import React, {useEffect, useState} from 'react';
import css from "./ProfileStatus.module.css"

const ProfileStatus = ({text, setAction, isEdit, defaultText}) => {
    const refStatus = React.createRef()

    const [stateText,setStateText] = useState(text)
    const [stateLogic,setStateLogic] = useState(false)

    useEffect(() => {
        setStateText(text)
    }, [text])

    const setLogic = () => {
        return setStateLogic(!stateLogic)
    }

    const setValue = () => {
        const currentText = refStatus.current.value
        return setStateText(currentText)
    }

    const postText = () => {
        stateText !== text && setAction(stateText)
        return setLogic()
    }

    return (
            <span className={css.profileStatus}>
                {!stateLogic ?
                    <span isEdit={isEdit.toString()} onClick={isEdit && setLogic}>{text || defaultText}</span> :
                    <input type={"text"} autoFocus={true} ref={refStatus} onInput={setValue} onBlur={postText} value={stateText}
                           className={css.inputText}/>}
            </span>
    );
};

export default ProfileStatus;