import style from "./ProfileInfo.module.css"

function ProfileInfo() {

    return (
        <div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
                    alt=''/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;