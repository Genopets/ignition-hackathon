/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CircleToggleButton from '../components/elements/CircleToggleButton';
import SoundIcon from './assets/sound-on.svg';

export default {
  title: `Elements/CircleToggleButton`,
  component: CircleToggleButton,
  argTypes: {
    size: { control: `select`, options: [`small`, `medium`, `large`] },
    children: { control: `element`, description: `it's contain image/text` },
    activeColor: { control: `color` },
    hoverColor: { control: `color` },
    borderColor: { control: `color` },
    borderHoverColor: { control: `color` },
  },
} as ComponentMeta<typeof CircleToggleButton>;

const Template: ComponentStory<typeof CircleToggleButton> = (args) => (
  <CircleToggleButton {...args}>
    <img
      src={SoundIcon}
      alt="sound-control"
      width={60}
      style={{ opacity: 0.5 }}
    />
  </CircleToggleButton>
);

const RecordButtonTemplate: ComponentStory<typeof CircleToggleButton> = (
  args,
) => <CircleToggleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: `small`,
  borderColor: `#00ffc8`,
};

export const Record = RecordButtonTemplate.bind({});
Record.args = {
  size: `medium`,
  activeColor: `#FF0263`,
  hoverColor: `#FF0263`,
  borderColor: `#FF0263`,
  borderHoverColor: `#FF0263`,
  initialActive: 20,
  hoverGlowColor: `rgb(255 2 99 / 40%)`,
};
