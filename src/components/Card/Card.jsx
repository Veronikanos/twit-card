import { useState, useEffect } from 'react';

export const Card = () => {
  const [followers, setFollowers] = useState(
    JSON.parse(window.localStorage.getItem('followers')) ?? 100500
  );
  const [status, setStatus] = useState(
    JSON.parse(window.localStorage.getItem('status')) ?? false
  );

  const follow = num => {
    setFollowers(followers => followers + num);
  };

  const toggleStatus = () => {
    setStatus(status => (status = !status));
    status ? follow(-1) : follow(1);
  };

  useEffect(() => {
    window.localStorage.setItem('followers', JSON.stringify(followers));
  }, [followers]);

  useEffect(() => {
    window.localStorage.setItem('status', JSON.stringify(status));
  }, [status]);

  return (
    <>
      <p>{followers}</p>

      <button onClick={toggleStatus} type="button">
        {status ? 'Follow' : 'Following'}
      </button>
    </>
  );
};
