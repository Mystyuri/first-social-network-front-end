import React from 'react';
import logoImg from "../../../content/avatar.jpg"
import FTextCloud from "../../../formulas/FTextCloud";
import css from "./Profile.module.css"
import FForm from "../../../formulas/FForm";
import ProfileInfo from "./ProfileInfo";

const Profile = ({isMyProfile, setNewAvatar, setNewProfileInfo, ...props}) => {
    const takeFile = (e) => {
        setNewAvatar(e.target.files[0])
    }
    return (
        <div className={css.profile}>
            <div className={css.a1}>
                <label myProfile={isMyProfile.toString()}>
                    {isMyProfile && <div><input type={"file"} onChange={takeFile}/>+</div>}
                    <img src={props.state.data.photos.large || logoImg} alt={"Avatar"} className={"avatar-logo"}/>
                </label>
            </div>
            <div className={css.a2}>
                <div style={{"marginBottom": "1em"}}>
                    <ProfileInfo info={props.state.data} setNewProfileInfo={setNewProfileInfo}
                                 isEdit={isMyProfile} statusText={props.state.status}
                                 setNewStatus={props.setStatusThunk}/>
                </div>
                <div><b>Posts: </b><FForm state={props.state} changeTextFormAction={props.changeTextFormAction}
                                          addNewInfoAction={props.addNewInfoAction}/></div>
                <div className={css.text}>
                    <FTextCloud state={props.state.dataText}/>
                </div>
            </div>
        </div>
    );
};

export default Profile;