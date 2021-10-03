import {useState} from "react";

function ProfileStatusWithHook(props) {
    let [ editMode, setEditMode] = useState(false);
    let [ profileStatus, setProfileStatus] = useState(props.profileStatus)

    function activateEditMode() {
        setEditMode(true)
    }

    function deactivateEditMode() {
        setEditMode(false);
        props.updateProfileStatus(profileStatus);
    }

    function onStatusChange(e) {
        setProfileStatus(e.currentTarget.value);
    }

    return (
        <div>
            {
                !editMode
                    &&
                <p onDoubleClick={activateEditMode}>{props.profileStatus || '--------'}</p>
            }
            {
                editMode && <input type="text"
                                   autoFocus={true}
                                   onBlur={deactivateEditMode}
                                   onChange={onStatusChange}
                                   value={profileStatus}/>
            }
        </div>
    )
}

export default ProfileStatusWithHook;