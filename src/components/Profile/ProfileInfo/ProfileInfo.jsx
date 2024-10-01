import cls from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={cls.profile}>
      <div className={cls.ava}>
        <img
          src='https://avatars.dzeninfra.ru/get-zen_doc/9759668/pub_645cec1a20e1c7242b32db52_6460ad5c6edf700dfdf05e3a/scale_1200'
          alt=''
        />
      </div>
      <div className={cls.description}>
        <p className={cls.name}>Name: Ural Ataullin</p>
        <p className={cls.name}>Date: 24.01.1988</p>
        <p className={cls.name}>Telegram: @UMAtaullin</p>
        <p className={cls.name}>Interests: programming</p>
      </div>
    </div>
  )
}

export default ProfileInfo