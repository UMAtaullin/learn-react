import style from '../ProfileInfo.module.css';

const ProfileData = ({ profile, isOwner, goToEdit }) => {
  return (
    <>
      {isOwner && (
        <button className={style.editMode} onClick={goToEdit}>
          edit data
        </button>
      )}
      <p className={style.name}>
        <span>Name:</span> {profile.fullName}
      </p>
      <p className={style.job}>
        <span>Job:</span> {profile.lookingForAJob ? 'yes' : 'no'}
      </p>
      <p className={style.name}>
        <span>About me:</span> {profile.aboutMe}
      </p>
      <p className={style.name}>
        <span>Skills:</span> {profile.lookingForAJobDescription}
      </p>
      <p className={style.name}>
        <span>GitHub:</span> {profile.contacts.github}
      </p>
      <p className={style.name}>
        <span>VK:</span> {profile.contacts.vk}
      </p>
    </>
  );
};

export default ProfileData;

