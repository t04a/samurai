import style from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import userAvatar from "../../../assets/images/medved.jpg";

function ProfileInfo(props) {
    if (!props.userProfile) {
        return <Preloader/>
    }

    function uploadPhoto(e) {
        if(e.target.files.length > 0) {
            props.uploadPhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
                    alt='background'/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.userProfile.photos.large || userAvatar}
                     alt="avatar"
                     className={style.avatar}/>
                {props.isOwner && <input type="file" onChange={uploadPhoto}/>}
                <div>
                    {props.userProfile.fullName}
                </div>
                <div>
                    <div>
                        Looking for a job? {`${props.userProfile.lookingForAJob}`}
                    </div>
                    <div>
                        Why? {props.userProfile.lookingForAJobDescription}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;