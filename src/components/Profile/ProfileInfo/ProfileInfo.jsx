import Preloader from '../../common/Preloader/Preloader';
import cls from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  // debugger
  if (!props.profile) {
    return <div><Preloader/></div>;
  }

  return (
    <div className={cls.profile}>
      <div className={cls.ava}>
        <img src={props.profile.photos.large} alt="" />

        {/* <img
          src="https://avatars.dzeninfra.ru/get-zen_doc/9759668/pub_645cec1a20e1c7242b32db52_6460ad5c6edf700dfdf05e3a/scale_1200"
          alt=""
        /> */}
      </div>
      <div className={cls.description}>
        <p className={cls.name}>
          <span>Name:</span> {props.profile.fullName}
        </p>
        <p className={cls.name}>
          <span>About me:</span> {props.profile.aboutMe}
        </p>
        <p className={cls.name}>
          <span>Interests:</span> {props.profile.lookingForAJobDescription}
        </p>
        <p className={cls.name}>
          <span>Telegram:</span> {props.profile.contacts.github}
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
