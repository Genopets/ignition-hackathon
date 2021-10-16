import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/elements/Button';

export default {
  title: `Elements/Button`,
  component: Button,
  argTypes: {
    color: { control: `color` },
    children: { control: `text` },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { children } = args;
  return <Button {...args}>{children}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  width: 200,
  children: `Button`,
};

export const BackButton = Template.bind({});
BackButton.args = {
  color: `#ff0063`,
  leftIcon: `back`,
  children: `Back`,
  width: `auto`,
};

export const NextButton = Template.bind({});
NextButton.args = {
  rightIcon: `next`,
  children: `Next`,
  width: `auto`,
};
