import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Shared/ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'default' },
};
export const Outline: Story = {
  args: { children: 'Outline', variant: 'outline' },
};
export const Full_Lg: Story = {
  args: { children: 'full_lg', size: 'full_lg' },
};
export const Full_Sm: Story = {
  args: { children: 'full_sm', size: 'full_sm' },
};
