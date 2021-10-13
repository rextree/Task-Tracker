import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShow }) => {

  return (
    <header className='flex items-center'>
      <h1 className='text-2xl mr-4'>{title}</h1>
      <Button text="add" onClick={onShow} />
    </header>
  );
};
// css in js
// const headerStyle = {
//     backgroundColor: 'blue',
//     color: 'orange'
// }

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
