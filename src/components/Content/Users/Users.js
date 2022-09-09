import React from 'react';
import FPagesNumbers from "../../../formulas/FPagesNumbers";
import FPreloader from "../../../formulas/FPreloader";
import css from "./Users.module.css"
import UserConteiner from "./User/UserConteiner";

const Users = ({state, setCurrentPage, getUsers, setFollowed}) => {
    const totalPages = state.pageData.totalCount / state.pageData.pageInformationSize
    const currentPage = state.pageData.currentPage

    return <div className={css.users}>
        <div className={css.a}>
            <div><FPagesNumbers totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}
                                getCurrentAxiosPageAction={getUsers}/></div>
        </div>
        {!state.isLoaded && <div className={css.c}><FPreloader/></div>}
        <div className={css.b}>
            {state.isLoaded && state.data.map(e => <UserConteiner photo={e.photos.small} name={e.name} id={e.id} followed={e.followed} setFollowed={setFollowed}/>)}
        </div>
    </div>
}

export default Users;