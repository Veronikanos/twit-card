import { useState, useEffect } from 'react';
import s from './Card.module.css';

import Background from '../../assets/images/picture.png';
import User from '../../assets/images/Hansel.png';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

export const Card = () => {
  const [followers, setFollowers] = useState(
    JSON.parse(window.localStorage.getItem('followers')) ?? 100500
  );
  const [isFollowed, setIsFollowed] = useState(
    JSON.parse(window.localStorage.getItem('isFollowed')) ?? false
  );

  const toggleFollowing = num => {
    setFollowers(followers => followers + num);
  };

  const toggleStatus = () => {
    setIsFollowed(isFollowed => (isFollowed = !isFollowed));
    isFollowed ? toggleFollowing(-1) : toggleFollowing(1);
  };

  useEffect(() => {
    window.localStorage.setItem('followers', JSON.stringify(followers));
  }, [followers]);

  useEffect(() => {
    window.localStorage.setItem('isFollowed', JSON.stringify(isFollowed));
  }, [isFollowed]);

  const handleUIFollowersVisibility = () => {
    return new Intl.NumberFormat('en-US').format(followers);
  };

  return (
    <div className={s.cardWrapper}>
      <div className={s.imageWrapper}>
        <Logo className={s.logo} />
        <img src={Background} alt="background" />
      </div>
      <div className={s.avatarContainer}>
        <div className={s.line}></div>
        <div className={s.avatarWrapper}>
          <div className={s.avatarBackground}>
            <img src={User} alt="avatar" className={s.avatar} />
          </div>
        </div>
      </div>
      <div>
        <p>777 tweets</p>
        <p>{handleUIFollowersVisibility()} followers</p>
        <button
          onClick={toggleStatus}
          type="button"
          className={`${s.button} ${isFollowed && s.buttonFollow}`}
        >
          {isFollowed ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};
