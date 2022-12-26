import s from './Button.module.css';

export const Button = ({ isFollowed, toggleStatus }) => {
  return (
    <button
      onClick={toggleStatus}
      type="button"
      className={`${s.button} ${isFollowed && s.buttonFollow}`}
    >
      {isFollowed ? 'Following' : 'Follow'}
    </button>
  );
};
