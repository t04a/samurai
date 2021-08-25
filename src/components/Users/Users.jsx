import React from "react";
import User from "./User/User";
import style from './Users.module.css'
import Preloader from "../common/Preloader/Preloader";

function Users(props) {

    let userElements = props.users.map(u => <User key={u.id} user={u} onToggleFollow={props.toggleFollow}
                                                  onSetUsers={props.setUsers}/>);
    let pages = [];
    for (let i = 1; i <= props.pagesCount; i++) {
        pages.push(i)
        if (i >= 10) {
            break;
        }
    }
    let paginationElements = pages.map(p => (
        <span className={`${style.pagEl} ${props.currentPage === p ? style.selected : undefined}`}
              onClick={() => props.onPageChanged(p)}>{p}</span>));

    return (
        <div>
            { props.isFetching ?
                <Preloader/> :
                <div>
                    <div className={style.pagination}>
                        {paginationElements}
                    </div>
                    <div>
                        {userElements}
                    </div>
                </div>
            }
        </div>
    )
}

export default Users;