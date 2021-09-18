import React from "react";

class ProfileStatus extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: props.profileStatus
        }
    }*/
    state = {
        editMode: false,
        profileStatus: this.props.profileStatus
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateProfileStatus(this.state.profileStatus)
    }
    onStatusChange = (e) => {
        this.setState({profileStatus: e.currentTarget.value});
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                profileStatus: this.props.profileStatus
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <p onDoubleClick={this.activateEditMode}>{this.props.profileStatus || '--------'}</p> :
                    <input onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}
                           type="text"
                           value={this.state.profileStatus}
                           autoFocus={true}/>}
            </div>
        )
    }
}

export default ProfileStatus;