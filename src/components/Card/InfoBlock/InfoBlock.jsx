import { useState, useEffect } from 'react';
import { Button } from 'components/Button/Button';
import s from './InfoBlock.module.css';

export const InfoBlock = () => {
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
    <div className={s.info}>
      <p className={s.tweets}>777 tweets</p>
      <p className={s.followers}>{handleUIFollowersVisibility()} followers</p>
      <Button isFollowed={isFollowed} toggleStatus={toggleStatus} />
    </div>
  );
};
