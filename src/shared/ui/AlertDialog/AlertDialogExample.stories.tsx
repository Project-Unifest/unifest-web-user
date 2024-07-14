import type { Meta, StoryObj } from '@storybook/react';
import AlertDialogExample from './AlertDialogExample';

const meta = {
  title: 'Shared/ui/AlertDialogExample',
  component: AlertDialogExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialogExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
