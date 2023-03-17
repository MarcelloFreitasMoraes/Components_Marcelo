import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Stage } from './Stage'

export default {
  title: 'Context/Components/Stage',
  component: Stage,
  argTypes: {},
} as ComponentMeta<typeof Stage>

const Template: ComponentStory<typeof Stage> = (args) => (
  <Stage
    {...args}
    origin="Charges"
    currentRoute="QR Code"
    action={() => alert('Hello World')}
  />
)

export const StageComponent = Template.bind({})
StageComponent.args = {}
