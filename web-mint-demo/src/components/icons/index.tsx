import React from 'react';
import { icons, IconName } from './icons';

type IconProps = {
  color?: string;
  iconName: IconName;
};

const Icon = ({ color, iconName }: IconProps): JSX.Element => (
  <svg
    viewBox={icons[iconName].viewBox}
    style={{ width: `100%`, height: `100%` }}
  >
    <g fill={color || `currentColor`}>{icons[iconName].paths}</g>
  </svg>
);

export * from './icons';

export default Icon;
