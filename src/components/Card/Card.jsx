// import { useEffect } from 'react';
import { useState } from 'react';

export const Card = () => {
  const [followers, setFollowers] = useState(100500);
  const [status, setStatus] = useState(false);

  const follow = num => {
    // console.log('follow');
    setFollowers(followers => followers + num);
  };

  const toggleStatus = () => {
    // console.log('toggleStatus');
    setStatus(status => (status = !status));
    status ? follow(-1) : follow(1);
  };

  return (
    <>
      <p>{followers}</p>

      <button onClick={toggleStatus} type="button">
        {status ? 'Unfollow' : 'Follow'}
      </button>
    </>
  );
};
