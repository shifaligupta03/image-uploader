
import React from 'react';
import PropTypes from 'prop-types';

const Configuration = ({
  children,
}) => (
  <>
    {children}
  </>
);

Configuration.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Configuration;
