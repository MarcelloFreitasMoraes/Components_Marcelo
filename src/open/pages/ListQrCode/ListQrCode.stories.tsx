import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ListQrCode } from './ListQrCode'

export default {
  title: 'Context/Components/MyComponent',
  component: ListQrCode,
  argTypes: {},
} as ComponentMeta<typeof ListQrCode>

const Template: ComponentStory<typeof ListQrCode> = (args) => (
  <ListQrCode {...args}></ListQrCode>
)

export const MyComponentTest = Template.bind({})
MyComponentTest.args = {}
