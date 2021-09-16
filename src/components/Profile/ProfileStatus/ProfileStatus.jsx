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
        status: this.props.profileStatus
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateProfileStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <p onDoubleClick={this.activateEditMode}>{this.props.profileStatus || '--------'}</p> :
                    <input onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}
                           type="text"
                           value={this.state.status}
                           autoFocus={true}/>}
            </div>
        )
    }
}

export default ProfileStatus;