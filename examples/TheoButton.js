import React from 'react';
import classNames from 'classnames';

import './TheoButton.scss';

export const TheoButton = (props) => {
  const { className, size, variant, ...rest } = props;

  return (
    <button
      className={classNames(
        'theo-button',
        size === 'large' && 'theo-button-large',
        size === 'small' && 'theo-button-small',
        size !== 'large' && size !== 'small' && 'theo-button-medium',
        variant === 'primary' && 'theo-button-primary',
        variant !== 'primary' && 'theo-button-secondary',
        className
      )}
      type="button"
      {...rest}
    />
  );
};
