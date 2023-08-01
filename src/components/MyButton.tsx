// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line func-style
// @ts-ignore
// eslint-disable-next-line func-style
function MyButton ({ label, backgroundColor = 'red', size = 'md',handleClick}) {
  let scale = 1;
  if (size === 'sm') {
    scale = 0.75;
  }
  if (size === 'lg') {
    scale = 1.5;
  }
  const style = {

    backgroundColor,
    padding: `${scale * 0.5}rem ${scale}rem`,
    border: `1px solid ${backgroundColor}`,
    borderRadius:'10px',
  };
  return (
    <button  onClick={handleClick} style={style}>
      {label}
    </button>
  );
}
MyButton.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func,
};
export default MyButton;
