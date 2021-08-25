import style from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {
    if (!props.userProfile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
                    alt='background'/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.userProfile.photos.large} alt="avatar"/>
                <div>description</div>
            </div>
        </div>
    );
}

export default ProfileInfo;