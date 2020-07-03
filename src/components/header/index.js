import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ history }) => {
  const goToHome = () => history.push('/');
  return (
    <div className="flex flex-col">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div
          onClick={goToHome}
          className="cursor-pointer flex items-center flex-shrink-0 text-white mr-6"
          role="presentation"
        >
          <span className="font-semibold text-xl tracking-tight">
            Image Uploader
          </span>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  history: PropTypes.object,
};

export default Header;
