import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css';
import StatusWithHooks from './Status/StatusWithHooks';
import ProfileData from './Data/ProfileData';
import ProfileDataForm from './Data/ProfileDataForm';
import ProfilePhoto from './Photo/ProfilePhoto';

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  if (!props.profile) {
    return <Preloader />;
  }

  const onSelectedPhoto = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0]);
    }
  };

  const goToEdit = () => {
    setEditMode(true);
    setValue('fullName', props.profile.fullName);
    setValue('lookingForAJob', props.profile.lookingForAJob);
    setValue(
      'lookingForAJobDescription',
      props.profile.lookingForAJobDescription
    );
    setValue('aboutMe', props.profile.aboutMe || ''); 
    setValue('github', props.profile.contacts.github || '');
    setValue('vk', props.profile.contacts.vk || '');
  };

  // Логика сохранения данных на сервере
  const onSubmit = async (data) => {
    const profileData = {
      userId: props.userId,
      lookingForAJob: data.lookingForAJob,
      lookingForAJobDescription: data.lookingForAJobDescription,
      fullName: data.fullName,
      aboutMe: data.aboutMe, 
      contacts: {
        github: data.github,
        vk: data.vk,
      },
    };

    console.log('Submitted profile data:', profileData); // Логируем данные перед отправкой
    await props.saveData(profileData); // Сохраняем данные
    setEditMode(false);
  };

  return (
    <div className={style.profile}>
      <div className={style.status}>
        <StatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      <ProfilePhoto
        profile={props.profile}
        isOwner={props.isOwner}
        onSelectedPhoto={onSelectedPhoto}
      />
      <div className={style.description}>
        {editMode ? (
          <ProfileDataForm
            onSubmit={handleSubmit(onSubmit)}
            register={register}
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

export default ProfileInfo;
