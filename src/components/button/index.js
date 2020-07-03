import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

const defaultActiveClassName = 'text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer';
const defaulDisabledClassName = 'text-sm bg-gray-600 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded cursor-not-allowed';

const Button = ({
  className = '',
  onClick,
  text = '',
  disabled = false,
  activeStyle = defaultActiveClassName,
  disabledStyle = defaulDisabledClassName,
  isLoading = false,
}) => (
  <button
    type="button"
    className={disabled || isLoading ? `${disabledStyle} ${className}` : `${activeStyle} ${className}`}
    onClick={onClick}
    disabled={disabled || isLoading}
  >
    <span className={`${isLoading ? 'pr-2' : ''}`}>{text}</span>
    {isLoading && <FaSpinner className="spinner" />}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  activeStyle: PropTypes.string,
  disabledStyle: PropTypes.string,
  text: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
