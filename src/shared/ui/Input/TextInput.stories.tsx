import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';

const meta = {
  title: 'Shared/ui/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    padding: '',
    border: 'border-2',
    borderColor: 'border-black',
    placeholder: 'Type her',
    width: 'w-[250px]',
    value: '',
  },
};
