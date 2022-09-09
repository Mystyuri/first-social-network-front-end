import DialogName from "./DialogName/UserDialogName";
import Dialog from "./Dialog/Dialog";
import css from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.a1}><DialogName state={props.state.data}/></div>
            <div className={css.a2}><Dialog props={props}/></div>
        </div>
    );
};

export default Dialogs;