import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Title } from './Title'

export default {
    title: 'Context/Components/Title',
    component: Title,
    argTypes: {},
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => (
    <Title {...args}>Código QR</Title>
)

export const TitleOut = Template.bind({})
TitleOut.args = {}