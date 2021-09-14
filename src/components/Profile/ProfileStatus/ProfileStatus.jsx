import React from "react";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        }
    }
    toggleEditMode = () => {
        this.setState({editMode: !this.state.editMode})
    }
    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <p onDoubleClick={this.toggleEditMode}>{this.props.status}</p> :
                    <input onBlur={this.toggleEditMode} type="text" value={this.props.status} autoFocus={true}/>}
            </div>
        )
    }
}

export default ProfileStatus;