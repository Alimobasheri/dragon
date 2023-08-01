import type { Meta, StoryObj } from '@storybook/react';

import  MyButton from '../components/MyButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/MyButton',
  component: MyButton,
  parameters: {
  // Optional parameter to center the components in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This components will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick : { action: 'handleClick' },
  },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Red: Story = {
  args: {
    backgroundColor: 'red',
    label: 'Press Me',
    size: 'md',
  },
};

export const Green: Story = {
  args: {
    backgroundColor: 'green',
    label: 'Press Me',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    backgroundColor: 'red',
    label: 'Press Me',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    backgroundColor: 'red',
    label: 'Press Me',
    size: 'lg',
  },
};
