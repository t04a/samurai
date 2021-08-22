import React from "react";
import User from "./User/User";
import style from './Users.module.css'

function Users(props) {

    let userElements = props.users.map(u => <User key={u.id} user={u} onToggleFollow={props.toggleFollow}
                                                       onSetUsers={props.setUsers}/>);
    let pages = [];
    for (let i = 1; i <= props.pagesCount; i++) {
        pages.push(i)
        if (i >= 24) {
            break;
        }
    }
    let paginationElements = pages.map(p => (
        <span className={`${style.pagEl} ${props.currentPage === p ? style.selected : undefined}`}
              onClick={() => props.onPageChanged(p)}>{p}</span>));

    return (
        <div>
            <div>
                {paginationElements}
            </div>
            {userElements}
        </div>
    )
}

export default Users;