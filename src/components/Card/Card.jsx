import { InfoBlock } from './InfoBlock/InfoBlock';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import User from '../../assets/images/Hansel.png';
import Background from '../../assets/images/picture.png';
import s from './Card.module.css';

export const Card = () => {
  return (
    <div className={s.cardWrapper}>
      <div className={s.cardBlocks}>
        <div className={s.imageWrapper}>
          <Logo className={s.logo} />
          <img src={Background} alt="background" />
        </div>
        <InfoBlock />
      </div>
      <div className={s.avatarContainer}>
        <div className={s.line}></div>
        <div className={s.avatarWrapper}>
          <div className={s.avatarBackground}>
            <img src={User} alt="avatar" className={s.avatar} />
          </div>
        </div>
      </div>
    </div>
  );
};
