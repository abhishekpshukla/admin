// @flow

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

type Props = {
  text: string,
  type: | 'default'
    | 'primary'
    | 'success'
    | 'info'
    | 'inverse'
    | 'warning'
    | 'danger',
};

function Label({ type, text }: Props) {
  return (
    <span
      className={cx({
        label: true,
        'label-default': type === 'default',
        'label-primary': type === 'primary',
        'label-success': type === 'success',
        'label-info': type === 'info',
        'label-warning': type === 'warning',
        'label-danger': type === 'danger',
        'label-inverse': type === 'inverse',
      })}
    >
      {text}
    </span>
  );
}

Label.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'inverse',
    'warning',
    'danger',
  ]),
};

Label.defaultProps = {
  text: '',
  type: 'default',
};

export default Label;
