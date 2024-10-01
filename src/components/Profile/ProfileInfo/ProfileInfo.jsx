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
        <p className={cls.name}><span>Name:</span> Ural Ataullin</p>
        <p className={cls.name}><span>Date:</span> 24.01.1988</p>
        <p className={cls.name}><span>Telegram:</span> @UMAtaullin</p>
        <p className={cls.name}><span>Interests:</span> programming</p>
      </div>
    </div>
  )
}

export default ProfileInfo