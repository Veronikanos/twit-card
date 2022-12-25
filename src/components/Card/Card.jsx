import { useState, useEffect } from 'react';
import s from './Card.module.css';

export const Card = () => {
  const [followers, setFollowers] = useState(
    JSON.parse(window.localStorage.getItem('followers')) ?? 100500
  );
  const [status, setStatus] = useState(
    JSON.parse(window.localStorage.getItem('status')) ?? false
  );

  const toggleFollowing = num => {
    setFollowers(followers => followers + num);
  };

  const toggleStatus = () => {
    setStatus(status => (status = !status));
    status ? toggleFollowing(-1) : toggleFollowing(1);
  };

  useEffect(() => {
    window.localStorage.setItem('followers', JSON.stringify(followers));
  }, [followers]);

  useEffect(() => {
    window.localStorage.setItem('status', JSON.stringify(status));
  }, [status]);

  return (
    <div className={s.cardWrapper}>
      <div>Image</div>
      <div>
        <p>{followers}</p>
        <button onClick={toggleStatus} type="button" className={s.button}>
          {status ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};
