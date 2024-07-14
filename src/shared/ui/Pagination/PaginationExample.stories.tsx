import type { Meta, StoryObj } from '@storybook/react';
import PaginationExample from './PaginationExample';

const meta = {
  title: 'Shared/ui/PaginationExample',
  component: PaginationExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaginationExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
