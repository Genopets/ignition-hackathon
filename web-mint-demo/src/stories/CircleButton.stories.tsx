import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CircleButton from '../components/elements/CircleButton';

export default {
  title: `Elements/CircleButton`,
  component: CircleButton,
  argTypes: {
    text: { control: `text` },
    fontSize: { control: `number` },
  },
} as ComponentMeta<typeof CircleButton>;

const Template: ComponentStory<typeof CircleButton> = (args) => (
  <div
    style={{
      display: `flex`,
      justifyContent: `center`,
      alignContent: `center`,
      marginTop: `2em`,
    }}
  >
    <CircleButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: `Summon My Genopet`,
  fontSize: 32,
};
