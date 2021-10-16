/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LogoButton from '../components/elements/LogoButton';
import Logo from './assets/genopets-logo.svg';

export default {
  title: `Elements/LogoButton`,
  component: LogoButton,
  argTypes: {
    children: {
      control: `element`,
      description: `must bea react element. eg.: Logo or image`,
    },
  },
} as ComponentMeta<typeof LogoButton>;

const Template: ComponentStory<typeof LogoButton> = (args) => (
  <LogoButton {...args}>
    <img src={Logo} alt="logo" width="60%" />
  </LogoButton>
);

export const Default = Template.bind({});
Default.args = {};
