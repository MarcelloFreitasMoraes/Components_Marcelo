import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BoxQr } from './BoxQr'

export default {
    title: 'Context/Components/BoxQr',
    component: BoxQr,
    argTypes: {},
} as ComponentMeta<typeof BoxQr>

const Template: ComponentStory<typeof BoxQr> = (args) => (
    <BoxQr {...args}></BoxQr>
)

export const BoxQR = Template.bind({})
BoxQR.args = {}
