import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css';
import StatusWithHooks from './Status/StatusWithHooks';

const ProfileInfo = (props) => {
  // debugger
  if (!props.profile) {
    return <div><Preloader/></div>;
  }

  const onSelectedPhoto = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0]);
    }
  }

  return (
    <div className={style.profile}>
      <StatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <div className={style.ava}>
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : 'https://avatars.dzeninfra.ru/get-zen_doc/9759668/pub_645cec1a20e1c7242b32db52_6460ad5c6edf700dfdf05e3a/scale_1200'
          }
          alt="Здесь должно было быть фото профиля"
        />
        <div className={style.selectedPhoto}>
          {props.isOwner && <input type="file" onChange={onSelectedPhoto} />}
        </div>
      </div>
      <div className={style.description}>
        <p className={style.name}>
          <span>Name:</span> {props.profile.fullName}
        </p>
        <p className={style.name}>
          <span>About me:</span> {props.profile.aboutMe}
        </p>
        <p className={style.name}>
          <span>Interests:</span> {props.profile.lookingForAJobDescription}
        </p>
        <p className={style.name}>
          <span>Telegram:</span> {props.profile.contacts.github}
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
