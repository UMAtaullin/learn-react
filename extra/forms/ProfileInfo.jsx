import { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css';
import StatusWithHooks from './Status/StatusWithHooks';

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [formData, setFormData] = useState({});

  if (!props.profile) {
    return (
      <div>
        <Preloader />
      </div>
    );
  }

  const onSelectedPhoto = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0]);
    }
  };

  const goToEdit = () => {
    setEditMode(true);
    setFormData({
      fullName: props.profile.fullName,
      lookingForAJob: props.profile.lookingForAJob,
      lookingForAJobDescription: props.profile.lookingForAJobDescription,
      github: props.profile.contacts.github,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Здесь вы можете добавить логику для сохранения данных на сервере
    console.log('Submitted data:', formData);
    // После успешного сохранения можно вернуться в режим просмотра
    setEditMode(false);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className={style.profile}>
      <div className={style.status}>
        <StatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
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
        {editMode ? (
          <ProfileDataForm
            profile={formData}
            onSubmit={onSubmit}
            handleChange={handleChange}
          />
        ) : (
          <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            goToEdit={goToEdit}
          />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEdit }) => {
  return (
    <>
      {isOwner && (
        <button className="editMode" onClick={goToEdit}>
          edit
        </button>
      )}
      <p className={style.name}>
        <span>Name:</span> {profile.fullName}
      </p>
      <p className={style.job}>
        <span>Job:</span> {profile.lookingForAJob ? 'yes' : 'no'}
      </p>
      <p className={style.name}>
        <span>Skills:</span> {profile.lookingForAJobDescription}
      </p>
      <p className={style.name}>
        <span>GitHub:</span> {profile.contacts.github}
      </p>
    </>
  );
};

const ProfileDataForm = ({ profile, onSubmit, handleChange }) => {
  return (
    <form onSubmit={onSubmit} className={style.form}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="fullName"
          value={profile.fullName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Looking for a job:</label>
        <input
          type="checkbox"
          name="lookingForAJob"
          checked={profile.lookingForAJob}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Skills:</label>
        <textarea
          name="lookingForAJobDescription"
          value={profile.lookingForAJobDescription}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>GitHub:</label>
        <input
          type="text"
          name="github"
          value={profile.github} // Изменено на profile.github для корректного отображения
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileInfo;
