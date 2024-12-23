import style from '../ProfileInfo.module.css';

const ProfilePhoto = ({ profile, isOwner, onSelectedPhoto }) => {
  return (
    <div className={style.ava}>
      <img
        src={
          profile.photos.large != null
            ? profile.photos.large
            : 'https://avatars.dzeninfra.ru/get-zen_doc/9759668/pub_645cec1a20e1c7242b32db52_6460ad5c6edf700dfdf05e3a/scale_1200'
        }
        alt="Здесь должно было быть фото профиля"
      />
      {isOwner && (
        <div className={style.selectedPhoto}>
          <input type="file" onChange={onSelectedPhoto} />
        </div>
      )}
    </div>
  );
};

export default ProfilePhoto;
