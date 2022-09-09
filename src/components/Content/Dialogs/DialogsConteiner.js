import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {changeTextFormAction,addNewInfoAction} from "../../../bll/dialogs-reducer";

const mapStateToProps = (state) => {
    return {
        state: state.dialogsReducer
    }
}

const mapDispatchToProps = {
    changeTextFormAction,
    addNewInfoAction
}

export const DialogsConteiner = connect(mapStateToProps,mapDispatchToProps)(Dialogs)