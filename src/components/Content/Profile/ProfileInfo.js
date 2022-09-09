import React, {useEffect, useMemo, useState} from "react";
import {useForm} from "react-hook-form";
import FButton from "../../../formulas/FButton";
import css from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({info, setNewProfileInfo, isEdit, setNewStatus, statusText}) => {

    let x = Object.keys(info.contacts).map(key => (
        info.contacts[key] && <span key={key} style={{"padding-left": "10px"}}>
            <a target="_blank"
               href={(info.contacts[key].substr(0, 8) !== "https://" && "https://" || "") + info.contacts[key]}
               style={{"textDecoration": "none", "color": "var(--color-active)", "fontWeight": "bold"}}>[{key}]</a>
        </span>
    ))
    let y = x.filter(e => e !== null)

    const [profileLogic, setLogicProfileState] = useState(true)

    const [profileCookie, setProfileCookie] = useState({})
    const editProfileLogic = () => {
        setLogicProfileState(!profileLogic)
    }

    const InfoProfileEdit = ({name, typeInput, nameForSubmit, defaultValue, defaultChecked, colorText}) => {
        ("render info")
        // const [value, setValue] = useState(defaultValue)
        // useEffect(()=>setValue(defaultValue), [defaultValue])

        let x = nameForSubmit ? register(nameForSubmit) : {}
        return <div className={css.inputForm} style={{"color": colorText}}>
            {name && <b>{name}: </b>}
            {!profileLogic
                ? <input defaultValue={defaultValue}
                         defaultChecked={defaultChecked}
                         type={typeInput} {...x}/>
                : <span>{defaultValue}</span>}
        </div>
    }

    // FormLogic
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm({mode: "onChange"});
    const onSubmit = async data => {
        reset()
        if (profileLogic === false) setProfileCookie(data)
        if (JSON.stringify(profileCookie) !== JSON.stringify(data) && (profileLogic === true)) {
            setNewProfileInfo(data)
            reset()
        }
    };
    // ///////

    return <>

        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <h1><InfoProfileEdit defaultValue={info.fullName} typeInput={"text"}
                             nameForSubmit={"fullName"} profileLogic={profileLogic}/></h1>

            <i>
                - «<ProfileStatus isEdit={isEdit} text={statusText}
                                  setAction={setNewStatus}
                                  defaultText={"no status"}/>»
            </i>

            {isEdit && <div className={css.editButton}>
                <FButton logic={!profileLogic} trueName={"✓ edit profile"} falseName={"+ edit profile"}
                         setNewLogic={editProfileLogic}/>
            </div>}

            <InfoProfileEdit name={"About me"} defaultValue={info.aboutMe} typeInput={"text"}
                             nameForSubmit={"aboutMe"} profileLogic={profileLogic}/>
            <InfoProfileEdit name={"Job status"} defaultValue={info.lookingForAJobDescription}
                             typeInput={"text"} nameForSubmit={"lookingForAJobDescription"}
                             profileLogic={profileLogic}/>
            {profileLogic &&
                <InfoProfileEdit name={"Loking for a job?"} defaultValue={info.lookingForAJob ? "yes" : "no"}
                                 typeInput={"text"}/>}
            {!profileLogic &&
                <InfoProfileEdit name={"Loking for a job?"} defaultChecked={info.lookingForAJob} typeInput={"checkbox"}
                                 nameForSubmit={"lookingForAJob"}/>}
            <h3>Contacts: </h3>
            {!profileLogic
                ? <>
                    <div>{
                        Object.keys(info.contacts).map(key => (
                            <InfoProfileEdit key={key} defaultValue={info.contacts[key]} name={"- " + key}
                                             typeInput={"text"} nameForSubmit={"contacts." + key}/>
                        ))
                    }</div>
                </>
                : <>
                    {y.length !== 0 && <div>{x}</div>}
                </>
            }
        </form>
    </>;
}

export default ProfileInfo