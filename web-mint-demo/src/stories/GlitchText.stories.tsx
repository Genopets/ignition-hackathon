import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GlitchText from '../components/elements/GlitchText';

export default {
  title: `Elements/GlitchText`,
  component: GlitchText,
  argTypes: {
    color: { control: `color` },
    children: { control: `text` },
  },
} as ComponentMeta<typeof GlitchText>;

const Template: ComponentStory<typeof GlitchText> = (args) => {
  const { color, children } = args;
  return <GlitchText color={color}>{children}</GlitchText>;
};

export const Default = Template.bind({});
Default.args = {
  children: `Glitch Text`,
};
