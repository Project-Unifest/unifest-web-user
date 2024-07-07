import type { Meta, StoryObj } from '@storybook/react';
import TabsExample from './TabsExample';

const meta = {
  title: 'Shared/ui/TabsExample',
  component: TabsExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabsExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
