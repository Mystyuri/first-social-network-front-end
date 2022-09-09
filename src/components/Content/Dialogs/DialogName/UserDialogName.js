import React from 'react';
import FLink from "../../../../formulas/FLink";

const DialogName = ({state}) => {
    const fDialogName = state.map(data => <div><FLink path={data.id} name={data.name}/></div>)

    return (
        fDialogName
    );
};

export default DialogName;