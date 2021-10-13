import React, {useState} from "react";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import Pagination from "../Pagination/Pagination";

function Users(props) {
    let userElements = props.users.map(u => <User key={u.id}
                                                  user={u}
                                                  onToggleFollow={props.toggleFollow}
                                                  followingInProgressUsers={props.followingInProgressUsers}
    />);

    const [currentPage, setCurrentPage] = useState(1);

    function changePage(page) {
        setCurrentPage(page)
        props.onPageChanged(page)
    }

    return (
        <div>
            {props.isFetching ?
                <Preloader/> :
                <div>
                    <div>
                        {userElements}
                    </div>
                    <div>
                        <Pagination currentPage={currentPage}
                                    totalCount={props.usersTotalCount}
                                    pageSize={props.usersPerPage}
                                    onPageChange={page => {
                                        changePage(page);
                                        }
                                    }
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default Users;