import React from 'react';
import PropTypes from 'prop-types';
import { Picture, Img } from './Image.styles';

const Image = ({source, alt}) => (
  <Picture>
    <Img src={source} alt={alt} />
  </Picture>
);

Image.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
